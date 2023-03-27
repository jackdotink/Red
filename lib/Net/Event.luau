local Remote = game:GetService("ReplicatedStorage"):FindFirstChild("RedEvent") :: RemoteEvent
local IS_CLIENT = game:GetService("RunService"):IsClient()

local Serdes = require(script.Parent.Serdes)

local Spawn = require(script.Parent.Parent.Util.Spawn)
local Promise = require(script.Parent.Parent.Util.Promise)
local Clock = require(script.Parent.Parent.Util.Clock)

local CL = Serdes.IdentifierAsync("CL")
local FR = Serdes.IdentifierAsync("FR")

local Event = {}

Event.Callbacks = {} :: { [string]: ((...any) -> ...any)? }
Event.Outgoing = {}

if IS_CLIENT then
	Event.ActiveCalls = {}
end

function Event.Listen()
	if IS_CLIENT then
		Remote.OnClientEvent:Connect(function(Packets)
			if Packets[FR] then
				for EventId, Calls in Packets[FR] do
					local Callback = Event.Callbacks[EventId]

					if Callback then
						for _, Call in Calls do
							Spawn(Callback, unpack(Call))
						end
					end
				end
			end

			if Packets[CL] then
				for _, Call in Packets[CL] do
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
			end
		end)

		Clock.new(1 / 60, function()
			if not next(Event.Outgoing) then
				return
			end

			Remote:FireServer(Event.Outgoing)
			table.clear(Event.Outgoing)
		end)
	else
		Remote.OnServerEvent:Connect(function(Player, Packets)
			if Packets[FR] then
				for EventId, Calls in Packets[FR] do
					local Callback = Event.Callbacks[EventId]

					if Callback then
						for _, Call in Calls do
							Spawn(Callback, Player, unpack(Call))
						end
					end
				end
			end

			if Packets[CL] then
				for EventId, Calls in Packets[CL] do
					if Event.Callbacks[EventId] then
						for _, Call in Calls do
							Spawn(function()
								local CallId = table.remove(Call, 1)
								local Return = table.pack(pcall(Event.Callbacks[EventId] :: any, Player, unpack(Call)))

								if Event.Outgoing[Player] == nil then
									Event.Outgoing[Player] = {}
								end

								if Event.Outgoing[Player][CL] == nil then
									Event.Outgoing[Player][CL] = {}
								end

								table.insert(Event.Outgoing[Player][CL], {
									CallId,
									unpack(Return),
								})
							end)
						end
					else
						if Event.Outgoing[Player] == nil then
							Event.Outgoing[Player] = {}
						end

						if Event.Outgoing[Player][CL] == nil then
							Event.Outgoing[Player][CL] = {}
						end

						for _, Call in Calls do
							table.insert(Event.Outgoing[Player][CL], {
								Call[1],
								false,
								"[RED] Event not found",
							})
						end
					end
				end
			end
		end)

		Clock.new(1 / 60, function()
			for Player, Packets in Event.Outgoing do
				Remote:FireClient(Player, Packets)
			end

			table.clear(Event.Outgoing)
		end)
	end
end

function Event.FireClient(Player: Player, EventName: string, ...)
	assert(not IS_CLIENT, "Event.FireClient can only be called from the server")

	local EventId = Serdes.IdentifierAsync(EventName)

	if Event.Outgoing[Player] == nil then
		Event.Outgoing[Player] = {}
	end

	if Event.Outgoing[Player][FR] == nil then
		Event.Outgoing[Player][FR] = {}
	end

	if Event.Outgoing[Player][FR][EventId] == nil then
		Event.Outgoing[Player][FR][EventId] = {}
	end

	table.insert(Event.Outgoing[Player][FR][EventId], { ... })
end

function Event.FireServer(EventName: string, ...)
	assert(IS_CLIENT, "Event.FireServer can only be called on the client")

	local Args = { ... }

	return Serdes.Identifier(EventName):Then(function(EventId)
		if Event.Outgoing[FR] == nil then
			Event.Outgoing[FR] = {}
		end
	
		if Event.Outgoing[FR][EventId] == nil then
			Event.Outgoing[FR][EventId] = {}
		end
	
		table.insert(Event.Outgoing[FR][EventId], Args)
	end)
end

function Event.Call(EventName: string, ...)
	assert(IS_CLIENT, "Event.Call can only be called on the client")

	local Args = { ... }

	return Promise.new(function(Resolve, Reject)
		local CallId = Serdes.OneTime()
		local EventId = Serdes.IdentifierAsync(EventName)

		if Event.Outgoing[CL] == nil then
			Event.Outgoing[CL] = {}
		end

		if Event.Outgoing[CL][EventId] == nil then
			Event.Outgoing[CL][EventId] = {}
		end

		table.insert(Args, 1, CallId)
		table.insert(Event.Outgoing[CL][EventId], Args)

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
