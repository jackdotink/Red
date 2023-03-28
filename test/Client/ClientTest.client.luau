--!nocheck
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local Red = require(ReplicatedStorage.Red)

if ReplicatedStorage:GetAttribute("RedTest") == "Roblox" then
	local RemoteEvent = ReplicatedStorage:WaitForChild("RemoteEvent") :: RemoteEvent

	RemoteEvent.OnClientEvent:Connect(function() end)
elseif ReplicatedStorage:GetAttribute("RedTest") == "Red" then
	local Test = Red.Client("Test")

	Test:On("Event", function() end)
end
