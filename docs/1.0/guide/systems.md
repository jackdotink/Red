# Systems

Systems are not an actual part of Red, just the recommended way to use it. Systems are a way to organize your project into different
modules called systems.

## What is a System?

A system is a table with functions and values in it. You can optionally add lifecycle methods to systems, as they are completely implemented by the developer.

Systems provide many advantages over full frameworks like Knit. Systems are much more lightweight, are always ready for use when they are required, and they are required, allowing for intellisense and ordered loading. Systems can be for the server or client, or both.

In this guide, we will be creating an example `MoneySystem`. The exact code is not what is important, but the way it's structured.

## Money System

```lua
-- Server
local Players = game:GetService("Players")

local Red = require(Path.To.Red)

-- The recommended way to create networking for a system is to
-- create a namespace with it's name and call the variable `Net`.
local Net = Red.Server("MoneySystem")
local MoneySystem = {}

-- Systems do not use Setters and Getters unless the data is in
-- an unconventional place or requires some processing.
function MoneySystem.SetMoney(Player: Player, Amount: number)
	Net:Folder(Player):SetAttribute("Money", Amount)
end

function MoneySystem.GetMoney(Player: Player): number
	return Net:Folder(Player):GetAttribute("Money")
end

function MoneySystem.IncrementMoney(Player: Player, Amount: number)
	MoneySystem.SetMoney(Player, MoneySystem.GetMoney(Player) + Amount)
end

-- Note that we connect this in the top level of the module. Systems
-- require that a system be "ready for use" by the time it's required.
Players.PlayerAdded:Connect(function(Player)
	Net:Folder(Player):SetAttribute("Money", 0)
end)

return MoneySystem
```
