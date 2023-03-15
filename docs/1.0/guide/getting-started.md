# Getting Started

This section will walk you through the process of installing Red and the most basic usage. This guide assumes you have a basic understanding of Lua.

## Installation

### Roblox Studio

Red is available as a rbxm file on the [Github Releases](https://github.com/uncontained0/Red/releases) page. Download the latest version and open it in Roblox Studio. It is suggested that you place the library in ReplicatedStorage.

### Rojo

Red is available as a Rojo project through [Wally](https://wally.run). Add Red to your `wally.toml` file and run `wally install`.

::: code-group

```toml [wally.toml]
[dependencies]
Red = "uncontained0/Red@1.0.0"
```

:::

## Basic Usage

::: info Code Examples
For simplicity, in each example Red will already be required and assigned to a variable named `Red`. This is the suggested naming convention when using Red.
:::

Red has no startup process, so you can require and start using it immediately. In Red, networking is split into Namespaces, which exist as abstractions over networking. Namespaces are created by calling `Red.Server` on the server, and `Red.Client` on the client.

Let's create a simple namespace that allows us to print a message on the server from the client.

::: code-group

```lua [Server]
local Net = Red.Server("PrintNamespace")

-- Assigns the function to handle the "Print" event
Net:On("Print", function(Player, Message)
	print(`Message from {Player.Name}: {Message}`)
end)
```

```lua [Client]
local Net = Red.Client("PrintNamespace")

Net:Fire("Print", "Hello, World!")
```

:::

What about remote functions? Red allows those too. Let's create a simple namespace that allows us to get a random number from the server. Something to note about Red is that remote functions and events are the same, except in the way they are called.

::: code-group

```lua [Server]
local Net = Red.Server("RandomNumberNamespace")

Net:On("GetRandomNumber", function(Player)
	return math.random()
end)
```

```lua [Client]
local Net = Red.Client("RandomNumberNamespace")

-- Client:Call returns a Promise, you can read more in the Promises Page
local RandomNumber = Net:Call("GetRandomNumber"):Await()
```

:::

::: tip
Remote functions can only be called from the client, and Remote Events can only be called from the server. A remote function that is called as an event will run in the same way, but will not return a value.
:::

## What Next?

With your basic understanding of Red, you have options. If you're confident in your understanding, feel free to proceed directly to the API Reference. If you'd like to read more about Red, feel free to read the rest of the guide.

If you're looking for help, feel free to join the [Roblox OSS Discord](https://discord.com/invite/mchCdAFPWU) server and ask in the [Red forum post](https://discord.com/channels/385151591524597761/1064606584430411906). If you don't feel like joining the server, feel free to open an issue on the github repository.