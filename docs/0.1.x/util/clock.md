# Clock

In a world where FPS unlockers are fairly commonplace among
PC players, it's important to have an easy way to ensure
some code doesn't run more than 60 times per second. This
is what the `Clock` class is for.

Internally, the `Clock` class is used to send fired events
to the server at a rate of 60 times per second. Were this
not the case, the server would be flooded with events
whenever a player with an FPS unlocker is playing, and face
extreme lag.

::: warning
`Clock` connects itself to the `Heartbeat` event, and uses
the delta passed to it. If the clock falls behind, it will
aggresively catch up. This means that it will call the
callback every frame until it is caught up. This can cause
cascading effects if the callback is slow.

In the worst case senario, where the `Clock` has fallen
more than 10 intervals behind, it will begin skipping
intervals. It will throw warnings when this happens.
:::

## Clock Object

### new
`(Interval: number, Callback: () -> ()) -> Clock`

Creates a new `Clock` object. The callback will be called
every `Interval` seconds.

### Pause
`() -> ()`

Pauses the clock. When paused, a Clock can be garbage
collected.

### Resume
`() -> ()`

Resumes the clock.