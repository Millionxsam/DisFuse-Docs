---
sidebar_position: 6
title: Thread Actions
---

# Thread Actions

Two events, for threads appearing and disappearing.

![The Thread Actions subcategory](../media/categories/events-thread-actions.png)

## When a thread is created

![Thread created](../media/blocks/events_thread_created.png)

| Companion block | Returns |
| --- | --- |
| ![created thread](../media/blocks/events_thread_created_thread.png) | The new thread. |
| ![parent channel](../media/blocks/events_thread_created_parent.png) | The channel it was created in. |

Fires for threads anyone creates, including forum posts, which are threads in a forum channel.

Common uses:

- **Auto-join.** Have the bot `join thread` so it receives messages in it.
- **Forum posts.** Send a first reply with the rules of the forum, or apply a tag.
- **Support threads.** Ping the support role when a thread appears in a specific channel.

## When a thread is deleted

![Thread deleted](../media/blocks/events_thread_deleted.png)

![Deleted thread](../media/blocks/events_thread_deleted_thread.png)

`deleted thread` is the thread that was removed. Use it to clean up anything you stored against its ID.

Note that archiving is not deleting. An archived thread still exists and does not fire this event. To notice archiving, poll `is thread ... archived?` from [Threads](../Messages/threads.md), or use the [Custom](custom.md) event block with `threadUpdate`.

## A worked example: forum welcome posts

1. `when a thread is created`.
2. Check that `name of channel <parent channel>` is your support forum.
3. `join thread` so the bot can see replies.
4. `send message in channel <created thread>` with a container explaining what information to include and a button that closes the post.
