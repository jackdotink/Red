local Promise = require(script.Parent.Promise)
local Spawn = require(script.Parent.Spawn)

local Connection = {}
Connection.__index = Connection

function Connection.Connection(Signal: Signal, Callback: (...any) -> ())
	return setmetatable({
		Signal = Signal,
		Callback = Callback,
		Next = nil :: Connection?,
	}, Connection)
end

Connection.new = Connection.Connection :: (Signal: Signal, Callback: (...any) -> ()) -> Connection

function Connection.Disconnect(self: Connection)
	if self.Signal.Root == self then
		self.Signal.Root = self.Next
	else
		local Current = self.Signal.Root

		while Current do
			if Current.Next == self then
				Current.Next = self.Next
				break
			end

			Current = Current.Next
		end
	end
end

export type Connection = typeof(Connection.Connection(table.unpack(...)))

local Signal = {}
Signal.__index = Signal

function Signal.Signal()
	return setmetatable({
		Root = nil :: Connection?,
	}, Signal)
end

Signal.new = Signal.Signal :: () -> Signal

function Signal.Connect(self: Signal, Callback: (...any) -> ())
	local Connection = Connection.new(self, Callback)

	Connection.Next = self.Root
	self.Root = Connection

	return Connection
end

function Signal.Fire(self: Signal, ...)
	local Current = self.Root

	while Current do
		Spawn(Current.Callback, ...)

		Current = Current.Next
	end
end

function Signal.Wait(self: Signal)
	return Promise.new(function(Resolve)
		local Connection
		Connection = self:Connect(function(...)
			Connection:Disconnect()
			Resolve(...)
		end)
	end)
end

export type Signal = typeof(Signal.Signal(table.unpack(...)))

return Signal