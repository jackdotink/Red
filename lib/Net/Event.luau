local RunService = game:GetService("RunService")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local Remote = ReplicatedStorage:FindFirstChild("RedEvent") :: RemoteEvent
local IS_CLIENT = RunService:IsClient()

local Serdes = require(script.Parent.Serdes)

local Spawn = require(script.Parent.Parent.Util.Spawn)
local Promise = require(script.Parent.Parent.Util.Promise)
local Clock = require(script.Parent.Parent.Util.Clock)

local Event = {}

Event.Callbacks = {} :: { [string]: ((...any) -> ...any)? }
Event.Outgoing = {} :: any

if IS_CLIENT then
	Event.ActiveCalls = {}
end

function Event.Listen()
	debug.setmemorycategory("Red.Listen")

	if IS_CLIENT then
		Remote.OnClientEvent:Connect(function(SingleFire, MultipleFire, IncomingCall)
			debug.profilebegin("Red.Listen.Incoming")

			if SingleFire then
				debug.profilebegin("Red.Listen.Incoming.SingleFire")

				for EventId, Call in SingleFire do
					local Callback = Event.Callbacks[EventId]

					if Callback then
						if type(Call) == "table" then
							Spawn(Callback, unpack(Call))
						else
							Spawn(Callback, Call)
						end
					end
				end

				debug.profileend()
			end

			if MultipleFire then
				debug.profilebegin("Red.Listen.Incoming.Fire")

				for EventId, Calls in MultipleFire do
					local Callback = Event.Callbacks[EventId]

					if Callback then
						for _, Call in Calls do
							if type(Call) == "table" then
								Spawn(Callback, unpack(Call))
							else
								Spawn(Callback, Call)
							end
						end
					end
				end

				debug.profileend()
			end

			if IncomingCall then
				debug.profilebegin("Red.Listen.Incoming.Call")

				for _, Call in IncomingCall do
					local CallId = table.remove(Call, 1)
					local Success = table.remove(Call, 1)

					if Event.ActiveCalls[CallId] then
						if Success then
							Event.ActiveCalls[CallId].Resolve(unpack(Call))
						else
							Event.ActiveCalls[CallId].Reject(unpack(Call))
						end

						Event.ActiveCalls[CallId] = nil
					end
				end

				debug.profileend()
			end

			debug.profileend()
		end)

		Clock.new(1 / 60, function()
			debug.profilebegin("Red.Listen.Outgoing")

			if not next(Event.Outgoing) then
				return
			end

			local SingleFire = {}
			local SendSingleFire = false

			if Event.Outgoing[1] then
				for EventId, Calls in Event.Outgoing[1] do
					if #Calls == 1 then
						SingleFire[EventId] = Calls[1]
						Event.Outgoing[1][EventId] = nil

						SendSingleFire = true
					end
				end
			end

			Remote:FireServer(if SendSingleFire then SingleFire else nil, Event.Outgoing[1], Event.Outgoing[2])
			table.clear(Event.Outgoing)

			debug.profileend()
		end)
	else
		Remote.OnServerEvent:Connect(function(Player, SingleFire, MultipleFire, IncomingCall)
			debug.profilebegin("Red.Listen.Incoming")

			if SingleFire then
				debug.profilebegin("Red.Listen.Incoming.SingleFire")

				for EventId, Call in SingleFire do
					local Callback = Event.Callbacks[EventId]

					if Callback then
						if type(Call) == "table" then
							Spawn(Callback, Player, unpack(Call))
						else
							Spawn(Callback, Player, Call)
						end
					end
				end

				debug.profileend()
			end

			if MultipleFire then
				debug.profilebegin("Red.Listen.Incoming.MultipleFire")

				for EventId, Calls in MultipleFire do
					local Callback = Event.Callbacks[EventId]

					if Callback then
						for _, Call in Calls do
							if type(Call) == "table" then
								Spawn(Callback, Player, unpack(Call))
							else
								Spawn(Callback, Player, Call)
							end
						end
					end
				end

				debug.profileend()
			end

			if IncomingCall then
				debug.profilebegin("Red.Listen.Incoming.Call")

				for EventId, Calls in IncomingCall do
					if Event.Callbacks[EventId] then
						for _, Call in Calls do
							Spawn(function()
								if Event.Outgoing[Player] == nil then
									Event.Outgoing[Player] = {}
								end

								if Event.Outgoing[Player][2] == nil then
									Event.Outgoing[Player][2] = {}
								end

								local CallId = table.remove(Call, 1)

								table.insert(Event.Outgoing[Player][2], {
									CallId,
									pcall(Event.Callbacks[EventId] :: any, Player, unpack(Call)),
								})
							end)
						end
					else
						if Event.Outgoing[Player] == nil then
							Event.Outgoing[Player] = {}
						end

						if Event.Outgoing[Player][2] == nil then
							Event.Outgoing[Player][2] = {}
						end

						for _, Call in Calls do
							table.insert(Event.Outgoing[Player][2], {
								Call[1],
								false,
								"[RED] Event not found",
							})
						end
					end
				end

				debug.profileend()
			end

			debug.profileend()
		end)

		RunService.Heartbeat:Connect(function()
			debug.profilebegin("Red.Listen.Outgoing")

			for Player, Packets in Event.Outgoing do
				local SingleCall = {}
				local SendSingleCall = false

				if Packets[1] then
					for EventId, Calls in Packets[1] do
						if #Calls == 1 then
							SingleCall[EventId] = Calls[1]
							Packets[1][EventId] = nil

							SendSingleCall = true
						end
					end
				end

				Remote:FireClient(Player, if SendSingleCall then SingleCall else nil, Packets[1], Packets[2])
			end

			table.clear(Event.Outgoing)

			debug.profileend()
		end)
	end
end

function Event.AddQueue(Queue: { any }, Call: { any })
	local Length = #Call

	if Length == 1 then
		local Type = type(Call[1])

		if Type ~= "table" then
			table.insert(Queue, Call[1])
		else
			table.insert(Queue, Call)
		end
	else
		table.insert(Queue, Call)
	end
end

function Event.FireClient(Player: Player, EventName: string, ...)
	assert(not IS_CLIENT, "Event.FireClient can only be called from the server")

	local EventId = Serdes.IdentifierAsync(EventName)

	if Event.Outgoing[Player] == nil then
		Event.Outgoing[Player] = {}
	end

	if Event.Outgoing[Player][1] == nil then
		Event.Outgoing[Player][1] = {}
	end

	if Event.Outgoing[Player][1][EventId] == nil then
		Event.Outgoing[Player][1][EventId] = {}
	end

	Event.AddQueue(Event.Outgoing[Player][1][EventId], { ... })
end

function Event.FireServer(EventName: string, ...)
	assert(IS_CLIENT, "Event.FireServer can only be called on the client")

	local Args = { ... }

	return Serdes.Identifier(EventName):Then(function(EventId)
		if Event.Outgoing[1] == nil then
			Event.Outgoing[1] = {}
		end

		if Event.Outgoing[1][EventId] == nil then
			Event.Outgoing[1][EventId] = {}
		end

		Event.AddQueue(Event.Outgoing[1][EventId], Args)
	end)
end

function Event.Call(EventName: string, ...)
	assert(IS_CLIENT, "Event.Call can only be called on the client")

	local Args = { ... }

	return Promise.new(function(Resolve, Reject)
		local CallId = Serdes.OneTime()
		local EventId = Serdes.IdentifierAsync(EventName)

		if Event.Outgoing[2] == nil then
			Event.Outgoing[2] = {}
		end

		if Event.Outgoing[2][EventId] == nil then
			Event.Outgoing[2][EventId] = {}
		end

		table.insert(Args, 1, CallId)
		table.insert(Event.Outgoing[2][EventId], Args)

		Event.ActiveCalls[CallId] = {
			Resolve = Resolve,
			Reject = Reject,
		}
	end)
end

function Event.SetCallback(EventName: string, Callback: ((...any) -> any)?)
	return Serdes.Identifier(EventName):Then(function(EventId)
		Event.Callbacks[EventId] = Callback
	end)
end

return Event
