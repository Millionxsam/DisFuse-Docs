---
sidebar_position: 1
title: Components Overview
---

# Components

Every message your bot sends is built out of components. Text, images, buttons, menus and containers all go into the same list, in whatever order you want them.

This is Discord's Components V2 system, which DisFuse adopted in May 2026. If you used DisFuse before that, the change is worth reading about in [Components V2](../../Guide/componentsV2.md).

## How a message is put together

A send block, such as `send message in channel`, has a **components** input. You stack component blocks inside it, and Discord renders them top to bottom in that order.

![The Layout subcategory](../media/categories/components-layout.png)

That means there is no separate "content" and "embeds". A plain text message is one text display component. A rich message is a container with a few things inside it. A message with buttons is those components followed by an interactive row.

## The subcategories

| Page | What is in it |
| --- | --- |
| [Layout](layout.md) | Text displays, separators, containers, and the interactive row that holds buttons and menus |
| [Sections](sections.md) | Text with an image or a button beside it |
| [Media](media.md) | Image galleries |
| [File display](file-display.md) | Attaching a file and showing it in the message |
| [Buttons](buttons.md) | Adding buttons, and responding when one is clicked |
| [Select Menus](select-menus.md) | Dropdown menus of text, channels, roles, users or both |

## The blocks that send a message

The component blocks describe *what* is in a message. These blocks decide *where* it goes, and they live in other categories:

| Block | Category |
| --- | --- |
| `send message in channel` | [Channels](../Servers/channels.md) |
| `reply to the message` | [Message](../Messages/message.md) |
| `edit message` | [Message](../Messages/message.md) |
| `send a DM to user/member` | [Members](../Servers/members.md) |
| `reply to the interaction` | [Slash](../../Interactions/slash.md), Buttons, Select Menus, Modals, Context Menus |
| `edit the bot's reply` | the same interaction categories |

All of them take the same components input, so a message you designed for a channel works unchanged as an interaction reply.

## Limits worth knowing

- A message can hold up to 40 components in total, counting the ones nested inside containers and sections.
- An interactive row holds up to 5 buttons, or exactly 1 select menu.
- A message can hold up to 5 interactive rows.
- Containers cannot go inside other containers.

If a message fails to send with a complaint about components, one of these is usually the reason.
