local Spawn = require(script.Parent.Spawn)

type BinItem = Instance | RBXScriptConnection | () -> ...any

return function()
	local Bin: { BinItem } = {}

	return function(Item: BinItem)
		table.insert(Bin, Item)
	end, function()
		for _, Item in Bin do
			if typeof(Item) == "Instance" then
				Item:Destroy()
			elseif typeof(Item) == "RBXScriptConnection" then
				Item:Disconnect()
			elseif typeof(Item) == "function" then
				Spawn(Item)
			end
		end

		table.clear(Bin)
	end
end
