---
sidebar_position: 4
title: Hosting Your Bot
---

# Hosting Your Bot

DisFuse writes your bot's code. A host runs it. This page goes deeper than [Running your bot](../Guide/running-your-bot.md) on choosing one and keeping it working.

## What a host has to provide

| Requirement | Why |
| --- | --- |
| **Node.js 18 or newer** | The generated code uses features older versions do not have. |
| **Stays running** | A bot that is asleep is a bot that is offline. |
| **Persistent files** | Only if you use the [Databases](../Blocks/Databases/simple.md) or [Files](../Blocks/files.md) blocks. |
| **Environment variables** | Either it reads your `.env`, or it has its own panel for them. |
| **A readable console** | You will need it the first time something goes wrong. |

## Free hosts

Fine for testing and small bots, with limits worth knowing before you rely on them.

> [wispbyte.com](https://wispbyte.com)
>
> [solarhosting.cc](https://solarhosting.cc)
>
> [fps.ms](https://fps.ms)
>
> [discloud.com](https://discloud.com)

Common limits on free plans:

- **Sleeping.** Some stop your bot when nothing is happening. It comes back when poked, which is no use for a Discord bot that has to hold a connection.
- **Wiped storage.** Files are reset on restart, so your database vanishes.
- **Memory caps.** A bot in many servers uses more memory than you would expect.
- **Queues.** You may wait for a free slot at busy times.

## Paid hosts

Once people rely on your bot, the few dollars a month is worth it.

> [wispbyte.com](https://wispbyte.com) (paid plans)
>
> [replit.com](https://replit.com)
>
> [heroku.com](https://heroku.com)
>
> Any VPS provider, if you are happy with a terminal

A **VPS** is a small server you control. It is the cheapest way to run several bots at once, and the only option that asks you to know some Linux.

## Running it on your own computer

You can. Open a terminal in your bot's folder and run:

```bash
npm install
```

then:

```bash
node index.js
```

Your bot is online for as long as that window stays open and your computer stays awake. Fine for testing, and not a way to run a bot other people use.

## Setting environment variables

The exported ZIP includes a `.env` file with your bot token and every [secret](../Guide/secrets.md).

Some hosts read it automatically. Others ignore it and want the values entered in their own panel. If your bot starts but the token is missing, that is the reason.

The `.env` looks like this:

```
token=your-bot-token
WEATHER_API_KEY=abc123
```

Copy each name and value into your host's environment variable settings, exactly as written.

:::danger
The `.env` file is your bot token in plain text. Never put the exported ZIP in a public GitHub repository, and never share it. If it does leak, reset the token in the Discord Developer Portal immediately, then paste the new one into [project settings](../Guide/project-settings.md) and re-export.
:::

## Updating your bot

There is no automatic deployment. Every change means:

1. Export from DisFuse.
2. Unzip.
3. Upload the files to your host, replacing the old ones.
4. Restart.

If you keep secrets in your host's panel rather than the `.env`, you can skip uploading the `.env` each time.

:::tip
Keep a [version](../Guide/version-control.md) that matches whatever is on your host. When an update goes wrong, you know exactly what to export to get back.
:::

## Keeping data safe

If your bot stores anything with the [Databases](../Blocks/Databases/simple.md) or [Files](../Blocks/files.md) blocks, that data lives on the host, not in DisFuse.

- **Check your host keeps files between restarts** before you rely on it.
- **Download the database file occasionally.** Most hosts have a file manager.
- **Do not overwrite it when you update.** Upload the new `index.js` and `package.json`, and leave the data files alone.

## Watching for problems

- **The console** is the first place to look when anything is wrong.
- **[Insights](../Features/insights.md)** shows what your bot is doing across every server, including errors and restarts, without reading logs.
- **A heartbeat command.** A `/ping` built from the [Main](../Blocks/main.md) blocks tells you at a glance whether the bot is alive and how well it is connected.

## Running one bot in many servers

The same bot instance serves every server it is added to. You do not run a copy per server.

That has one consequence worth planning for: anything server-specific, such as a welcome channel or a mod role, has to be **looked up per server** rather than typed into a block. Store it in a [database](../Blocks/Databases/simple.md) keyed by server ID, or let people set it on your [website dashboard](../Features/websites.md).

## Getting help

Every host is different, and their support channels know their own product best. For DisFuse-specific questions, [join the DisFuse Discord server](https://dsc.gg/disfuse) and say which host you are on. Somebody there has almost certainly used it.
