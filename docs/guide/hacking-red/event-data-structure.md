# Event Data Structure

This section will go over the structure Red uses to pack events into a single call. Let's start off with the full structure, then break it down. You can learn about identifiers [here](./identifiers.md).

```lua
type Identifier = string

type SingleFire = {
	[Identifier]: any | { any },
}

type MultipleFire = {
	[Identifier]: { any | { any } },
}

type CallId = string

type ServerIncomingCall = {
	[Identifier]: {
		{ CallId, ...any },
	}
}

type ClientIncomingCall = {
	{ CallId, boolean, ...any },
}

type EventData = (
	SingleFire,
	MultipleFire,
	ServerIncomingCall | ClientIncomingCall
)
```

As you can see, it's not all too complex, but there is a lot there. Let's break it down.

## Single Fire Events

These are events that are fired once in the frame. We can save 2 bytes per call by seperating these from the multifire events.

```lua
type SingleFire = {
	[Identifier]: any | { any },
}
```

For now, ignore the `any` part of the `any | { any }`. We'll cover that in [Single Argument Compression](#single-argument-compression). As you can see, we take a dictionary of event identifiers, and map it to a list of arguments that the event is called with. However this only works for singular events, so that takes us to the next section.

## Multiple Fire Events

These are events that are fired multiple times in the frame.

```lua
type MultipleFire = {
	[Identifier]: { any | { any } },
}
```

At the core of it, these are the same as single fire events, but they're wrapped in a table so that we can have multiple calls to the same event in the same frame.

## Function-Like Calls

These are events that are called like functions. They are called with any number of arguments, and can return any number of arguments.

```lua
type CallId = string

type ServerIncomingCall = {
	[Identifier]: {
		{ CallId, ...any },
	}
}

type ClientIncomingCall = {
	{ CallId, boolean, ...any },
}
```

These are look somewhat complex, but once you figure it out it's actually quite simple. We'll start on the client, go to the server, and back to the client. 

1. On the client we have some arguments, and we want to call a function on the server, and importantly, get the returned values. We create a unique `CallId` to assign to this specific call, and then we send the `CallId` and the arguments to the server (packed in the same way as [Multiple Fire Events](#multiple-fire-events)).

2. The server recieves this call, and then runs the function in a protected call (`pcall`). It then sends the `CallId` and the returned values (including the `pcall` success value) back to the client.

3. The client maps the `CallId` to the returned promise, and resolves or rejects the promise with the returned values, based on the success value.

## Single Argument Compression

Single argument compression saves 2 bytes per call, and it's quite simple. **If an event is fired with a single argument, there is no need to wrap it in a table** (unless that single argument is a table). In Red this is done for Single Fire and Multiple Fire events, but not function-like calls.
