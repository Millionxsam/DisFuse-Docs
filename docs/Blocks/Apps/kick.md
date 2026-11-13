---
sidebar_position: 8
title: Kick
---

# Kick

Blocks for Kick: read channels and their streams, find the most watched live streams, and get notified when a channel goes live.

Kick only shares this through its official API, so every Kick block needs a free Kick app. Wherever a block asks for a channel, you can give it the channel's name (like `xqc`) or its `kick.com` link.

<details>
  <summary>Show the whole Kick flyout</summary>

![The Kick subcategory](../media/categories/apps-utils-kick.png)

</details>

## Logging in

1. Go to [kick.com/settings/developer](https://kick.com/settings/developer) (you need two-factor authentication turned on) and create an app. Use `http://localhost` as the redirect URL.
2. Save its **Client ID** and **Client Secret** as [secrets](../../Guide/secrets.md) named `KICK_CLIENT_ID` and `KICK_CLIENT_SECRET`.

![Log in](../media/blocks/kick_login.png)

Put `log in to Kick` in `when the bot is logged in`. The blocks only read public info, so no Kick account login is needed.

## Channels

| Block | What it does |
| --- | --- |
| ![get channel](../media/blocks/kick_getChannel.png) | Looks up a channel and its stream. |
| ![top streams](../media/blocks/kick_forEachLivestream.png) | Runs once for each of the most watched live streams, optionally only in one category. |

![Channel info](../media/blocks/kick_channelInfo.png)

`get ... of Kick channel` reads the name, link, user ID, description, whether it is live, the stream title, category, viewer count, start time, thumbnail, language, whether it is for mature audiences, the banner image and the profile picture. The profile picture is only known for channels from the top streams block; the description and banner only for channels you got by name.

## Live notifications

![On live](../media/blocks/kick_onLive.png)

`when Kick channel ... goes live` goes on its own in the workspace, not inside an event. It checks the channel every few minutes (at least 1) and runs the blocks inside when a stream starts, or ends if you pick **offline**. Use `get ... of Kick channel` inside.

## Quick info

| Block | Returns |
| --- | --- |
| ![is live](../media/blocks/kick_isLive.png) | True while the channel is streaming. |
| ![viewers](../media/blocks/kick_viewerCount.png) | How many people are watching, or 0 when offline. |

## Notes

- Every block here goes over the network, so `defer reply` first inside an interaction.
- Sending Kick chat messages needs a Kick account login, which these blocks do not do.
