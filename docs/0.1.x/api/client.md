# Client

This object represents a client namespace. It is used to
network from the client to the server.

## Methods

### Fire
`(self, EventName: string, ...any) -> ()`

This fires the given event at the server with the given
arguments. The event will be sent at the next heartbeat.

```lua
local MyNamespace = Red.Client("MyNamespace")

MyNamespace:Fire("MyEvent", "Hello", "World")
```

### Call
`(self, EventName: string, ...any) -> Promise`

This calls the given event at the server with the given
arguments. The event will be sent at the next heartbeat. The
returned promise will be resolved with the values returned
from the server. If the server errors, the promise will be
rejected with the error.

```lua
local MyNamespace = Red.Client("MyNamespace")

MyNamespace:Call("MyEvent", "Hello", "World"):Then(function(...)
	print(...)
end):Catch(function(Error)
	print(Error)
end)
```

### Callback
`(self, EventName: string, Callback: (...any) -> ()) -> ()`

This registers a callback for the given event. The callback
will be called when the event is fired. Any returned values
from the callback will be ignored, the server cannot call
the client.

```lua
local MyNamespace = Red.Client("MyNamespace")

MyNamespace:Callback("MyEvent", function(...)
	print(...)
end)
```

### Instance
`(self) -> Instance`

This returns the instance of the client namespace. If the
corrosponding server namespace has not called the `Instance`
method, then the instance will not exist and this method
will yield forever.

```lua
local MyNamespace = Red.Client("MyNamespace")

local Leaderboard = MyNamespace:Instance()
```

### ClientInstance
`(self) -> Instance`

This returns the instance of the client namespace. If the
corrosponding server namespace has not called the `Instance`
method for this player, then the instance will not exist and
this method will yield forever.

```lua
local MyNamespace = Red.Client("MyNamespace")

local LocalPlayerData = MyNamespace:ClientInstance()
```