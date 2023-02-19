local Spawn = require(script.Parent.Spawn)

local Promise = {}
Promise.__index = Promise

function Promise.Promise(Callback: (Resolve: (...any) -> (), Reject: (...any) -> ()) -> ())
	local self = setmetatable({}, Promise)

	self.Status = "Pending"
	self.OnResolve = {} :: { (...any) -> () }
	self.OnReject = {} :: { (...any) -> () }

	self.Value = {} :: { any }

	self.Thread = nil :: thread?
	self.Thread = coroutine.create(function()
		xpcall(Callback, function(Error)
			(self :: any):_Reject(Error)
		end, function(...)
			(self :: any):_Resolve(...)
		end, function(...)
			(self :: any):_Reject(...)
		end)
	end)

	task.spawn(self.Thread :: thread)

	return self
end

Promise.new = Promise.Promise :: (Callback: (Resolve: (...any) -> (), Reject: (...any) -> ()) -> ()) -> Promise

function Promise.Resolve(...: any): Promise
	local self = setmetatable({}, Promise)

	self.Status = "Resolved"
	self.OnResolve = {} :: { (...any) -> () }
	self.OnReject = {} :: { (...any) -> () }
	self.Value = { ... } :: { any }
	self.Thread = nil :: thread?

	return self
end

function Promise.Reject(...: any): Promise
	local self = setmetatable({}, Promise)

	self.Status = "Rejected"
	self.OnResolve = {} :: { (...any) -> () }
	self.OnReject = {} :: { (...any) -> () }
	self.Value = { ... } :: { any }
	self.Thread = nil :: thread?

	return self
end

function Promise._Resolve(self: Promise, ...: any)
	assert(self.Status == "Pending", "Cannot resolve a promise that is not pending.")

	self.Status = "Resolved"
	self.Value = { ... }

	for _, Callback in self.OnResolve do
		Spawn(Callback, ...)
	end

	if self.Thread then
		task.cancel(self.Thread)
	end
end

function Promise._Reject(self: Promise, ...: any)
	assert(self.Status == "Pending", "Cannot reject a promise that is not pending.")

	self.Status = "Rejected"
	self.Value = { ... }

	for _, Callback in self.OnReject do
		Spawn(Callback, ...)
	end

	if self.Thread then
		task.cancel(self.Thread)
	end
end

function Promise.Then(self: Promise, OnResolve: ((...any) -> ...any)?, OnReject: ((...any) -> ...any)?): Promise
	return Promise.Promise(function(Resolve, Reject)
		local function PromiseResolutionProcedure(Value: Promise | any, ...: any)
			if type(Value) == "table" and getmetatable(Value) == Promise then
				if Value.Status == "Pending" then
					table.insert(Value.OnResolve, Resolve)
					table.insert(Value.OnReject, Reject)
				elseif Value.Status == "Resolved" then
					Resolve(Value.Value)
				elseif Value.Status == "Rejected" then
					Reject(Value.Value)
				end
			else
				Resolve(Value, ...)
			end
		end

		if self.Status == "Pending" then
			if OnResolve then
				table.insert(self.OnResolve, function(...)
					PromiseResolutionProcedure(OnResolve(...))
				end)
			else
				table.insert(self.OnResolve, PromiseResolutionProcedure)
			end

			if OnReject then
				table.insert(self.OnReject, function(...)
					PromiseResolutionProcedure(OnReject(...))
				end)
			else
				table.insert(self.OnReject, Reject)
			end
		elseif self.Status == "Resolved" then
			if OnResolve then
				PromiseResolutionProcedure(OnResolve(unpack(self.Value)))
			else
				Resolve(unpack(self.Value))
			end
		elseif self.Status == "Rejected" then
			if OnReject then
				PromiseResolutionProcedure(OnReject(unpack(self.Value)))
			else
				Reject(unpack(self.Value))
			end
		end
	end)
end

function Promise.Catch(self: Promise, RejectCallback: (...any) -> ())
	return self:Then(nil, RejectCallback)
end

function Promise.Finally(self: Promise, FinallyCallback: () -> ())
	return self:Then(function(...)
		FinallyCallback()
		return ...
	end, function(Error)
		FinallyCallback()
		error(Error)
	end)
end

function Promise.Await(self: Promise): ...any
	if self.Status == "Resolved" then
		return unpack(self.Value)
	elseif self.Status == "Rejected" then
		return error(unpack(self.Value))
	else
		local Current = coroutine.running()

		local function Resume()
			coroutine.resume(Current)
		end

		table.insert(self.OnResolve, Resume)
		table.insert(self.OnReject, Resume)

		coroutine.yield()

		if self.Status == "Resolved" then
			return unpack(self.Value)
		else
			return error(unpack(self.Value))
		end
	end
end

export type Promise = typeof(Promise.Promise(...))

return Promise
