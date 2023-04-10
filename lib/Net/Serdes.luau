local RunService = game:GetService("RunService")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local Event = ReplicatedStorage:WaitForChild("RedEvent")

local Promise = require(script.Parent.Parent.Util.Promise)

local Serdes = {}

Serdes.NextId = 0
Serdes.NextOT = 0

function Serdes.RegisterIdentifier(Name: string)
	assert(RunService:IsServer(), "RegisterIdentifier can only be called on the server")

	local Id = utf8.char(Serdes.NextId)
	Serdes.NextId += 1

	Event:SetAttribute(Name, Id)

	return Id
end

function Serdes.Identifier(Name: string)
	if RunService:IsClient() then
		return Promise.new(function(Resolve)
			if Event:GetAttribute(Name) ~= nil then
				Resolve(Event:GetAttribute(Name))
			else
				local Thread = task.delay(
					5,
					warn,
					`[Red.Serdes]: Retrieving identifier exceeded 5 seconds. Make sure '{Name}' is registered on the server.`
				)

				Event:GetAttributeChangedSignal(Name):Once(function()
					task.cancel(Thread)

					Resolve(Event:GetAttribute(Name))
				end)
			end
		end)
	else
		if Event:GetAttribute(Name) then
			return Promise.Resolve(Event:GetAttribute(Name))
		else
			return Promise.Resolve(Serdes.RegisterIdentifier(Name))
		end
	end
end

function Serdes.IdentifierAsync(Name: string)
	return Serdes.Identifier(Name):Await()
end

function Serdes.OneTime()
	Serdes.NextOT += 1

	if Serdes.NextOT == 0xFFFF + 1 then
		Serdes.NextOT = 0
	end

	return utf8.char(Serdes.NextOT)
end

return Serdes
