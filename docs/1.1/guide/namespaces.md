# Namespaces

Namespaces are abstractions over networking. Namespaces don't have any actual presence in the networking, just convienent abstractions over it.

## Creating a Namespace

Namespaces are created by calling `Red.Server` and `Red.Client`. The first argument is the name of the namespace, and the second optional argument is a list of event definitions (you'll learn more about this later!).

::: code-group

```lua [Server]
local Net = Red.Server("NamespaceName")
```

```lua [Client]
local Net = Red.Client("NamespaceName")
```

:::

::: tip
Namespaces are global. Every time you call `Red.Server` or `Red.Client` with the same name, you will get the same object. Feel free to use the same namespace in multiple files.
:::

## Events vs Functions

In Red, functions and events are the same. The only difference is how they are called. Functions are called with `Client:Call`, and events are fired with `Namespace:Fire` (among others). This is because functions are just events that return a value. If a handler
function returns a value for an event call, the return will be ignored.

::: code-group

```lua [Server]
local Net = Red.Server("NamespaceName")

Net:On("Function", function()
	return "Hello, World!"
end)

Net:On("Event", function()
	print("Hello, World!")
end)
```

```lua [Client]
local Net = Red.Client("NamespaceName")

-- Prints "Hello, World!" on the client
print(Net:Call("Function"):Await())

-- Prints "Hello, World!" on the server
Net:Fire("Event")
```

:::

## Callbacks

Callbacks are functions that are called when an event or function is called. They can optionally take or return arguments. Callback arguments are not typechecked for you. Each event name can only have one bound callback. Calling `Namespace:On` multiple times with the same event name will overwrite the previous callback.

::: code-group

```lua [Server]
local Net = Red.Server("NamespaceName", { "ClientEvent" })

Net:On("ServerEvent", function(Player, Message)
	print(`Message from {Player.Name}: {Message}`)
end)

```

```lua [Client]
local Net = Red.Client("NamespaceName")

Net:On("ClientEvent", function(Message)
	print(`Message from Server: {Message}`)
end)
```

:::

## Event Definitions

Event names in Red are shared from the server to the client as an identifier. As such the client will yield until the identifier has been created on the server. Identifiers are automatically created for you as soon as you use them, but when listening to an event on the client, this will cause `Client:On` to yield until the event is fired for the first time. This can be avoided by using event definitions.

To define an event name, pass a table of event names to the second argument of `Red.Server`. This will create the event on the server before it is fired, and will not yield until the event is fired for the first time.

::: code-group

```lua [Server]
-- Server
local Net = Red.Server("NamespaceName", {
	"EventName",
	"AnotherEventName",
})

```

```lua [Client]
local Net = Red.Client("NamespaceName")

Net:On("EventName", function()
	print("Hello, World!")
end)

Net:On("AnotherEventName", function()
	print("Hello, World!")
end)
```

:::

## Namespace Folders

Remote values are really useful. With normal remote events, however, they are incredibly inefficient. Red instead presents using network replication to your advantage. Namespace folders can be used to replicate data to every client, or to one client.

Namespace folders are not created until you access them. Call `Server:Folder` to get a folder for that namespace. When you call `Client:Folder`, it will yield until the folder is created on the server.

::: code-group

```lua [Server]
local Net = Red.Server("NamespaceName")

local Folder = Net:Folder()
```

```lua [Client]
local Net = Red.Client("NamespaceName")

local Folder = Net:Folder()
```

:::

You can also create folders that replicate to a single client. Anything replicated here can only be seen by that player. This is a completely secure way to replicate data to a single client. This is useful for things like player-specific data, perhaps an inventory.

::: code-group

```lua [Server]
local Net = Red.Server("NamespaceName")

local Folder = Net:Folder(Player)
```

```lua [Client]
local Net = Red.Client("NamespaceName")

local Folder = Net:LocalFolder()
```

:::
