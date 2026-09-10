---
sidebar_position: 2
title: Message
---

# Message

Everything you do with a single message: catch it when it arrives, read it, reply, edit, delete, pin and react.

<details>
  <summary>Show the whole Message flyout</summary>

![The Message subcategory](../media/categories/messages-message.png)

</details>

## Catching a message

![When a message is received](../media/blocks/msg_received.png)

`when a message is received` fires for every message in every channel your bot can see, including messages from other bots and from your own bot.

![When a message is received from a human](../media/blocks/message_author_not_bot.png)

`when a message is received from a human` is the same event with bot messages filtered out. Use this one unless you specifically want to react to bots. It saves you an `if` and prevents the classic loop where your bot replies to itself forever.

![Message received](../media/blocks/msg_msg.png)

Inside either event, `message received` is the message itself.

## Reading a message

![Message property](../media/blocks/message_property.png)

One block with a dropdown covers the common properties: **content**, **author (user)** and **channel**.

| Block | Returns |
| --- | --- |
| ![is reply](../media/blocks/msg_isReply.png) | True when the message is a reply to another. |
| ![reply to](../media/blocks/msg_replyTo.png) | The message it replied to. |
| ![reply ping](../media/blocks/msg_replyPing.png) | Whether the reply pinged the person being replied to. |

## Getting a specific message

![Get message by ID](../media/blocks/msg_getone.png)

`get the message with id equal to ... on the channel ...` fetches a message you know the ID of. Enable Developer Mode in Discord to copy a message ID from the right-click menu.

To fetch several at once, use `get last ... messages of channel` from [Channels](../Servers/channels.md).

## Sending and editing

| Block | What it does |
| --- | --- |
| ![reply to message](../media/blocks/cv2_replyMsg.png) | Replies to the message, in the same channel. |
| ![edit message](../media/blocks/cv2_editMsg.png) | Replaces the components of a message the bot sent. |
| ![message sent by the bot](../media/blocks/misc_messageSent.png) | The message that was just sent. Use it right after a send or reply block. |

Both take a **components** input. See [Components](../Components/components.md) for what goes in it.

:::info
A bot can only edit its own messages. Discord does not allow anything else.
:::

## Deleting

![Delete message](../media/blocks/msg_deleteOther.png)

`delete message` removes it. The bot needs the Manage Messages permission unless the message is its own.

To clear a lot at once, use `delete the last ... messages on channel` from [Channels](../Servers/channels.md).

## Pinning

| Block | What it does |
| --- | --- |
| ![pin](../media/blocks/msg_pin.png) | Pins the message. |
| ![unpin](../media/blocks/msg_unpin.png) | Unpins it. |

A channel can hold 50 pinned messages.

## Reactions

![React to message](../media/blocks/msg_react.png)

`react to message ... with emoji` adds a reaction. Use a standard emoji directly, or the name of a custom emoji from the server.

### Reading reactions

![Reaction property](../media/blocks/msg_reaction_property.png)

`get users of reaction ... with emoji` gives you a list of everyone who reacted with a specific emoji. The dropdown also offers the count.

![For each reaction](../media/blocks/msg_get_reactions.png)

`for each reaction in ...` loops over every reaction on the message. Inside the loop:

| Block | Returns |
| --- | --- |
| ![reaction emoji](../media/blocks/msg_reaction_emoji.png) | The emoji of the current reaction. |
| ![reaction count](../media/blocks/msg_reaction_count.png) | How many people used it. |
| ![reaction users](../media/blocks/msg_reaction_users.png) | The members who used it. |

For the event that fires the moment somebody reacts, see [Message Actions](../Events/message-actions.md).

## A worked example: a starboard

1. `when a reaction is added to a message` from [Message Actions](../Events/message-actions.md).
2. Check the emoji is ⭐ and the count is at least 3.
3. Build a message with a container, the original text, and a link back.
4. `send message in channel` into your starboard channel.
5. Store the original message ID in a [database](../Databases/simple.md) so you never post the same message twice.
