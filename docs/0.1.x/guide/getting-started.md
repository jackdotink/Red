# Getting Started

This section will walk you through the process of installing
Red and the most basic usage. This guide assumes you are
familiar with Rojo, Git, and Wally.

## Installation

Red is available only through Rojo. You can choose to
include it as a git-submodule or as a wally dependency.

### Git Submodule

To install Red as a git submodule, run the following command
in your project directory:

```bash
git submodule add https://github.com/Uncontained0/Red.git FILEPATH
```

Replace `FILEPATH` with the path you want to install Red to.

### Wally

To install Red as a wally dependency, add the following to
your `wally.toml` file:

```toml
[dependencies]
Red = "uncontained0/Red@0.1.0"
```

## Basic Usage

Red is ready to use right out of the box. There is no start
process needed.

Let's start by creating a simple event on the server that
just prints the arguments passed to it.

```lua
local Red = require(Path.To.Red)

Red.Server():Callback("Print", function(...)
	print(...)
end)
```

::: info
What we're really doing here is accessing the global
namespace by calling `Red.Server` without any arguments,
then setting up a callback on the `Print` event.

It's important to note that each event can only have one
callback, the reason for this will be explained later.
:::

Now let's call this event on the client.

```lua
local Red = require(Path.To.Red)

Red.Client():Fire("Print", "Hello", "World")
```

This code is great, but it's in the global namespace. Let's
move it to a namespace called `Logger`.

```lua
Red.Server("Namespace"):Callback("Print", function(...)
	print(...)
end)
```

```lua
Red.Client("Namespace"):Fire("Print", "Hello", "World")
```

::: tip
Its useful to know that namespaces are only created once, so
call `Red.Server` as many times as you please.
:::

## What Next?

Now that you've gotten a feel for the style of Red, you can
continue to learn more about the API by reading the rest of
this guide, or by skipping ahead to the API Reference.

If you need any help, feel free to join the [Roblox OSS Discord](https://discord.gg/mchCdAFPWU)
and ask in the [Red Forum Post](https://discord.com/err).

If you don't feel like joining a server you can open an
issue on the github repository.