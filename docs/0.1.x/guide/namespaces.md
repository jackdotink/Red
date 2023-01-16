# Namespaces

It's impossible to do anything in Red without using
namespaces. Even global events are just in a global
namespace.

## What is a Namespace?

Think of a namespace as a folder that you put your events
in, or if you're coming from Knit, a service. Namespaces
contain groups of events that are related to each other.

## Creating a Namespace

Let's start by accessing the global namespace from the
server.

```lua
local Red = require(Path.To.Red)

local Namespace = Red.Server()
```

::: tip
Namespaces are global, this means no matter how many times
you call `Red.Server` you will always get the same namespace
object.
:::

## Firing Events

Let's start by firing an event on the client.

```lua
local Red = require(Path.To.Red)

local Namespace = Red.Client("MyNamespace")

Namespace:Fire("HelloWorld")
```

Here we just fired the `HelloWorld` event with no arguments.

## Registering Callbacks

Now let's register a callback on the server to listen to
this event.

```lua
local Red = require(Path.To.Red)

local Namespace = Red.Server("MyNamespace")

Namespace:Callback("HelloWorld", function()
	print("Hello World!")
end)
```

What if we wanted to get a return from the server? We can
simply just return a value from the callback.

```lua
local Red = require(Path.To.Red)

local Namespace = Red.Server("MyNamespace")

Namespace:Callback("HelloWorld", function()
	return "Hello World!"
end)
```

::: info
Only server callbacks can return a value.
:::

## Calling Remote Functions

When firing an event, the return value of the server
callback is ignored. If you want to get a return value from
the server callback you must use the `Call` method.

```lua
local Red = require(Path.To.Red)

local Namespace = Red.Client("MyNamespace")

Namespace:Call("HelloWorld"):Then(print)
```

The call method returns a promise. This means you get to
choose if you want to assign a callback for when the
call returns, or if you want to yield until the call
returns. Any errors on the server will result in the
promise being rejected with the error.

::: tip
Red uses a custom promise implementation for a few reasons.
You can find out more about it [here](../util/promise).
:::

## Replication and Remote Values

Roblox has an excellent and performant replication system.
Red allows you to utilize this system to replicate data, in
whatever structure you'd like.

Calling `Namespace:Instance()` will return a folder that
you can place any instances in, and they will be replicated
as if it was just a folder in Replicated Storage (hint: it
is!).

```lua
local Red = require(Path.To.Red)

local Namespace = Red.Server("MyNamespace")

local Folder = Namespace:Instance()

local Value = Instance.new("StringValue")

Value.Name = "HelloWorld"
Value.Value = "Hello World!"

Value.Parent = Folder
```

::: tip
Use attributes! They may be somewhat new, but they save a
lot of time when it comes to data replication like this.
:::

While it is impossible to replicate directly to one player,
this is better than a remote value object built over
remote events in terms of performance. If remote events were
to get reliability types, then Red would use them instead.
Feel free to use Red events to replicate data to one player.

## Identifiers

Due to how the event system works, if a server is only
firing an event, and not listening to it, then it is
impossible for the client to listen to it until the server
has fired it. This issue is solved by explicitly telling
Red what events you will use when you create the namespace.

```lua
local Red = require(Path.To.Red)

local Namespace = Red.Server("MyNamespace", {
	"HelloWorld",
})
```

This tells Red that the event `HelloWorld` will be used, so
it needs to register it. The client can now listen to this
event.