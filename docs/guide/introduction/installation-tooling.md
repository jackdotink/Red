# Installation & Tooling

The installation and tooling guide depends on where you are using Red.

## Studio

### Installation

1. Download the latest version of Red from the [releases page](https://github.com/uncontained0/red/releases).
2. Insert the downloaded model into `ReplicatedStorage`.
3. Start using Red!

### Tooling

The default studio tooling is acceptable for Red.

## Rojo & Wally

### Installation

1. Make sure you have [Rojo](https://rojo.space/) and [Wally](https://wally.run/) installed.
2. Add Red to your `wally.toml` file.

::: code-group
```toml [wally.toml]
[dependencies]
name = "uncontained0/red@^1.0.0"
```
:::

3. Run `wally install`.
4. Start using Red!

### Tooling

Red is written with strict Luau, so you can use any tooling that supports Luau. **The only officially supported tools are Luau LSP and Stylua.**
