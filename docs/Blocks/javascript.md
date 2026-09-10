---
sidebar_position: 12
title: JavaScript
---

# JavaScript

DisFuse turns your blocks into JavaScript. These blocks let you step outside the block system when you need to: run your own code, wait, log to the console, and handle errors.

<details>
  <summary>Show the whole JavaScript flyout</summary>

![The JavaScript category](media/categories/javascript.png)

</details>

## Waiting

![Wait](media/blocks/javascript_wait.png)

`wait (in milliseconds)` pauses before running the next block. 1,000 milliseconds is one second.

Use it for pacing a sequence of messages, or for cleaning up a temporary message a few seconds after sending it.

## Logging to the console

The console is the black window where your bot's output appears on your host. Nothing here is visible in Discord.

| Block | What it does |
| --- | --- |
| ![console log](media/blocks/javascript_consolelog.png) | Prints a value. |
| ![console warn](media/blocks/javascript_consolewarn.png) | Prints a value as a warning. |
| ![console error](media/blocks/javascript_consoleerror.png) | Prints a value as an error. |
| ![clear console](media/blocks/javascript_consoleclear.png) | Clears the console. |
| ![ask for input](media/blocks/javascript_consoleinput.png) | Asks whoever is running the bot to type something. |

`console log` is the single most useful debugging tool you have. When a command is not doing what you expect, log the values going into it and watch what actually arrives.

## Handling errors

![Try catch](media/blocks/javascript_trycatch.png)

`try to run code ... if error ...` runs a stack of blocks and, if anything inside them fails, runs the second stack instead of crashing.

![Try catch finally](media/blocks/javascript_trycatchfinally.png)

The `then finally` version adds a third stack that runs either way.

![The error block](media/blocks/javascript_trycatch_error.png)

Inside the `if error` part, the `error` block holds what went wrong. Log it, or show it to yourself in a private channel.

:::tip
Wrap anything that talks to the outside world in a try block: sending a DM to someone who has DMs closed, banning a member with a higher role than the bot, or fetching a URL that might be down. Without it, one failure stops that whole event.
:::

## Raw code

Three blocks let you write JavaScript directly.

| Block | Where it goes |
| --- | --- |
| ![raw statement](media/blocks/javascript_raw.png) | In a stack, as an action. |
| ![raw floating](media/blocks/javascript_raw_float.png) | On its own, outside any event. Use it for imports or top-level setup. |
| ![raw value](media/blocks/javascript_raw_value.png) | In a hole, as a value. |

Your code runs inside a real [discord.js](https://discord.js.org) v14 bot. `client` is the bot, and inside an event block the usual discord.js variables are in scope.

:::warning
Raw code is not checked by DisFuse. A syntax error in one of these blocks stops your whole bot from starting, and the error message will point at the generated file rather than the block. Use **File > Show Code** to see exactly where your code lands.
:::

## Other blocks

| Block | What it does |
| --- | --- |
| ![type of](media/blocks/javascript_typeof.png) | The type of a value, as text: `string`, `number`, `object` and so on. |
| ![binary](media/blocks/string_binary.png) | Converts text to binary, or binary back to text. |
| ![exit](media/blocks/javascript_exit.png) | Stops the bot process entirely, with an exit code. |

`forcequit` is a hard stop. If you want the bot to disconnect from Discord but keep running, use `shutdown the bot` from [Main](main.md) instead.
