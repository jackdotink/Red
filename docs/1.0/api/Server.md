# Server

The server namespace object. This object is returned by [`Red.Server`](./Red#Server) and is used for networking on the server.

## Methods

### Fire

Fires an event to a single client.

```lua
(
	Player: Player, -- The player to fire the event to.
	Event: string, -- The name of the event to fire.
	...: any -- The arguments to pass to the event.
)
```

::: warning
This method has the same data limits as [`RemoteEvent`](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent). Any data that cannot be serialized will arrive malformed on the client.
:::

```lua
local Net = Red.Server("NamespaceName", { "EventName" })

Net:Fire(Player, "EventName", "Hello, world!")
```

### FireAll

Fires an event to all clients.

```lua
(
	Event: string, -- The name of the event to fire.
	...: any -- The arguments to pass to the event.
)
```

::: warning
This method has the same data limits as [`RemoteEvent`](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent). Any data that cannot be serialized will arrive malformed on the client.
:::

```lua
local Net = Red.Server("NamespaceName", { "EventName" })

Net:FireAll("EventName", "Hello, world!")
```

### FireAllExcept

Fires an event to all clients except one.

```lua
(
	Player: Player, -- The player to not fire the event to.
	Event: string, -- The name of the event to fire.
	...: any -- The arguments to pass to the event.
)
```

::: warning
This method has the same data limits as [`RemoteEvent`](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent). Any data that cannot be serialized will arrive malformed on the client.
:::

```lua
local Net = Red.Server("NamespaceName", { "EventName" })

Net:FireAllExcept(Player, "EventName", "Hello, world!")
```

### FireList

Fires an event to a list of clients.

```lua
(
	Players: { Player }, -- The players to fire the event to.
	Event: string, -- The name of the event to fire.
	...: any -- The arguments to pass to the event.
)
```

::: warning
This method has the same data limits as [`RemoteEvent`](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent). Any data that cannot be serialized will arrive malformed on the client.
:::

```lua
local Net = Red.Server("NamespaceName", { "EventName" })

Net:FireList({ Player1, Player2 }, "EventName", "Hello, world!")
```

### FireWithFilter

Fires an event to a list of clients, with a filter.

```lua
(
	Filter: (Player) -> boolean, -- The filter to use to determine which players to fire the event to.
	Event: string, -- The name of the event to fire.
	...: any -- The arguments to pass to the event.
)
```

::: warning
This method has the same data limits as [`RemoteEvent`](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent). Any data that cannot be serialized will arrive malformed on the client.
:::

```lua
local Net = Red.Server("NamespaceName", { "EventName" })

Net:FireWithFilter(function(Player)
	return Player.Name == "Player1"
end, "EventName", "Hello, world!")
```

### On

Registers a callback for an event.

```lua
(
	Event: string, -- The name of the event to register a callback for.
	Callback: ((Player, ...: any) -> (...any))? -- The callback to register.
)
```

Each event can only have one callback. An attempt to register a second callback will overwrite the first. To remove a callback, pass `nil` as the callback. You do not need to register the event names in the constructor.

The passed function will also be used for calls. If the client requests a call, any returned values from the callback will be sent back to the client.

```lua
local Net = Red.Server("NamespaceName")

Net:On("EventName", function(Player, Message)
	print(Player.Name .. " said: " .. Message)
end)
```

### Folder

Retrieves a shared namespace folder.

```lua
(
	Player: Player? -- The (optional) player to get the folder for.
)
```

This method returns a [`Folder`](https://developer.roblox.com/en-us/api-reference/class/Folder) that is shared between the server and the client. This folder can be used to store data that is shared between the server and the client.

If you specify the optional `Player` argument, the folder will only be shared with that player. Otherwise, the folder will be shared with all players.

::: details How is this possible?
Folders that replicate to single players are done by using their PlayerGui. Anything there is replicated to that player only. Red cleans up the folder so you will find no trace of it in the PlayerGui.
:::

```lua
local Net = Red.Server("NamespaceName")

local Folder = Net:Folder()

-- Attributes are suggested in place of remote
-- values as they are more efficient.
Folder:SetAttribute("Attribute", 10)
```
