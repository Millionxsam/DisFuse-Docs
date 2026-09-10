---
sidebar_position: 10
title: Project Settings
---

# Project Settings

Everything about a project that is not blocks: the bot token, the description, who can see it, and the permissions in its invite link.

## Opening the settings

Two ways:

- The pencil icon next to the project name in the editor toolbar.
- The **Edit** button on your project's page in the dashboard.

![The project settings page](../Features/media/project-edit.png)

Only the project owner can open this page.

## Bot information

At the top is your bot's name, avatar and ID, as DisFuse last saw them.

If you renamed your bot or changed its avatar in the Discord Developer Portal, click the sync link to pull the new details across.

## Bot Token

Your bot token lives here, not in a block. DisFuse uses it to look your bot up, and writes it into the `.env` file when you export.

Paste a new one here if you ever reset it in the Discord Developer Portal. A project with an out-of-date token exports a bot that cannot log in.

:::warning
Your token is never sent to collaborators, and it never appears in your blocks. But it **is** in the exported ZIP. Do not share that file.
:::

## Description

What people see on your project page and on the Explore listing. Optional, and worth writing if your project is public.

## Project Visibility

| Setting | Effect |
| --- | --- |
| **Public** | The project appears on Explore. Anyone can read its blocks, like it, comment on it, favorite it and clone it. |
| **Private** | Only you and your [collaborators](collaboration.md) can see it at all. |

Secrets and the bot token are never visible, whichever you choose.

## Bot Visibility

| Setting | Effect |
| --- | --- |
| **Public** | Your bot appears on Explore with an "Add Bot" button, so anyone can invite it to their server. |
| **Private** | Nobody can see your bot's details or add it from DisFuse. |

The two visibility settings are independent, which gives you four combinations:

<details>
  <summary>What each combination means</summary>

**Public project, private bot.** People can find and read your project, including the blocks, but cannot see your bot's details or add it anywhere. Good for sharing code.

**Private project, public bot.** Your blocks stay yours, but anyone can look your bot up and add it to their server. Good for a finished bot you want people to use.

**Both public.** Everything is visible: the blocks, the bot, and the invite button.

**Both private.** Nothing is visible to anyone but you and your collaborators.

</details>

## Permissions

The permissions number used when somebody adds your bot from DisFuse.

Go to [discordapi.com/permissions.html](https://discordapi.com/permissions.html), tick the permissions your bot actually needs, and paste the number it shows at the top.

:::tip
Ask for the least you need. A bot requesting Administrator will be refused by careful server owners, and it is a real risk if your token ever leaks.
:::

## Your project page

Clicking the project name in the editor takes you to its page, which is what other people see.

![A project page](../Features/media/project-page.png)

From there you can open the editor, add the bot, visit its [website](../Features/websites.md) if it has one, and see its likes, clones and comments.

## Cloning and deleting

Both live on the project page rather than in settings.

- **Clone** makes a copy of a project in your own account, blocks included. Secrets are never copied.
- **Delete** removes a project permanently. Its blocks, its versions and its Insights history all go with it.

:::danger
Deleting a project cannot be undone. Export it first if there is any chance you will want it back.
:::
