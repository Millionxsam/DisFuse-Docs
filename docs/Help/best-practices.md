---
sidebar_position: 5
title: Tips and Best Practices
---

# Tips and Best Practices

Habits that make a bot easier to build, easier to fix, and less likely to fall over.

## Organizing a project

**Split by feature, not by size.** One [workspace](../Guide/workspaces.md) per area: Main, Moderation, Economy, Welcome, Fun. Five to ten is comfortable.

**Put the ready event on its own.** Keep `when the bot is logged in`, the presence and the slash command registration in a workspace called Main, and nothing else.

**Name things properly.** `targetMember` beats `m`. A workspace called Moderation beats one called Workspace 2. A version called "Before the economy rewrite" beats "v4".

**Comment why, not what.** `// send a message` above a send block helps nobody. `// skip bots so the welcome never fires for another bot` earns its place. See [Comments](../Blocks/comments.md).

**Use functions.** The second time you build the same stack of blocks, turn it into a [function](../Blocks/functions.md).

## Writing commands

**Use slash commands.** Prefix commands still work, but Discord shows slash commands in a menu, validates the options for you, and hides commands somebody is not allowed to run.

**Set required permissions on the command itself.** Discord hides it from anyone who cannot use it, so they never see it. Check inside the handler too when the consequences are serious.

**Defer anything slow.** A [fetch](../Blocks/Apps/fetch.md), a loop, a database read: `defer reply` first, then `edit the bot's reply`. You have 3 seconds otherwise.

**Reply ephemerally by default.** Errors, confirmations and settings do not need to fill the channel.

**Add a cooldown to anything expensive.** See [Cooldowns](../Blocks/cooldowns.md).

## Handling failure

**Wrap anything that touches the outside world.** DMs to somebody with DMs closed, bans on somebody above the bot, a web request to a service that is down. Use a `try` block from [JavaScript](../Blocks/javascript.md) so one failure does not stop the rest.

**Check before you act.** `is member bannable by the bot?`, `channel is manageable by the bot?`, `data is set for server` and `key exists in the database` all let you fail gracefully instead of silently.

**Say something when it fails.** A command that does nothing is worse than one that says "I cannot ban somebody with a higher role than me."

## Data

**Variables are temporary, databases are not.** Anything that has to survive a restart goes in a [database](../Blocks/Databases/simple.md).

**Convert to numbers.** Values out of a database are text. `to number` before arithmetic.

**Build keys out of IDs.** `<server ID>-<user ID>` rather than a username, which can change.

**Use `add` and `subtract`.** Safer than reading, calculating and setting back, because nothing can be lost in between.

**Store several values as JSON.** Build an [object](../Blocks/objects.md), convert it to a JSON string, store it under one key.

## Working in many servers

The same bot serves every server it is added to, so nothing server-specific should be typed into a block.

- Store channel and role IDs per server in a [database](../Blocks/Databases/simple.md), or
- Let owners set them on your [website dashboard](../Features/websites.md).

Have sensible behavior before anything is configured. `has data` and `key exists` are how you check.

## Performance

**Avoid loops over Discord.** Looping over every member in a large server is slow and hits rate limits. Look things up directly where you can.

**Never send inside a big loop.** Sending one message per member is the fastest way to get rate limited.

**Cache what you fetch.** If a [fetch](../Blocks/Apps/fetch.md) result is the same for everyone, store it with a timestamp and reuse it.

**Turn on Fast block render** in [Settings > Optimization](../Features/settings.md) if the editor feels slow with a large project.

## Security

**Never type a token or key into a block.** Use [secrets](../Guide/secrets.md).

**Never share the exported ZIP.** It contains your real token and every secret value.

**Check before making a project public.** Anything sensitive typed directly into a block is about to be visible to everyone.

**Ask for the permissions you need and no more.** A bot requesting Administrator will be turned away, and it is a real risk if the token leaks.

**Limit destructive commands.** Anything that deletes or bans should check permissions, and probably ask for confirmation with a [button](../Blocks/Components/buttons.md).

## Before you publish a bot

1. Test every command in a server you own.
2. Test what happens when somebody gives bad input, or none.
3. Test what happens when the bot lacks a permission.
4. Check the bot has something sensible to say in a server that has configured nothing.
5. Take a [version](../Guide/version-control.md) so you can get back to this exact state.
6. Export, upload, and watch the console through the first few commands.

## While it is running

- Watch [Insights](../Features/insights.md) for errors, restarts and commands nobody uses.
- Keep a version matching what is on your host.
- Re-export after every change. There is no automatic deployment.
- Read your host's console after each update. A bot that starts can still fail on the first command.
