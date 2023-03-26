local CollectionService = game:GetService("CollectionService")

local Spawn = require(script.Parent.Spawn)

return function<T...>(Tag: string, Start: (Instance) -> T..., Stop: (T...) -> ()): () -> ()
	local InstanceMap = {}

	for _, Instance in CollectionService:GetTagged(Tag) do
		Spawn(function()
			InstanceMap[Instance] = { Start(Instance) }
		end)
	end

	local AddConnection = CollectionService:GetInstanceAddedSignal(Tag):Connect(function(Instance)
		InstanceMap[Instance] = { Start(Instance) }
	end)

	local RemoveConnection = CollectionService:GetInstanceRemovedSignal(Tag):Connect(function(Instance)
		local Value = InstanceMap[Instance]

		if Value then
			InstanceMap[Instance] = nil;
			(Stop :: any)(unpack(Value))
		end
	end)

	return function()
		AddConnection:Disconnect()
		RemoveConnection:Disconnect()

		for Instance, Value in InstanceMap do
			Spawn(Stop :: any, unpack(Value))
		end
	end
end
