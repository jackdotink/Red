# Signal <Badge type="info" text="Since 1.0.0" />

The Signal object is used to emit events and listen for them.

## Functions

### new <Badge type="info" text="Since 1.0.0" />

Creates a new signal.

```lua
<T...>() -> Signal<T...>
```

```lua
local Signal = Signal.new()
```

## Methods

### Connect <Badge type="info" text="Since 1.0.0" />

Connects a function to the signal.

```lua
(
	Callback: (T...) -> () -- The function to connect.
) -> (() -> ())
```

This connects the callback to the signal. This can be disconnected by calling the returned function.

```lua
local Disconnect = Signal:Connect(function()
	print("Hello, world!")
end)
```

### Fire <Badge type="info" text="Since 1.0.0" />

Fires the signal.

```lua
(
	...: T... -- The values to pass to the callbacks.
) -> ()
```

This calls all the callbacks connected to the signal with the values passed to this function.

```lua
Signal:Fire("Hello, world!")
```

### Wait <Badge type="info" text="Since 1.0.0" />

Waits for the signal to fire.

```lua
() -> Promise
```

This returns a promise that resolves when the signal fires.

```lua
Signal:Wait():Then(function()
	print("Hello, world!")
end)
```

### DisconnectAll <Badge type="info" text="Since 1.0.0" />

Disconnects all the callbacks from the signal.

```lua
() -> ()
```
