# What is Red?

Red is networking library for roblox that combines efficency
with ease of use.

::: warning There be dragons!
Red is currently in a pre-release state. This means that the
API is subject to change and there *could* be bugs or
unintended behavior.
:::

## Motivation

Roblox networking is annoying to use at scale.

Projects like Knit and RbxNet attempt to solve this problem
in different ways. Knit is a full framework that provides a
lifecycle and singletons to manage networking. RbxNet is a
typesafe networking library designed to be used with
typescript.

Red takes inspiration from these projects, and from
BridgeNet, a networking library with a focus on performance.
**Huge credit to ffrostfall.** BridgeNet fails in
completeness, it was designed as a proof of concept, and not
a library for use in production. However the concept is
sound, and Red uses the same design to achieve similar
performance.

I set out to create a library that is effortlessly
performant, easy to use and understand, and is truly a
library, not a framework.

## Features

- **Effortlessly Performant** <br>
Red packs events into a single remote event call, and packs
event names into identifiers that take less space. None of
this creates extra work for the developer.
- **Structure** <br>
Red is designed with a very simple structure in mind. Events
are split into groups called namespaces. Each namespace can
send events, receive events, and make remote calls.
- **Typesafe** <br>
The entire Red codebase is written in strict luau. This
helps prevent bugs and assures that all intellisense is
available and accurate.

## The Future of Red

Red is currently in a pre-release state. I will personally
using Red in my own projects, and will be fixing any bugs I
stumble upon and adding features as I need them. Feel free
to contribute to the project, or open an issue if you find
any bugs.