--!nocheck
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")

local Red = require(ReplicatedStorage.Red)

if ReplicatedStorage:GetAttribute("RedTest") == "Roblox" then
	local Remote = Instance.new("RemoteEvent")
	Remote.Parent = ReplicatedStorage

	RunService.Heartbeat:Connect(function()
		for _ = 1, 200 do
			Remote:FireAllClients()
		end
	end)
elseif ReplicatedStorage:GetAttribute("RedTest") == "Red" then
	local Test = Red.Server("Test")

	RunService.Heartbeat:Connect(function()
		for _ = 1, 200 do
			Test:FireAll("Event")
		end
	end)
end
