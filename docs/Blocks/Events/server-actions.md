---
sidebar_position: 2
title: Server Actions
---

# Server Actions

Members joining and leaving, and the bot being added to or removed from a server.

<details>
  <summary>Show the whole Server Actions flyout</summary>

![The Server Actions subcategory](../media/categories/events-server-actions.png)

</details>

## When a member joins

![When a member joins](../media/blocks/events_guild_memberAdd.png)

Fires whenever somebody joins a server your bot is in.

| Companion block | Returns |
| --- | --- |
| ![member that joined](../media/blocks/events_guild_memberAdd_member.png) | The member who joined. |
| ![server joined](../media/blocks/events_guild_memberAdd_server.png) | The server they joined. |
| ![invite used](../media/blocks/events_guild_memberAdd_invite.png) | The invite they used. |

This is where welcome messages, autoroles, invite tracking and join gates all start.

:::warning
This event needs the **Server Members Intent**, which you switch on in the Discord Developer Portal. Without it your bot never hears about joins.
:::

`invite the member joined with` needs the bot to have the **Manage Server** permission, because that is what lets it read the invite list.

## When a member leaves

![When a member leaves](../media/blocks/events_remove_guildmemberremove.png)

Fires when somebody leaves, is kicked, or is banned. Discord does not tell you which, so if you need to tell a leave from a kick, check the audit log.

| Companion block | Returns |
| --- | --- |
| ![leaving member](../media/blocks/events_remove_guildmemberremove_member.png) | The member who left. |
| ![server](../media/blocks/events_remove_guildmemberremove_server.png) | The server they left. |

## When the bot is added to a server

![Bot added](../media/blocks/events_guild_created.png)

Fires when somebody invites your bot somewhere new.

![Server the bot joined](../media/blocks/events_guild_created_guild.png)

`server the bot joined` is the new server.

Use it to send a setup message to the server owner, to create default settings in your database, or to log growth.

## When the bot is removed from a server

![Bot removed](../media/blocks/events_guild_deleted.png)

Fires when your bot is kicked or banned from a server, or the server is deleted.

![Server that removed the bot](../media/blocks/events_guild_deleted_guild.png)

`server that removed the bot` is the server it left.

Use it to clean that server's data out of your database.

## A worked example: a welcome message

1. `when a member joins a server`.
2. `get the channel with the name equal to welcome on the server <server the member joined to>`.
3. `send message in channel` with a container holding:
   - a section with thumbnail, using `avatar URL of <member that joined>`
   - a text display with "Welcome, " and a mention of the member
4. Add `add role to member` to give them a starting role.

To make it work in every server rather than only yours, store the welcome channel ID per server in a [database](../Databases/simple.md) or a [website dashboard setting](../dashboard.md).
