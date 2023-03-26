# What is Red?

Red is a networking library for roblox that combines efficiency and structure to create a powerful library with a good developer experience.

## Motivation

Networking is the most important part of any multiplayer game. You need a system that is fast, scalable, and easy to implement. I needed a library that could handle all of these things, and I couldn't find one. Red is my attempt at a library that doesn't decide code structure, and provides a simple interface for networking. Red is fast and efficient, using a single remote event and bundling calls together to reduce the bandwidth used.

## Features

- **Effortlessly Performant**

Red packs events into a single remote event call, and packs event names into small identifiers. This creates a measurable difference in bandwidth usage, all while the developer has no extra work.

- **Structure**

Red's structure, or lack of structure, is one of its most powerful features. Red is designed to allow you to structure your code however you like. Red provides networking in an interface that is easy to use and reads well.

- **Typesafe**

The entire Red codebase is written in strict luau. This helps prevent bugs and assures that all intellisense is available and accurate.

## Credits

Huge credit to **ffrostfall** for creating BridgeNet, a proof of concept networking library that created many of the techniques used in Red.
