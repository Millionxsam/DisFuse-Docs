---
sidebar_position: 1
title: FAQ
---

# Frequently Asked Questions

## Getting started

### Do I need to know how to code?

No. That is the point of DisFuse. You will pick up some ideas along the way, because programming concepts like conditions and loops still apply, but you never write JavaScript unless you want to.

### Is DisFuse free?

The editor is free, with unlimited projects, unlimited blocks and unlimited exports. [DisFuse Premium](../Features/premium.md) adds Insights, Control, Websites and Version Control.

### Does DisFuse host my bot?

No. DisFuse builds your bot's code; you download it and run it somewhere. See [Running your bot](../Guide/running-your-bot.md) for a list of hosts.

### Can I use DisFuse on a phone or tablet?

The dashboard works. The block editor is difficult on a small screen, because dragging blocks needs room. A laptop or desktop is much better.

## Projects

### Can one project have more than one bot?

No. One project is one bot. Make a second project for a second bot.

### Can one bot have several projects?

Technically yes, but you would then have to run both exports separately with the same token, and Discord will not allow two connections from one bot. Use [workspaces](../Guide/workspaces.md) to split one project up instead.

### Can I work with other people?

Yes. Click **Invite** in the editor. See [Collaboration](../Guide/collaboration.md).

### What happens if I delete a project?

It is gone, along with its blocks, its versions and its Insights history. There is no undo. Export it first if you might want it back.

## Blocks

### Why will this block not connect?

The shapes do not match, or the types do not. A value block only fits in a hole; an action block only stacks. And a hole that wants a `member` will not take a `channel`. See [Using blocks](../Blocks/using-blocks.md).

### What is the difference between a member and a user?

A **user** is a Discord account. A **member** is that account inside one server, with a nickname, roles and a join date. Anything that bans, kicks or changes roles needs a member. See [Members](../Blocks/Servers/members.md).

### How do I store data between restarts?

With the [Databases](../Blocks/Databases/simple.md) blocks. [Variables](../Blocks/variables.md) live in memory and are cleared when the bot restarts.

### My numbers are joining instead of adding

Values from a database or a text option are text, so `"5" + "5"` is `"55"`. Wrap them in `to number` from [Math](../Blocks/math.md).

### How do I make a prefix command like `!ban`?

Use `when a message is received from a human` from [Message](../Blocks/Messages/message.md), check the content starts with your prefix, and split the rest with the [Text](../Blocks/text.md) blocks.

Slash commands are better in almost every way, and Discord pushes bots toward them. Use prefix commands only if you have a specific reason.

## Commands

### My slash command does not appear

Global commands can take up to an hour. Put your server's ID in the test guild field while you are building and they appear immediately. See [Slash Commands](../Interactions/slash.md).

### "This interaction failed"

Your bot did not reply within 3 seconds. Use `defer reply` first, then `edit the bot's reply`. See [Interactions](../Interactions/interactions.md).

### How do I make a reply only the person can see?

Turn on **visible only to the user** on the reply block.

## Running the bot

### My bot is offline

Check your host's console. The error is usually in the first few lines. See [Troubleshooting](troubleshooting.md).

### Do I have to re-export after every change?

Yes. The export is a snapshot. Change your blocks and your host is still running the old code until you upload a new one.

### Where do I put my bot token?

In [project settings](../Guide/project-settings.md). There is no token block any more.

### Can somebody steal my bot from a public project?

No. Your bot token and your [secrets](../Guide/secrets.md) are never public, whatever your project visibility is. People can read your blocks, not your credentials.

## Premium

### Does Premium apply to all my bots?

Yes. It is on your account, so every project you own gets it.

### What happens if I cancel?

Nothing is deleted. Your versions stay readable, your websites stay published, and your blocks are untouched. You just cannot create new versions, edit websites, or open Insights and Control. See [Premium](../Features/premium.md).

## Still stuck?

[Join the DisFuse Discord server](https://dsc.gg/disfuse) and post in the support channel. Include a screenshot of your blocks, what you expected, and what actually happened.
