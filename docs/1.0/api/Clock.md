# Clock

The Clock object is used to execute a callback at regular intervals. It includes the ability to pause and resume the clock. It also has the capability to skip callbacks if the clock can't run fast enough.

## Functions

### new

Creates a new clock.

```lua
(
	Interval: number, -- The interval between callbacks in seconds.
	Callback: () -> (), -- The callback.
) -> Clock
```

This creates a new clock with the given interval and callback. The clock will start immediately.

```lua
local Clock = Clock.new(1, function()
	print("Hello, world!")
end)
```

## Methods

### Pause

Pauses the clock.

```lua
() -> ()
```

This pauses the clock. The clock will not fire the callback until it is resumed.

```lua
Clock:Pause()
```

### Resume

Resumes the clock.

```lua
() -> ()
```

This resumes the clock. The clock will fire the callback at the next interval.

```lua
Clock:Resume()
```

### Advance

Advances the clock.

```lua
(
	Delta: number, -- The amount to advance the clock by in seconds.
) -> ()
```

This advances the clock by the given amount. **This is not necessary to do, as the clock connects to `RunService.Heartbeat` on it's own.**

```lua
Clock:Advance(1)
```