# Client <Badge type="tip" text="Client Only" /> <Badge type="info" text="Since 1.0.0" />

The client namespace object. This object is returned by [`Red.Client`](./Red#Client) and is used for networking on the client.

## Methods

### Fire <Badge type="warning" text="Yields" /> <Badge type="tip" text="Client Only" /> <Badge type="info" text="Since 1.0.0" />

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

:::warning Yielding Behavior
This method will only yield if the event identifier is not loaded on the client. This will not yield for a long period of time unless the event is not registered on the server, if this is the case a warning will be thrown.
:::

```lua
local Net = Red.Client("NamespaceName")

Net:Fire("EventName", "Hello, world!")
```

### Call <Badge type="warning" text="Yields" /> <Badge type="tip" text="Client Only" /> <Badge type="info" text="Since 1.0.0" />

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

:::warning Yielding Behavior
This method will only yield if the event identifier is not loaded on the client. This will not yield for a long period of time unless the event is not registered on the server, if this is the case a warning will be thrown.
:::

```lua
local Net = Red.Client("NamespaceName")

local Response = Net:Call("EventName", "Hello, world!")
```

### On <Badge type="warning" text="Yields" /> <Badge type="tip" text="Client Only" /> <Badge type="info" text="Since 1.0.0" />

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

### Folder <Badge type="warning" text="Yields" /> <Badge type="tip" text="Client Only" /> <Badge type="info" text="Since 1.0.0" />

Retrieves the shared folder that replicates from the server to the clients.

```lua
(): Folder
```

:::warning Yielding Behavior
This method will only yield if the namespace folder is not yet loaded on the client. This function will infinitely yield if the namespace folder is not created on the server.
:::

```lua
local Net = Red.Client("NamespaceName")

local Folder = Net:Folder()

print(Folder:GetAttribute("Hello"))
```

### LocalFolder <Badge type="warning" text="Yields" /> <Badge type="tip" text="Client Only" /> <Badge type="info" text="Since 1.0.0" />

Retrieves the folder that replicates from the server to this client.

```lua
(): Folder
```

Any data in this folder is privately replicated only to this client.

:::warning Yielding Behavior
This method will only yield if the namespace folder is not yet loaded on the client. This function will infinitely yield if the namespace folder is not created on the server.
:::

::: details How is this possible?
Folders that replicate to single players are done by using their PlayerGui. Anything there is replicated to that player only. Red cleans up the folder so you will find no trace of it in the PlayerGui.
:::

```lua
local Net = Red.Client("NamespaceName")

local Folder = Net:LocalFolder()

print(Folder:GetAttribute("Hello"))
```
