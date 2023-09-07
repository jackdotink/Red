<div align="center">
	<img src="docs/public/logo.png" alt="Red" />
</div>

<hr />

**Red has moved to a new [repo](https://github.com/red-blox/red/). This repo has since been archived.**

# What is Red?

Red is a networking library for Roblox that combines a good structure with blazing fast performance to provide a good developer experience. Red is suitable for any project, from tiny experiments to large-scale games.

## Structure

Red allows the developer to use whatever structure they'd like. However, Red also has it's own recommended structure that enforces good practices and creates more performant code.

## Performance

Unlike many other networking libraries, which very simply wrap around Remote Events and Functions, Red uses a single Remote Event and identifiers to pack remote events and functions into a single call. This event packing allows Red to use much less bandwidth than normal Remote Event usage. This saved bandwidth comes at a minimal performance cost, and is often faster than other libraries because of it's simplicity.

## Developer Experience

Red uses Luau, and is internally typed completely in strict Luau. This creates full autocomplete and type checking for the developer. The Red API is very simple and easy to use, and it fits seamlessly into any project. Red is boilerplate free, there is no setup process.

## Documentation

Documentation can be found [here](https://redblox.dev).

## Contributing

Please read our [contribution guide](CONTRIBUTING.md).

## License

Red is licensed under the [MIT License](LICENSE).
