--!nocheck
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")

local Red = require(ReplicatedStorage.Red)

local Net = Red.Server("Testing")

local ArgumentType = {}
local CallType = {}
local EventType = {}

Net:On("ArgumentType", function(Player, Type)
	if Type == "None" or Type == "OneWithSAO" or Type == "OneWithoutSAO" or Type == "Random" then
		ArgumentType[Player] = Type
	end
end)

Net:On("CallType", function(Player, Type)
	if Type == "Multiple" or Type == "Single" or Type == "None" then
		CallType[Player] = Type
	end
end)

Net:On("EventType", function(Player, Type)
	print(Type)
	if Type == "Roblox" or Type == "Red" then
		EventType[Player] = Type
	end
end)

Players.PlayerAdded:Connect(function(Player)
	ArgumentType[Player] = "None"
	CallType[Player] = "None"
end)

local function MakeArgument(Type: string): (...any)
	if Type == "None" then
		return nil
	elseif Type == "OneWithSAO" then
		return ""
	elseif Type == "OneWithoutSAO" then
		return {}
	elseif Type == "Random" then
		return unpack(table.create(math.random(1, 10), ""))
	end

	return
end

for i = 0, 200 do
	local Remote = Instance.new("RemoteEvent")
	Remote.Name = tostring(i)
	Remote.Parent = ReplicatedStorage
end

RunService.Heartbeat:Connect(function()
	for _, Player in Players:GetPlayers() do
		local Argument = ArgumentType[Player]
		local Call = CallType[Player]
		local Event = EventType[Player]

		if Event == "Roblox" then
			if Call == "Multiple" then
				local Remote = ReplicatedStorage["0"]

				for _ = 0, 200 do
					Remote:FireClient(Player, MakeArgument(Argument))
				end
			elseif Call == "Single" then
				for i = 0, 200 do
					ReplicatedStorage[tostring(i)]:FireClient(Player, MakeArgument(Argument))
				end
			end
		elseif Event == "Red" then
			if Call == "Multiple" then
				for i = 0, 200 do
					Net:Fire(Player, tostring(i), MakeArgument(Argument))
				end
			elseif Call == "Single" then
				for _ = 0, 200 do
					Net:Fire(Player, "0", MakeArgument(Argument))
				end
			end
		end
	end
end)
