---
sidebar_position: 6
title: Glossary
---

# Glossary

The words used across these docs, and what they mean in DisFuse.

## DisFuse

**Backpack.** The pocket in the top right of the canvas. Drag a block into it to keep a copy, and drag it out in any other project.

**Block.** One piece you drag from the toolbox. Every feature your bot has is built from them.

**Block pack.** A set of custom blocks somebody built in the [Workshop](../Features/workshop.md) and shared.

**BlockBuddy.** The assistant that builds blocks from a description you type.

**Canvas.** The area in the middle of the editor where your blocks live.

**Category.** A group of blocks in the toolbox, such as Logic or Messages. Each one has a page in the [Blocks](../Blocks/using-blocks.md) section.

**Clone.** A copy of somebody's public project in your own account. Blocks are copied; secrets and the bot token are not.

**Collaborator.** Somebody invited to edit your project. See [Collaboration](../Guide/collaboration.md).

**Companion block.** A block that only works inside a particular event, such as `member that joined` inside `when a member joins a server`.

**Export.** Downloading your project as a ZIP of runnable JavaScript.

**Flyout.** The panel that slides out when you click a toolbox category.

**Hat block.** A block with a curved top that starts a stack, usually an event.

**Project.** One bot, and all the blocks that make it work.

**Secret.** A value stored with your project and kept out of your blocks, such as an API key. See [Secrets](../Guide/secrets.md).

**Shadow block.** The grayed-out placeholder sitting in an empty hole. It shows what kind of value belongs there and disappears when you plug something in.

**Toolbox.** The column of categories down the left of the editor.

**Version.** A snapshot of your whole project. See [Version Control](../Guide/version-control.md).

**Workspace.** A tab inside a project, with its own canvas. See [Workspaces](../Guide/workspaces.md).

**Workshop.** Where block packs are built and shared.

## Discord

**Application.** What you create in the Discord Developer Portal. A bot is part of one.

**Attachment.** A file sent with a message.

**Component.** Anything in a message that is not plain content: text displays, containers, sections, images, buttons and menus. See [Components](../Blocks/Components/components.md).

**Context menu.** An action your bot adds to Discord's right-click menu. See [Context Menus](../Interactions/contextmenu.md).

**Custom ID.** The identifier you give a button, menu or modal so your code recognizes it when it comes back.

**Developer Mode.** A Discord setting that adds "Copy ID" to right-click menus.

**Ephemeral.** A reply only the person who triggered it can see. In DisFuse this is the **visible only to the user** option.

**Guild.** Discord's own word for a server. The two mean the same thing.

**ID.** The number identifying a server, channel, role, user or message. It never changes.

**Intent.** Permission to receive a kind of event from Discord, granted in the Developer Portal. See [Discord Basics](discord-basics.md).

**Interaction.** Discord telling your bot that somebody ran a command, clicked a button, chose from a menu, or submitted a form. See [Interactions](../Interactions/interactions.md).

**Member.** A user inside one specific server, with a nickname, roles and a join date.

**Modal.** A pop-up form. See [Modals](../Interactions/modals.md).

**Rate limit.** Discord's cap on how often a bot may act.

**Role hierarchy.** The order of roles in a server. A bot can only act on roles and members below its own highest role.

**Slash command.** A command people run by typing `/`. See [Slash Commands](../Interactions/slash.md).

**Snowflake.** The technical name for a Discord ID.

**Thread.** A temporary side conversation inside a channel. See [Threads](../Blocks/Messages/threads.md).

**Token.** The secret that lets a program act as your bot. Treat it like a password.

**User.** A Discord account, the same everywhere.

**Webhook.** A URL that posts into a channel under any name and avatar. See [Webhooks](../Blocks/Servers/webhooks.md).

## Programming

**Array.** A list of values in order. See [Lists](../Blocks/lists.md).

**Boolean.** True or false.

**Cooldown.** A wait before somebody may use a command again. See [Cooldowns](../Blocks/cooldowns.md).

**Function.** A named group of blocks you can run from anywhere. See [Functions](../Blocks/functions.md).

**JSON.** Text that describes an object. How objects are stored and sent. See [Objects](../Blocks/objects.md).

**Key.** The name a value is stored under, in an object or a database.

**Object.** A collection of named values. See [Objects](../Blocks/objects.md).

**Regular expression.** A pattern describing a shape of text. See [Text](../Blocks/text.md).

**String.** A piece of text.

**Timestamp.** A point in time as a number of milliseconds since the start of 1970.

**Variable.** A named box holding a value. Cleared when the bot restarts. See [Variables](../Blocks/variables.md).
