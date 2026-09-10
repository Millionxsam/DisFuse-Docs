---
sidebar_position: 1
title: Interactions Overview
---

# Interactions

An interaction is Discord telling your bot that somebody did something deliberate: ran a command, clicked a button, chose from a menu, or submitted a form.

## The kinds of interaction

| Kind | How it starts | Page |
| --- | --- | --- |
| Slash command | Someone types `/name` | [Slash Commands](slash.md) |
| Context menu | Someone right-clicks a user or message and picks an app action | [Context Menus](contextmenu.md) |
| Modal | Your bot shows a form and someone submits it | [Modals](modals.md) |
| Button | Someone clicks a button on a message | [Buttons](../Blocks/Components/buttons.md) |
| Select menu | Someone chooses from a dropdown | [Select Menus](../Blocks/Components/select-menus.md) |

Slash commands, context menus and modals live under Interactions in the toolbox. Buttons and select menus live under Components, because they are parts of a message.

## The three second rule

Discord gives your bot **3 seconds** to respond to any interaction. Miss it and the user sees "This interaction failed", and you cannot recover.

![Reply to the interaction](../Blocks/media/blocks/cv2_replyInteraction.png)

If your handler is quick, `reply to the interaction` is all you need.

![Defer reply](../Blocks/media/blocks/misc_int_deferReply.png)

If it is not, `defer reply` as the very first block. Discord shows "the bot is thinking...", and you then have 15 minutes.

![Edit the bot's reply](../Blocks/media/blocks/cv2_editReplyInteraction.png)

After deferring, answer with `edit the bot's reply`, not another reply.

Defer whenever your handler fetches something, loops over members, or waits on anything at all.

## Ephemeral replies

Every reply block has a **visible only to the user** option. Turn it on for anything the rest of the channel does not need: errors, confirmations, personal information, and settings menus.

## What you get from any interaction

Four blocks work in every interaction handler:

| Block | Returns |
| --- | --- |
| ![member](../Blocks/media/blocks/misc_int_member.png) | The member who triggered it, inside that server. |
| ![user](../Blocks/media/blocks/misc_int_user.png) | The user who triggered it. |
| ![channel](../Blocks/media/blocks/misc_int_channel.png) | The channel it happened in. |
| ![server](../Blocks/media/blocks/misc_int_server.png) | The server it happened in. |

Use `member of the interaction` for anything server related, such as checking permissions or adding a role. Use `user of the interaction` when you only need the account.

## Registering commands and menus

![Create slash commands / context menus](../Blocks/media/blocks/misc_createcontainer_global.png)

Slash commands and context menus have to be **registered** with Discord before they appear. That is what `create slash commands / context menus` does, and it belongs inside `when the bot is logged in` from [Main](../Blocks/main.md).

- Leave **test guild ID** blank to register globally. Global commands can take up to an hour to appear everywhere.
- Put a server ID in it to register only there. Those appear immediately, which is what you want while building.

Buttons, select menus and modals are not registered. They exist as soon as your bot sends them.

## One event, many handlers

Every interaction event fires for **all** interactions of its kind, so the first block inside each handler is nearly always an `if` that checks the name or custom ID.

You can also have several copies of the same event block, each checking for a different command. Both approaches work. Splitting them up makes each command easier to find; a single [switch](../Blocks/logic.md) keeps the routing in one place.
