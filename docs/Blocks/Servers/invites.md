---
sidebar_position: 5
title: Invites
---

# Invites

Invite blocks create, read and delete invite links, and they let you tell which invite somebody joined with.

<details>
  <summary>Show the whole Invites flyout</summary>

![The Invites subcategory](../media/categories/servers-invites.png)

</details>

## Creating and deleting

![Create invite](../media/blocks/invite_create.png)

`create invite for channel ... amount of uses ...` makes a new invite and returns it. Set uses to 0 for an unlimited invite.

![Delete invite](../media/blocks/invite_delete.png)

`delete invite` revokes it. Anyone holding the link can no longer use it.

## Getting an invite

![Get invite](../media/blocks/invite_get.png)

`get invite with URL` looks one up from its link or code. It works for invites to other servers too, which is how invite filters check what a posted link points at.

## Reading an invite

| Block | Returns |
| --- | --- |
| ![url](../media/blocks/invite_url.png) | The full invite link. |
| ![channel](../media/blocks/invite_channel.png) | The channel it leads to. |
| ![author](../media/blocks/invite_author.png) | Who created it. |
| ![created](../media/blocks/invite_created.png) | When it was created. |
| ![expiration](../media/blocks/invite_expiration.png) | When it expires. |
| ![temporary](../media/blocks/invite_temporary.png) | Whether it grants temporary membership. |
| ![uses](../media/blocks/invite_uses.png) | How many times it has been used. |

## Loops

| Block | What it does |
| --- | --- |
| ![for each invite on server](../media/blocks/invite_foreach.png) | Loops over every invite in a server. |
| ![for each invite on channel](../media/blocks/invite_channel_foreach.png) | Loops over the invites for one channel. |
| ![current invite](../media/blocks/invite_foreach_var.png) | The invite being handled. |

## Events

| Block | Fires when |
| --- | --- |
| ![invite created](../media/blocks/invite_invitecreated.png) | Somebody creates an invite. |
| ![invite deleted](../media/blocks/invite_invitedeleted.png) | An invite is revoked or runs out. |
| ![the invite](../media/blocks/invite_event_var.png) | The invite involved, inside either event. |

## Invite tracking

The `when a member joins a server` event in [Server Actions](../Events/server-actions.md) has an `invite the member joined with` block, so you do not need to compare use counts yourself.

An invite leaderboard is then:

1. `when a member joins a server`.
2. `get author of invite <invite the member joined with>`.
3. `add 1 to <that user's ID>` in a [database](../Databases/simple.md).

:::info
Invite tracking needs the **Manage Server** permission. Without it the bot cannot see the invite list, and the invite block comes back empty.
:::

## A worked example: blocking other servers' invites

1. `when a message is received from a human`.
2. Use a `test regexp` block from [Text](../text.md) with a pattern matching `discord.gg/`.
3. If it matches, `delete message` and reply with a warning.
4. To allow your own invites through, use `get invite with URL` and compare its server ID with the current one before deleting.
