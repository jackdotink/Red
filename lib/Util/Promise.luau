local Spawn = require(script.Parent.Spawn)

local Promise = {}
Promise.__index = Promise

function Promise.Promise(Callback: (Resolve: (Value: any) -> (), Reject: (Error: string) -> ()) -> ())
	local self = setmetatable({}, Promise)

	self.Status = "Pending"
	self.OnResolve = {} :: { (Value: any) -> () }
	self.OnReject = {} :: { (Error: string) -> () }

	self.Value = nil :: any

	self.Thread = nil :: thread?
	self.Thread = coroutine.create(function()
		xpcall(Callback, function(Error)
			(self :: any):_Reject(Error)
		end, function(...)
			(self :: any):_Resolve(...)
		end, function(Error: string)
			(self :: any):_Reject(Error)
		end)
	end)

	task.spawn(self.Thread :: thread)

	return self
end

Promise.new = Promise.Promise :: (Callback: (Resolve: (...any) -> (), Reject: (Error: string) -> ()) -> ()) -> Promise

function Promise.Resolve(Value: any): Promise
	local self = setmetatable({}, Promise)

	self.Status = "Resolved"
	self.OnResolve = {} :: { (Value: any) -> () }
	self.OnReject = {} :: { (Error: string) -> () }
	self.Value = Value
	self.Thread = nil :: thread?

	return self
end

function Promise.Reject(Error: string): Promise
	local self = setmetatable({}, Promise)

	self.Status = "Rejected"
	self.OnResolve = {} :: { (Value: any) -> () }
	self.OnReject = {} :: { (Error: string) -> () }
	self.Value = Error
	self.Thread = nil :: thread?

	return self
end

function Promise._Resolve(self: Promise, Value: any)
	assert(self.Status == "Pending", "Cannot resolve a promise that is not pending.")

	self.Status = "Resolved"
	self.Value = Value

	for _, Callback in self.OnResolve do
		Spawn(Callback, Value)
	end

	if self.Thread then
		task.cancel(self.Thread)
	end
end

function Promise._Reject(self: Promise, Error: string)
	assert(self.Status == "Pending", "Cannot reject a promise that is not pending.")

	self.Status = "Rejected"
	self.Value = { Error }

	for _, Callback in self.OnReject do
		Spawn(Callback, Error)
	end

	if self.Thread then
		task.cancel(self.Thread)
	end
end

function Promise.Then(self: Promise, OnResolve: ((Value: any) -> (any))?, OnReject: ((Error: string) -> (any))?)
	return Promise.Promise(function(Resolve, Reject)
		local function PromiseResolutionProcedure(Value: Promise | any)
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
				Resolve(Value)
			end
		end

		if self.Status == "Pending" then
			if OnResolve then
				table.insert(self.OnResolve, function(Value)
					local _, NewValue = xpcall(OnResolve, function(Error)
						Reject(Error)
					end, Value)
	
					PromiseResolutionProcedure(NewValue)
				end)
			else
				table.insert(self.OnResolve, PromiseResolutionProcedure)
			end
	
			if OnReject then
				table.insert(self.OnReject, function(Value)
					local _, NewValue = xpcall(OnReject, function(Error)
						Reject(Error)
					end, Value)
	
					PromiseResolutionProcedure(NewValue)
				end)
			else
				table.insert(self.OnReject, Reject)
			end
		elseif self.Status == "Resolved" then
			if OnResolve then
				local _, NewValue = xpcall(OnResolve, function(Error)
					Reject(Error)
				end, self.Value)
	
				PromiseResolutionProcedure(NewValue)
			else
				Resolve(self.Value)
			end
		elseif self.Status == "Rejected" then
			if OnReject then
				local _, NewValue = xpcall(OnReject, function(Error)
					Reject(Error)
				end, self.Value)
	
				PromiseResolutionProcedure(NewValue)
			else
				Reject(self.Value)
			end
		end
	end)
end

function Promise.Catch(self: Promise, RejectCallback: (Error: string) -> ())
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


function Promise.Await(self: Promise): (...any)
	if self.Status == "Resolved" then
		return unpack(self.Value :: { any })
	elseif self.Status == "Rejected" then
		return error(unpack(self.Value :: { any }))
	else
		local Current = coroutine.running()

		local function Resume()
			coroutine.resume(Current)
		end

		table.insert(self.OnResolve, Resume)
		table.insert(self.OnReject, Resume)

		coroutine.yield()

		if self.Status == "Resolved" then
			return unpack(self.Value :: { any })
		else
			return error(unpack(self.Value :: { any }))
		end
	end
end

export type Promise = typeof(Promise.Promise(table.unpack(...)))

return Promise