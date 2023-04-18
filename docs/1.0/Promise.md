# Promise <Badge type="info" text="Since 1.0.0" />

Promises are a way to handle asynchronous code in a synchronous manner. They are similar to the `Promise` class in JavaScript. This documentation assumes you already have a basic understanding of promises.

## Functions

### new <Badge type="info" text="Since 1.0.0" />

Creates a new promise.

```lua
(
	Callback: (Resolve: (...any) -> (), Reject: (...any) -> ()) -> (),
) -> Promise
```

This function immediately calls the callback in a new thread with two functions, Resolve and Reject. These functions are used, as their names imply, to resolve or reject the promise.

::: tip
You can pass multiple values to Resolve and Reject.
:::

::: warning
Resolve and reject can only be called once. On the next execution step after either of these functions are called, the promise thread will be closed.
:::

```lua
Promise.new(function(Resolve, Reject)
	Resolve("Hello, world!")
end)
```

### Resolve <Badge type="info" text="Since 1.0.0" />

Creates a new promise that is already resolved.

```lua
(...any) -> Promise
```

This function creates a new promise that is already resolved with the values passed to it.

::: tip
Use this function for synchronous code, it's about 10x faster than `Promise.new`.
:::

```lua
Promise.Resolve("Hello, world!")
```

### Reject <Badge type="info" text="Since 1.0.0" />

Creates a new promise that is already rejected.

```lua
(...any) -> Promise
```

This function creates a new promise that is already rejected with the values passed to it.

::: tip
Use this function for synchronous code, it's about 10x faster than `Promise.new`.
:::

```lua
Promise.Reject("Hello, world!")
```

## Methods

### Then <Badge type="info" text="Since 1.0.0" />

Chains from a promise to another promise.

```lua
(
	OnResolve: ((...any) -> (...any))?,
	OnReject: ((...any) -> (...any))?,
) -> Promise
```

This function returns a new promise that is resolved or rejected based on the return value of the callback functions. This should exactly match the [A+ Spec](https://promisesaplus.com/).

```lua
Promise.new(function(Resolve, Reject)
	Resolve("Hello, world!")
end):Then(function(Value)
	print(Value) -- Hello, world!
end)
```

### Catch <Badge type="info" text="Since 1.0.0" />

Chains from a promise to another promise, but only if the promise is rejected.

```lua
(
	OnReject: ((...any) -> (...any))?,
) -> Promise
```

This function is the equivalent of `Promise:Then(nil, OnReject)`.

```lua
Promise.new(function(Resolve, Reject)
	Reject("Hello, world!")
end):Catch(function(Value)
	print(Value) -- Hello, world!
end)
```

### Finally <Badge type="info" text="Since 1.0.0" />

Chains from a promise to another promise, but is always called.

```lua
(
	OnFinally: ((...any) -> (...any))?,
) -> Promise
```

This function is the equivalent of `Promise:Then(OnFinally, OnFinally)`.

```lua
Promise.new(function(Resolve, Reject)
	Resolve("Hello, world!")
end):Finally(function(Value)
	print(Value) -- Hello, world!
end)
```

### Await <Badge type="warning" text="Yields" /> <Badge type="info" text="Since 1.0.0" />

Waits for a promise to resolve or reject.

```lua
() -> (...any)
```

This function will wait for the promise to resolve or reject. If the promise is resolved, the values passed to Resolve will be returned. If the promise is rejected, the call will error with the first rejection value.

```lua
Promise.new(function(Resolve, Reject)
	Resolve("Hello, world!")
end):Await() -- Hello, world!
```