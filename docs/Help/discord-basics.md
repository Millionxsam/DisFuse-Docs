---
sidebar_position: 3
title: Discord Basics
---

# Discord Basics

Things DisFuse assumes you know about Discord itself. None of it is specific to DisFuse, and all of it comes up constantly.

## IDs

Every server, channel, role, user and message on Discord has a numeric **ID**. IDs never change, even when names do, which is why blocks prefer them.

To copy one:

1. Open Discord's **Settings**, then **Advanced**.
2. Turn on **Developer Mode**.
3. Right-click anything and choose **Copy ID**.

:::tip
Look up channels and roles by ID rather than by name wherever you can. Somebody renaming `#general` to `#general-chat` should not break your bot.
:::

## Permissions

Permissions decide what your bot is allowed to do. They come from three places, and all three have to line up.

**Server permissions** come from the roles the bot has.

**Channel overrides** are set per channel and beat the server settings. A bot with Send Messages at the server level still cannot post in a channel where that permission is denied.

**The role hierarchy** is the one people forget. A bot can only act on roles and members **below its own highest role**. It cannot ban somebody whose top role is above the bot's, and it cannot give out a role above its own.

If a bot action silently does nothing, work through those three in order. Dragging the bot's role higher in Server Settings, Roles fixes most of them.

### Permissions your bot probably needs

| Permission | For |
| --- | --- |
| View Channel | Seeing a channel at all |
| Send Messages | Posting |
| Embed Links | Containers and embeds |
| Attach Files | Images and generated files |
| Read Message History | Fetching past messages, reactions, pins |
| Manage Messages | Deleting other people's messages, pinning |
| Manage Roles | Giving and taking roles |
| Kick Members, Ban Members, Moderate Members | Moderation |
| Manage Channels | Creating and editing channels |
| Manage Server | Reading the invite list |
| Manage Webhooks | Creating and using webhooks |
| Manage Expressions | Emojis and stickers |

Ask for the least you need. A bot requesting Administrator will be turned away by careful server owners.

## Intents

An **intent** is permission to receive a kind of event from Discord, granted in the Discord Developer Portal rather than in a server. Three of them are privileged and are off by default.

| Intent | Without it |
| --- | --- |
| **Presence** | You cannot see who is online. |
| **Server Members** | You never hear about joins, leaves, role changes or nickname changes, and member loops run zero times. |
| **Message Content** | Message text is empty unless the bot was mentioned. |

DisFuse asks Discord for every intent when your bot starts, and Discord refuses the whole connection if a bot requests one it was not granted. So a bot with these switched off does not start at all, with the error `Used disallowed intents`.

Turn all three on under **Bot** in the [Discord Developer Portal](https://discord.com/developers/applications). See [Creating a Discord bot](../Guide/creating-a-bot.md).

## Rate limits

Discord caps how often a bot may act. Go over and it refuses requests for a while.

Things that hit rate limits:

- Looping over thousands of members or channels
- Sending many messages in quick succession
- A popular command with no [cooldown](../Blocks/cooldowns.md)

Avoid it by looking things up directly instead of looping, adding cooldowns to anything users can spam, and never putting a message send inside a loop with hundreds of passes.

## Bots versus users

A bot account is not a user account, and Discord treats it differently:

- A bot can only edit its own messages.
- A bot cannot read a DM conversation list.
- A bot cannot send friend requests or join servers on its own. Somebody has to invite it.
- Only bots can send components, and only bots can send more than one embed on a message.

## Mentions

Mentions are written in message text as a special form:

| Mentions | Written as |
| --- | --- |
| A user | `<@USER_ID>` |
| A channel | `<#CHANNEL_ID>` |
| A role | `<@&ROLE_ID>` |
| A custom emoji | `<:name:ID>` |
| An animated emoji | `<a:name:ID>` |
| A timestamp | `<t:SECONDS:R>` |

Build them with `create text with` from [Text](../Blocks/text.md), or use `create timestamp from date` from [Time](../Blocks/time.md) for the last one.

## Markdown

Discord message text supports:

```
**bold**   *italic*   __underline__   ~~strikethrough~~
`code`     ```code block```
> quote    # heading   - list item
||spoiler||
```

All of it works in a [text display](../Blocks/Components/layout.md) component.

## Servers, guilds and channels

Discord's own API calls a server a **guild**. You will see both words. They mean the same thing, and DisFuse says "server" nearly everywhere.

Channel types you will meet: text, announcement, voice, stage, forum, and category. A category is a channel that holds other channels.

Threads are channels too, which is why thread blocks return a `channel`.
