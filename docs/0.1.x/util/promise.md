# Promise

Promises are objects that represent a value that may not be
available yet. They are most commonly used to represent
asynchronous operations.

There are plenty of resources that explain promises in
detail, far better than I ever could.

::: info Why does Red use a custom promise implementation?
1. I'm a dirty pascal case lover. I'm not ashamed to admit
it.

2. I find roblox-lua-promise to be somewhat bloated. It's a
great implementation, I just find things like `await`, 
`awaitStatus`, and `expect` to be too much.
:::

## Promise Object

### new
`(Callback: (Resolve: (...any) -> (), Reject: (...any) -> ()) -> ()) -> Promise`

Creates a new promise. The callback will be called in a new
thread. The callback will be passed two functions, `Resolve`
and `Reject`. The callback should call `Resolve` with the
value that the promise should resolve to, or `Reject` with
the error that the promise should reject with.

### Resolve
`(...any) -> Promise`

Returns a new promise that instantly resolves with the
value that was passed to this function.

### Reject
`(...any) -> Promise`

Returns a new promise that instantly rejects with the
error that was passed to this function.

### Then
`(self, ResolveCallback: (...any) -> ()?, RejectCallback: (...any) -> ()?) -> Promise`

Returns a new promise that will be resolved with the value
returned by the `ResolveCallback`, or resolved with the
value returned by the `RejectCallback`. If a promise is
resolved or rejected without the corrosponding callback
being set, the new promise will propagate the same state.

### Catch
`(self, RejectCallback: (...any) -> ()?) -> Promise`

Returns a new promise that will be resolved with the value
returned by the `RejectCallback`.

### Finally
`(self, Callback: () -> ()) -> Promise`

Returns a new promise that will be resolved with the same
value as the original promise. The `Callback` will be called
when the original promise is resolved or rejected.

### Await
`(self) -> (...any)`

Yields the thread until the promise is resolved or rejected.
If the promise is resolved, the value that the promise was
resolved with will be returned. If the promise is rejected,
the error that the promise was rejected with will be thrown.