---
sidebar_position: 1
title: Servers Overview
---

# Servers

The Servers category is the largest in DisFuse. It covers everything inside a Discord server: the server itself, its channels, roles, invites, members, webhooks, emojis and stickers.

## The subcategories

| Page | What is in it |
| --- | --- |
| [Server](server.md) | The server as a whole: name, member count, icon, boosts |
| [Channels](channels.md) | Creating, reading, editing and deleting channels, and sending messages |
| [Roles](roles.md) | Creating roles, reading them, and giving them to members |
| [Invites](invites.md) | Creating, reading and deleting invite links |
| [Members](members.md) | Members and users, and the moderation actions |
| [Webhooks](webhooks.md) | Sending messages under a custom name and avatar |
| [Emojis](emojis.md) | Server emojis |
| [Stickers](stickers.md) | Server stickers |

## Permissions

Almost every action block in this section needs a permission, and the bot needs it too. If a block silently does nothing, check three things:

1. Does the bot have the permission in the server?
2. Does the bot have it in the specific channel? Channel overrides beat server settings.
3. Is the bot's role high enough? A bot cannot manage roles above its own, or moderate a member whose top role is above the bot's.

The blocks `is member bannable by the bot?` and `is member kickable by the bot?` in [Members](members.md), and `channel is manageable by the bot?` in [Channels](channels.md), let you check before you try.

## IDs

Most blocks accept either an object or an ID. To copy an ID in Discord, turn on **Developer Mode** in Settings, Advanced, then right-click anything and choose Copy ID.

:::tip
Do not hard-code IDs from your own server into a bot other people will add. Read them from a [database](../Databases/simple.md) or from your [DisFuse Website dashboard](../dashboard.md) so each server can set its own.
:::
