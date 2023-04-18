# Red

The root of the library.

## Functions

### Server <Badge type="tip" text="Server Only" /> <Badge type="info" text="Since 1.0.0" />

Retrieves a server namespace.

```lua
(
	Name: string, -- The name of the server namespace.
) -> Server
```

It should be noted that namespaces are global, you can call this function with the same name multiple times and you will have no issues.

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

### Collection <Badge type="info" text="Since 1.1.0" />

Binds code to instances based on [CollectionService](https://developer.roblox.com/en-us/api-reference/class/CollectionService) tags.

```lua
<T>(
	Tag: string, -- The tag to listen to.
	Start: (Instance) -> (T), -- The function to call when an Instance is added.
	Stop: (T) -> (), -- The function to call when an Instance is removed.
) -> (() -> ())
```

This function binds two functions to instances based on the tag. The first function, `Start`, is called when an instance is added to the collection, and the second function `Stop` is called when an instance is removed from the collection.

::: danger
Do not yield in the `Start` function, as it can create a situation where the `Stop` function is never called. Yielding will create problems that appear silently.
:::

```lua
Red.Collection("Tag", function(Instance)
	print("Added", Instance)
end, function(Instance)
	print("Removed", Instance)
end)
```

The real power of this function comes when you return something from the start function. Anything returned from the start function will be passed to the stop function when the instance is removed. You could use this to create a part that moves every frame while it has the tag.

```lua
Red.Collection("Tag", function(Instance)
	return RunService.Heartbeat:Connect(function()
		Instance.CFrame += Instance.CFrame.LookVector
	end)
end, function(Connection)
	Connection:Disconnect()
end)
```

If you ever wanted to cleanup all instances of a tag, and stop adding more instances, call the function returned by `Red.Collection`.

```lua
local Stop = Red.Collection("Tag", function(Instance)
	print("Added", Instance)
end, function(Instance)
	print("Removed", Instance)
end)

Stop()
```

### Ratelimit <Badge type="info" text="Since 1.2.0" />

Creates a time based ratelimiter.

```lua
<T>(
	Limit: number, -- The number of times the function can be called over the interval.
	Interval: number, -- The interval to check the limit over.
) -> ((Key: T?) -> (boolean))
```

This function creates a time based ratelimiter. It takes two arguments, the limit and the interval. The limit is the number of times the function can be called over the interval. The interval is the time in seconds until the count is reset. The function returned takes one optional argument, the key. The key is used to separate the ratelimiter into different buckets. If no key is provided, the ratelimiter will use the default bucket.

When you call the returned function, it will return a boolean, true when under the ratelimit, and false when over. Note that the ratelimit is inclusive, a ratelimit of 5 will return true for the 5th call, but not the 6th.

```lua
local Ratelimit = Red.Ratelimit(5, 1)

for i = 1, 10 do
	-- Will print true 5 times, then false 5 times.
	print(Ratelimit())
end
```

You can use the key to separate the ratelimiter into different buckets, this can be useful for ratelimiting events on the server.

```lua
local Ratelimit = Red.Ratelimit(5, 1)

Namespace:On("Event", function(Player)
	if Ratelimit(Player) then
		print(`{Player.Name} within ratelimit`)
	else
		print(`{Player.Name} over ratelimit`)
	end
end)
```

## Bin <Badge type="info" text="Since 1.2.0" />

Creates a bin.

```lua
() -> (
	((Instance | RBXScriptConnection | () -> ...any) -> ()),
	(() -> ())
)
```

This function creates a bin, this is similar to the common "Maid" object. This returns two functions, the first to add items to the bin, and the second to Empty the bin. A bin can accept instances, connections, and functions. When the bin is emptied, it will destroy all instances, disconnect all connections, and call all functions.

```lua
local Add, Empty = Red.Bin()

Add(Instance.new("Part"))
Add(Instance.new("Part").Touched:Connect(function() end))
Add(function()
	print("Hello, World")
end)

Empty()
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
