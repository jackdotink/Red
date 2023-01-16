# Signal

You don't need me to explain signals to you. Signals are
collections of functions that are called when the signal
is fired.

Signals are not actually used anywhere within Red, but it's
convenient to have a signal implementation that uses Red's
promises.

## Connection Object

Connections are objects that represent a connection to a
signal. They have a `disconnect` method that can be used to
disconnect the connection. Connections will be garbage
collected after they are disconnected.

### Disconnect
`(self) -> ()`

Disconnects the connection.

## Signal Object

Signals are objects that can be connected to and fired. They
have a `connect` method that can be used to connect a
function to the signal. They have a `fire` method that can
be used to fire the signal.

### new
`() -> Signal`

Creates a new signal.

### Connect
`(self, Callback: (...any) -> ()) -> Connection`

Connects a callback to the signal. The callback will be
called when the signal is fired. The callback will be
called with the arguments that were passed to the `Fire`
method.

### Fire
`(self, ...any) -> ()`

Fires the signal. All callbacks connected to the signal will
be called with the arguments that were passed to this
method.

### Wait
`(self) -> Promise`

Returns a promise that will be resolved when the signal is
next fired. The promise will be resolved with the arguments
that were passed to the `Fire` method.