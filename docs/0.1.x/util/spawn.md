# Spawn

`task.spawn` is amazing. This is the greatest feature to
ever grace the roblox update page. Not really, but it is a
good feature, but it has some limitations. When spawning
a large number of threads, it can use a lot of memory and
be somewhat slow. As well as this, the only reason to use it
is if we will be doing some asynchronous operation or if we
don't trust the code to not error.

`Spawn` solves this through thread reuse. As long as a given
function doesn't error or yield, the thread will be reused.
At scale, this can be a huge performance boost.

## Usage

```lua
Red.Spawn(print, "Hello", "World")
```