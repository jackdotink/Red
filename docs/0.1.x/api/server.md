# Server

This object represents a server namespace. It is used to
network from the server to the clients.

## Methods

### Fire
`(self, EventName: string, Player, ...any) -> ()`

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
`(self, EventName: string, Player, ...any) -> ()`

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
`(self) -> (Folder)`

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
local MyNamespace = Red.Server("MyNamespace")

local function PlayerAdded(Player)
	local PlayerFolder = Instance.new("Folder")
	PlayerFolder.Name = Player.Name

	PlayerFolder:SetAttribute("Score", 0)
	PlayerFolder:SetAttribute("Money", 100)

	PlayerFolder.Parent = MyNamespace:Instance()
end
```