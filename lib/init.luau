local ReplicatedStorage = game:GetService("ReplicatedStorage")

if ReplicatedStorage:GetAttribute("RedDebug") == nil then
	warn("[Red] Debug mode is being enabled. This can be set as the attribute 'RedDebug' on ReplicatedStorage.")
	ReplicatedStorage:SetAttribute("RedDebug", true)
end

local Net = require(script.Net)

return {
	Server = Net.Server,
	Client = Net.Client,

	Promise = require(script.Util.Promise),
	Signal = require(script.Util.Signal),
	Clock = require(script.Util.Clock),
	Spawn = require(script.Util.Spawn),
}