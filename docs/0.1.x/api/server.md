# Server

This object represents a server namespace. It is used to
network from the server to the clients.

## Methods

### Fire
`(self, EventName: string, Player: Player, ...any) -> ()`

This fires the given event at the given player with the
given arguments. The event will be sent at the next
heartbeat.

```lua
local MyNamespace = Red.Server("MyNamespace")

MyNamespace:Fire("MyEvent", Player, "Hello", "World")
```

### FireAll
`(self, EventName: string, ...any) -> ()`

This fires the given event at all players with the given
arguments. The event will be sent at the next heartbeat.

```lua
local MyNamespace = Red.Server("MyNamespace")

MyNamespace:FireAll("MyEvent", "Hello", "World")
```

### FireAllExcept
`(self, EventName: string, Player: Player, ...any) -> ()`

This fires the given event at all players except the given
player with the given arguments. The event will be sent at
the next heartbeat.

```lua
local MyNamespace = Red.Server("MyNamespace")

MyNamespace:FireAllExcept("MyEvent", Player, "Hello", "World")
```

### Callback
`(self, EventName: string, Callback: (Player, ...any) -> (...any)) -> ()`

This registers a callback for the given event. The callback
will be called when the event is fired. The callback will
also be called when the event is called. If the callback
returns any values they will be sent back to the client when
called, but not when fired.

```lua
local MyNamespace = Red.Server("MyNamespace")

MyNamespace:Callback("MyEvent", function(Player, ...)
	print(Player, ...)
	return "Hello", "World"
end)
```

### Instance
`(self, Player: Player?) -> (Folder)`

This will get an instance that will replicate itself and
all descendants to the client. This is useful for
replicating state to the client.

This is usually used in place of remote values because
remote values have big performance implications. If remote
reliability types were to become a thing, red would update
to include remote values.

::: tip
Using attributes is highly recommended for replicating
state to the client.
:::

```lua
-- You could use this to create a leaderboard structure 
-- with every player's stats.
local Net = Red.Server("Leaderboard")

local function PlayerAdded(Player)
	local PlayerFolder = Instance.new("Folder")
	PlayerFolder.Name = Player.Name

	PlayerFolder:SetAttribute("Kills", 0)
	PlayerFolder:SetAttribute("Deaths", 0)

	PlayerFolder.Parent = Net:Instance()
end
```

If a player is passed to this method, then the instance
returned will only replicate to that player. Anything
replicated this way is not replicated to other players,
ensuring security and saving bandwidth.

```lua
-- You could use this to replicate a player's inventory
-- or tools.
local Net = Red.Server("Inventory")

local function GivePlayerTool(Player, Tool)
	Tool:Clone().Parent = Net:Instance(Player)
end
```