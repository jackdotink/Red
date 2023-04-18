# Red

The root of the library.

## Functions

### Server <Badge type="tip" text="Server Only" /> <Badge type="info" text="Since 1.0.0" />

Retrieves a server namespace.

```lua
(
	Name: string, -- The name of the server namespace.
	EventNames: { string }? -- The names of the events that should be pre-defined.
) -> Server
```

It should be noted that namespaces are global, you can call this function with the same name multiple times and you will have no issues. If you don't define your events when you create the namespace, any listeners on the client will yield until the server defines the event, which would be when it is first fired.

**Simply put, define events that you fire to the client.**

::: code-group
```lua [Server]
local Net = Red.Server("Namespace", { "Event" })

Net:Fire("Event")
```
:::

::: warning
If called on the client, this function will error.
:::

### Client <Badge type="tip" text="Client Only" /> <Badge type="info" text="Since 1.0.0" />

Retrieves a client namespace.

```lua
(
	Name: string -- The name of the client namespace.
) -> Client
```

Just like with the server, client namespaces are global. You can call this function as many times as you like. Unlike the server, however, you cannot define events on the client.

::: code-group
```lua [Client]
local Net = Red.Client("Namespace")

Net:On("Event", function()
	print("Hello, World!")
end)
```
:::

::: warning
If called on the server, this function will error.
:::

### Spawn <Badge type="info" text="Since 1.0.0" />

Spawns a new thread with thread reuse.

```lua
<T...>(
	fn: (T...) -> (), -- The function to spawn.
	...: T... -- The arguments to pass to the function.
) -> ()
```

This function uses thread reuse and `task.spawn` to spawn threads efficiently.

```lua
Red.Spawn(print, "Hello, World!")
```

## Properties

### Promise <Badge type="info" text="Since 1.0.0" />

A reference to the Red [Promise](./Promise) implementation. This implementation differs from the main library used, it provides autocomplete, it uses PascalCase and has better performance.

```lua
Red.Promise.new(function(Resolve, Reject)
	Resolve("Hello, World")
end):Then(print)
```

### Signal <Badge type="info" text="Since 1.0.0" />

A reference to the Red [Signal](./Signal) implementation. This implementation is almost identical to other implementations, it just uses the Red Promise implementation, and is also typesafe.

```lua
local Signal = Red.Signal.new()

Signal:Connect(print)
Signal:Fire("Hello, World")
```

### Clock <Badge type="info" text="Since 1.0.0" />

A reference to the [Clock](./Clock) object. This object is used to run a callback at consistent intervals.

```lua
local Clock = Red.Clock.new(1, function()
	print("Hello, World!")
end)
```
