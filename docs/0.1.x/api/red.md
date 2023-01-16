# Red

The root of the Red API.

## Functions

### Client
`() -> Client`<br>
`(Name: string) -> Client`<br>
`(Identifiers: { string }) -> Client`<br>
`(Name: string, Identifiers: { string }) -> Client`

Returns a new [client namespace](./client.md) based on the
given arguments.

If you pass no arguments, you are given the global
namespace. The name argument is the name of the namespace
you would like to access, and the identifiers argument is
explained [here](../guide/namespaces.md#identifiers).

This function will error if called from the server.

### Server
`() -> Server`<br>
`(Name: string) -> Server`<br>
`(Identifiers: { string }) -> Server`<br>
`(Name: string, Identifiers: { string }) -> Server`

Returns a new [server namespace](./server.md) based on the
given arguments.

If you pass no arguments, you are given the global
namespace. The name argument is the name of the namespace
you would like to access, and the identifiers argument is
explained [here](../guide/namespaces.md#identifiers).

This function will error if called from the client.

### Spawn
`<T...>(Callback: (T...) -> (), T...) -> ()`

Uses the [Spawn Util](../util/spawn.md) to spawn the
callback in a new thread.

## Classes

### Signal

A reference to the [Signal](../util/signal.md) class.

### Promise

A reference to the [Promise](../util/promise.md) class.

### Clock

A reference to the [Clock](../util/clock.md) class.