---
sidebar_position: 1
title: Messages Overview
---

# Messages

The Messages category covers everything about a message after it exists: reading it, replying to it, reacting to it, and the threads and polls that hang off it.

## The subcategories

| Page | What is in it |
| --- | --- |
| [Message](message.md) | Reading, sending, editing, deleting, pinning and reacting |
| [Threads](threads.md) | Creating and managing threads |
| [Polls](polls.md) | Discord's built-in polls |

## Related categories

- To **build** what a message looks like, use [Components](../Components/components.md).
- To send a message into a channel, use `send message in channel` from [Channels](../Servers/channels.md).
- To send a direct message, use `send a DM to user/member` from [Members](../Servers/members.md).
- For events like a message being deleted, edited or reacted to, see [Message Actions](../Events/message-actions.md).

## A note on message content

Reading the text of messages your bot was not mentioned in requires the **Message Content Intent**, which you switch on in the Discord Developer Portal. Without it, `get content of message received` comes back empty for most messages.

See [Creating a Discord bot](../../Guide/creating-a-bot.md) for where that setting lives.
