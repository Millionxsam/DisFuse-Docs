---
sidebar_position: 1
title: Events Overview
---

# Events

An event block runs its contents when something happens in Discord. Everything a bot does automatically, without anyone typing a command, starts with one of these.

## The subcategories

| Page | Fires when |
| --- | --- |
| [Server Actions](server-actions.md) | A member joins or leaves, or the bot is added to or removed from a server |
| [Boosts](boosts.md) | Somebody boosts, unboosts, or the server's boost level changes |
| [Message Actions](message-actions.md) | A message is deleted, edited, pinned, replied to, or reacted to |
| [Member Actions](member-actions.md) | A role is given or taken, or a nickname changes |
| [Thread Actions](thread-actions.md) | A thread is created or deleted |
| [Emojis and Stickers](emojis-stickers.md) | An emoji or sticker is created, deleted or changed |
| [Custom](custom.md) | Any discord.js event that does not have a block of its own |

## Events in other categories

Not every event lives here. The ones tied to a specific feature sit with that feature:

| Event | Where |
| --- | --- |
| When the bot is logged in | [Main](../main.md) |
| When a message is received | [Message](../Messages/message.md) |
| When a slash command is received | [Slash](../../Interactions/slash.md) |
| When a context menu is clicked | [Context Menus](../../Interactions/contextmenu.md) |
| When a modal is submitted | [Modals](../../Interactions/modals.md) |
| When a button is clicked | [Buttons](../Components/buttons.md) |
| When a menu is clicked | [Select Menus](../Components/select-menus.md) |
| When a vote is added to a poll | [Polls](../Messages/polls.md) |
| When an invite is created or deleted | [Invites](../Servers/invites.md) |

## How event blocks work

Each event comes with **companion blocks** that describe what happened. `when a member joins a server` is paired with `member that joined`, `server the member joined to` and `invite the member joined with`.

Those companion blocks only work inside their own event. Dragging `member that joined` into a slash command handler will not do anything useful, because nothing joined.

## Intents

Discord will not send your bot some events unless the matching **intent** is switched on in the Discord Developer Portal:

| Intent | Needed for |
| --- | --- |
| Server Members | Joins, leaves, role changes, nickname changes, member loops |
| Presence | Member online status |
| Message Content | The text of messages the bot was not mentioned in |

If an event never fires and the blocks look right, an intent is the first thing to check. See [Creating a Discord bot](../../Guide/creating-a-bot.md).

## Duplicate events

You can have several copies of the same event block, in the same workspace or across different workspaces. All of them run. This is a good way to keep unrelated features apart: one `when a member joins` for the welcome message, another for the autorole.
