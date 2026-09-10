---
sidebar_position: 3
title: Channels
---

# Channels

Channels are where everything happens. This subcategory creates them, reads them, changes them, and sends messages into them.

<details>
  <summary>Show the whole Channels flyout</summary>

![The Channels subcategory](../media/categories/servers-channels.png)

</details>

## Sending a message

![Send message in channel](../media/blocks/cv2_sendMessage.png)

`send message in channel` is the block you will use more than any other in DisFuse. Give it a channel, then build the message in the **components** input using the [Components](../Components/components.md) blocks. The **files** input takes [file](../Components/file-display.md) blocks.

![Message sent by the bot](../media/blocks/misc_messageSent.png)

Right after sending, `message sent by the bot` is the message that just went out. Use it to react to it, pin it, or store its ID.

## Getting a channel

| Block | Returns |
| --- | --- |
| ![get channel](../media/blocks/channel_getone.png) | A channel by name, or by ID. |
| ![for each channel](../media/blocks/channel_foreach.png) | Loops over every channel in a server. |
| ![current channel](../media/blocks/channel_channel.png) | The channel being handled inside that loop. |

## Creating a channel

![Create a channel](../media/blocks/channel_create.png)

`create a channel in the server` takes a name, an optional category, and a type: text, announcements, voice, stage or forum. Blocks in the `then` part run once it exists.

![Created channel](../media/blocks/channel_createdChannel.png)

`created channel` is the new channel. Send a welcome message into it, set permissions on it, or store its ID.

![Clone a channel](../media/blocks/channel_clone.png)

`clone the channel` copies an existing channel, permissions included, under a new name. This is how "nuke and recreate" moderation commands work.

## Reading a channel

| Block | Returns |
| --- | --- |
| ![name](../media/blocks/channel_name.png) | The channel name. |
| ![id](../media/blocks/channel_id.png) | Its ID. |
| ![url](../media/blocks/channel_url.png) | A link that jumps to it. |
| ![topic](../media/blocks/channel_gettopic.png) | The channel topic. |
| ![category](../media/blocks/channel_getParent.png) | The category it sits in. |
| ![slowmode](../media/blocks/channel_getslowmode.png) | Its slowmode, in seconds. |
| ![nsfw](../media/blocks/channel_getnsfw.png) | Whether it is marked age restricted. |
| ![type](../media/blocks/channel_gettype.png) | Whether it is a given kind of channel. |
| ![created](../media/blocks/channel_created.png) | When it was created. |
| ![deletable](../media/blocks/channel_deletable.png) | Whether the bot is allowed to delete it. |
| ![manageable](../media/blocks/channel_manageable.png) | Whether the bot is allowed to change it. |

## Changing a channel

| Block | What it does |
| --- | --- |
| ![rename](../media/blocks/channel_setname.png) | Renames the channel. |
| ![set topic](../media/blocks/channel_settopic.png) | Sets the topic. |
| ![set slowmode](../media/blocks/channel_setslowmode.png) | Sets seconds between messages. |
| ![set nsfw](../media/blocks/channel_setnsfw.png) | Marks it age restricted. |
| ![move to category](../media/blocks/channel_setParent.png) | Moves it into a category, optionally syncing permissions. |
| ![sync permissions](../media/blocks/channel_syncPerms.png) | Resets its permissions to match its category. |
| ![set position](../media/blocks/channel_setPosition.png) | Moves it up or down the channel list. |
| ![auto archive](../media/blocks/channel_setautoarchive.png) | Sets how long threads stay active before archiving. |
| ![delete](../media/blocks/channel_del.png) | Deletes the channel. |

Most of these accept a **reason**, which is written into the server's audit log.

## Permissions

![Set permission](../media/blocks/channel_set_permission_v2.png)

`set permission ... to Allow/Deny/Default on channel ... for role/everyone/member` is how you lock a channel down or open it up. Pick the permission from the dropdown, and the target can be a role, a member, or everyone.

![Delete permission](../media/blocks/channel_delete_permission.png)

`delete all permissions of ...` removes a role or member's override entirely, so they fall back to the server defaults.

This pair is what ticket bots use: create a channel, deny View Channel for everyone, allow it for the person who opened the ticket.

## Bulk actions

![Bulk delete](../media/blocks/channel_bulkdelete.png)

`delete the last ... messages on channel` clears a number of recent messages at once.

:::warning
Discord does not allow bulk deleting messages older than 14 days. Anything older has to be deleted one at a time.
:::

![Start typing](../media/blocks/channel_starttyping.png)

`start typing on channel` shows the "bot is typing" indicator. Use it before something slow so the channel does not look dead.

## Reading recent messages

![Fetch last messages](../media/blocks/channel_fetchLastMessages.png)

`get last ... messages of channel` fetches a batch. Inside the `then` part:

![Fetched message](../media/blocks/channel_fetchedLastMessages.png)

`message # 1` picks one out of the batch by position.

## Waiting for a reply

![Wait for responses](../media/blocks/channel_waitForResponse.png)

`wait for responses in channel` collects messages for a while, then runs one of two stacks: one when messages arrived, one when the time ran out.

| Field | What it is |
| --- | --- |
| Accept messages if | A test that decides whether a message counts. |
| Time (seconds) | How long to wait. |
| Max messages | How many to collect before stopping early. |
| When finished collecting | Runs with the collected messages. |
| If no responses received | Runs when nothing matched in time. |

![Message being checked](../media/blocks/channel_awaitResponses_filterMsg.png)

Inside the filter, `message being checked` is the candidate. A common filter is "the author is the person who ran the command".

![Responses](../media/blocks/channel_responses.png)

In the finished part, `responses` is a list. Use the [Lists](../lists.md) blocks to read it.

This is how you build a setup wizard that asks questions in a channel one at a time.

## A worked example: a lockdown command

1. A slash command called `lockdown`.
2. `for each channel on the server`.
3. Skip anything that is not a text channel, using `channel is Text channel?`.
4. `set permission Send Messages to Deny on channel <current channel> for @everyone`, with the reason "Lockdown by " and the moderator's name.
5. Reply with how many channels were locked.
