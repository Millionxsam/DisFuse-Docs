---
sidebar_position: 7
title: Webhooks
---

# Webhooks

A webhook posts a message into a channel under any name and avatar you like. It is how a bot can appear as several different characters, and how logging integrations post without needing a bot at all.

<details>
  <summary>Show the whole Webhooks flyout</summary>

![The Webhooks subcategory](../media/categories/servers-webhooks.png)

</details>

## Creating a webhook

![Create a webhook](../media/blocks/webhooks_create.png)

`create a webhook with the name ...` makes one in a channel. Blocks in the `then` part run once it exists.

![Created webhook](../media/blocks/webhooks_createdWebhook.png)

`created webhook` is the new webhook. Send with it, or store its ID and token so you can use it again later.

## Getting an existing webhook

![Fetch webhook](../media/blocks/webhooks_fetch.png)

`get webhook with ID ... and token ...` fetches one you saved earlier. Both parts are needed.

## Sending

![Send as webhook](../media/blocks/webhooks_send.png)

`send a message as webhook` posts into the webhook's channel. The message appears under the webhook's name and avatar rather than your bot's.

## Reading a webhook

| Block | Returns |
| --- | --- |
| ![name](../media/blocks/webhooks_name.png) | The webhook's display name. |
| ![id](../media/blocks/webhooks_id.png) | Its ID. |
| ![owner](../media/blocks/webhooks_owner.png) | The user who created it. |
| ![created at](../media/blocks/webhooks_createdAt.png) | When it was created. |

![Webhook token](../media/blocks/webhooks_token.png)

`token of webhook` returns the secret half of the webhook.

:::danger
A webhook token lets anyone who has it post into that channel, forever, with no bot and no permissions. Treat it exactly like your bot token: never print it in a message, never write it into a public project, and store it as a [secret](../../Guide/secrets.md) if you need to keep it.
:::

## Managing

| Block | What it does |
| --- | --- |
| ![edit](../media/blocks/webhooks_edit.png) | Changes the webhook's name and avatar. |
| ![delete](../media/blocks/webhooks_delete.png) | Deletes it. Anything holding the token can no longer post. |

## When to use a webhook instead of the bot

- **Impersonating a user**, for example a message proxy or a roleplay bot where each character has its own name and avatar.
- **Logging**, where a distinct name makes the source obvious at a glance.
- **Posting without the bot online**, since a webhook is a URL and does not need your bot running.

For everything else, `send message in channel` from [Channels](channels.md) is simpler. Webhook messages cannot be edited by your bot the way its own messages can, and they cannot carry interaction components your bot answers.

## Notes

- A channel can hold up to 15 webhooks.
- Creating and reading webhooks needs the **Manage Webhooks** permission.
- If a webhook is deleted in Discord, blocks using it stop working. Wrap them in a `try` block from [JavaScript](../javascript.md).
