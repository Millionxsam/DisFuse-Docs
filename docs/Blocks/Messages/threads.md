---
sidebar_position: 3
title: Threads
---

# Threads

A thread is a temporary side conversation inside a channel. Ticket systems, support posts and forum channels are all built out of them.

<details>
  <summary>Show the whole Threads flyout</summary>

![The Threads subcategory](../media/categories/messages-threads.png)

</details>

## Creating a thread

![Create thread from a message](../media/blocks/threads_msgCreateThread.png)

`start a thread in the message` attaches a thread to an existing message. Everyone who can see the message can see the thread.

![Create thread in a channel](../media/blocks/threads_channelCreateThread.png)

`start a thread in the channel` creates a standalone thread with no starter message.

Both blocks take:

| Field | What it is |
| --- | --- |
| Name | The thread title. |
| Slowmode | Seconds between messages, 0 for none. |
| Type | Public, Private, or Announcement. |
| then | Blocks that run once the thread exists. |

![Created thread](../media/blocks/threads_createdThread.png)

Inside the `then` part, `created thread` is the new thread. Use it to send the first message, add people, or store its ID.

:::info
Private threads need a boosted server on some Discord plans. If creation fails, try a public thread first to rule this out.
:::

## Finding a thread

| Block | Returns |
| --- | --- |
| ![get thread by name](../media/blocks/threads_getone.png) | A thread in a channel, by name. |
| ![has thread](../media/blocks/threads_msgHasThread.png) | True when a message has a thread on it. |
| ![thread of message](../media/blocks/threads_msgThread.png) | The thread attached to a message. |
| ![is message in thread](../media/blocks/threads_msgInThread.png) | True when a message was sent inside a thread. |
| ![thread a message is in](../media/blocks/threads_getThread.png) | The thread a message is in. |

## Reading a thread

| Block | Returns |
| --- | --- |
| ![name](../media/blocks/threads_name.png) | The thread's name. |
| ![id](../media/blocks/threads_id.png) | Its ID. |
| ![created at](../media/blocks/threads_createdAt.png) | When it was created. |
| ![author](../media/blocks/threads_author.png) | The user who started it. |
| ![author member](../media/blocks/threads_authorMember.png) | The same person, as a member of the server. |
| ![last message](../media/blocks/threads_lastMessage.png) | The most recent message in it. |
| ![member count](../media/blocks/threads_memberCount.png) | How many people have joined it. |
| ![parent channel](../media/blocks/threads_parentChannel.png) | The channel the thread lives in. |
| ![is status](../media/blocks/threads_isStatus.png) | Whether the thread is locked, archived or invitable. |

## Managing a thread

| Block | What it does |
| --- | --- |
| ![rename](../media/blocks/threads_setName.png) | Renames the thread. |
| ![archive](../media/blocks/threads_setArchived.png) | Archives or unarchives it. Archived threads drop out of the channel list. |
| ![lock](../media/blocks/threads_setLocked.png) | Locks it, so only moderators can send messages. |
| ![slowmode](../media/blocks/threads_setSlowmode.png) | Sets the seconds between messages. |
| ![pin](../media/blocks/threads_pin.png) | Pins the thread in a forum channel. |
| ![unpin](../media/blocks/threads_unpin.png) | Unpins it. |
| ![join](../media/blocks/threads_join.png) | Adds the bot to the thread. |
| ![leave](../media/blocks/threads_leave.png) | Removes the bot from it. |
| ![add user](../media/blocks/threads_addUser.png) | Adds someone to the thread. |
| ![remove user](../media/blocks/threads_removeUser.png) | Removes someone. |
| ![delete](../media/blocks/threads_delete.png) | Deletes the thread and everything in it. |

## Events

For the moment a thread is created or deleted, see [Thread Actions](../Events/thread-actions.md).

## A worked example: a ticket system

1. A button with the ID `ticket_open`, in a message pinned in your support channel.
2. In `when a button is clicked`, check the ID.
3. `start a thread in the channel`, private, named after the person who clicked.
4. In the `then` part, `add user to thread` with `user of the interaction`, and send a first message explaining what to do.
5. A second button, `ticket_close`, which sets the thread to locked and then archived.
6. Reply to the original click, visible only to the user, with a link to their thread.
