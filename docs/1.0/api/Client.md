# Client

The client namespace object. This object is returned by [`Red.Client`](./Red#Client) and is used for networking on the client.

## Methods

### Fire

Fires an event to the server.

```lua
(
	Event: string, -- The name of the event to fire.
	...: any -- The arguments to pass to the event.
)
```

::: warning
This method has the same data limits as [`RemoteEvent`](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent). Any data that cannot be serialized will arrive malformed on the server.
:::

```lua
local Net = Red.Client("NamespaceName")

Net:Fire("EventName", "Hello, world!")
```

### Call

Calls a function on the server.

```lua
(
	Event: string, -- The name of the event to fire.
	...: any -- The arguments to pass to the event.
): Promise
```

This calls the connected function.

::: warning
This method has the same data limits as [`RemoteEvent`](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent). Any data that cannot be serialized will arrive malformed on the server.
:::

```lua
local Net = Red.Client("NamespaceName")

local Response = Net:Call("EventName", "Hello, world!")
```

### On

Connects a function to an event.

```lua
(
	Event: string, -- The name of the event to connect to.
	Callback: (...any) -> () -- The function to connect.
)
```

```lua
local Net = Red.Client("NamespaceName")

Net:On("EventName", function(...)
	print(...)
end)
```

### Folder

Retrieves the shared folder that replicates from the server to the clients.

```lua
(): Folder
```

```lua
local Net = Red.Client("NamespaceName")

local Folder = Net:Folder()

print(Folder:GetAttribute("Hello"))
```

### LocalFolder

Retrieves the folder that replicates from the server to this client.

```lua
(): Folder
```

Any data in this folder is privately replicated only to this client.

```lua
local Net = Red.Client("NamespaceName")

local Folder = Net:LocalFolder()

print(Folder:GetAttribute("Hello"))
```
