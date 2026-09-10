---
sidebar_position: 2
title: Server
---

# Server

Blocks about a whole Discord server: its name, its members, its icon, and its boosts.

<details>
  <summary>Show the whole Server flyout</summary>

![The Server subcategory](../media/categories/servers-server.png)

</details>

## Getting a server

![Get a server](../media/blocks/server_getone.png)

`get the server with the name equal to ...` looks a server up. It also accepts a server ID, which is more reliable, since two servers can share a name.

Most of the time you do not need this block. Event blocks already hand you a server, and interaction blocks have `server of the interaction`.

![For each server](../media/blocks/server_getall.png)

`for each server the bot is in` loops over all of them.

![Current server in loop](../media/blocks/server_guild.png)

Inside that loop, `current server in the loop` is the one being handled.

## Reading a server

| Block | Returns |
| --- | --- |
| ![name](../media/blocks/server_name.png) | The server name. |
| ![id](../media/blocks/server_id.png) | Its ID. |
| ![member count](../media/blocks/server_membercount.png) | How many members it has. |
| ![icon](../media/blocks/server_icon.png) | A URL to the server icon. |
| ![banner](../media/blocks/server_banner.png) | A URL to the server banner. |
| ![description](../media/blocks/server_dsc.png) | The server description. |
| ![owner id](../media/blocks/server_ownerid.png) | The owner's user ID. |
| ![created](../media/blocks/server_creationdate.png) | When the server was created. |
| ![vanity url](../media/blocks/server_vanityurl.png) | The custom invite URL, if the server has one. |
| ![verified](../media/blocks/server_verified.png) | Whether Discord has verified the server. |
| ![afk channel](../media/blocks/server_afkchannel.png) | The AFK voice channel. |
| ![system channel](../media/blocks/server_systemchannel.png) | Where Discord's own join messages go. |
| ![rules channel](../media/blocks/server_ruleschannel.png) | The rules channel of a community server. |

## Boosts

| Block | Returns |
| --- | --- |
| ![boost count](../media/blocks/boost_count.png) | How many boosts the server has. |
| ![boost level](../media/blocks/boost_level.png) | The boost tier, 0 to 3. |
| ![progress bar enabled](../media/blocks/boost_progressBar.png) | Whether the boost progress bar is shown. |

![Set progress bar](../media/blocks/boost_setProgressBar.png)

`show the boost progress bar of server` turns that bar on or off.

For events when someone boosts or the level changes, see [Boosts](../Events/boosts.md).

## Actions

| Block | What it does |
| --- | --- |
| ![disable invites](../media/blocks/server_disableinvites.png) | Pauses all invites to the server. A raid control measure. |
| ![leave](../media/blocks/server_leave.png) | Makes the bot leave the server. |

:::warning
`leave server` cannot be undone from inside the bot. Somebody has to re-invite it.
:::

## A worked example: a server info command

1. A slash command called `serverinfo`.
2. Build a container with a section that uses `icon URL of server` as its thumbnail.
3. Inside the container, text displays with the name, member count, boost level and creation date.
4. Format the creation date with `create timestamp from date` from [Time](../time.md), so it shows in each viewer's own time zone.
