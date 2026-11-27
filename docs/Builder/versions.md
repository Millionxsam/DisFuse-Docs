---
sidebar_position: 9.5
title: Versions
---

# Versions

A version is a snapshot of your whole bot: every command, event and variable, exactly as it was. You can switch between versions, work on one without touching the others, and go back to a version that worked when a change goes wrong.

:::info
Versions are free, with up to 3 per project. [DisFuse Premium](../Features/premium.md) raises that to 25. They're optional: a project works without versions until you create the first one.
:::

Open **Versions** from the project's dashboard. Once a project has versions, the one you're editing also shows at the top of every page. Click it to get back to Versions.

## Creating your first version

Click **Create first version**. DisFuse copies your bot exactly as it is into Version 1, and from then on the project saves into versions.

Nothing else changes about how you work. Commands, events, autosave and collaborators all work the same.

## Creating more

Click **New version** and choose where it starts from:

| Start from | What you get |
| --- | --- |
| **A copy of a version** | Everything that version has, as a starting point. The newest version is picked for you. |
| **An empty version** | No commands, events or variables, to build something from scratch. |

Copying is the usual choice. It gives you a safe place to try a big change while the version people are using stays exactly as it is. Give it a name, or leave the name empty to call it by its number.

A project can keep up to 3 versions on a free account, or 25 with [DisFuse Premium](../Features/premium.md). The limit follows the project owner's plan. When you reach it, delete a version to make room for a new one.

If a Premium subscription ends, a project that already has more than 3 versions keeps all of them. You can still open, change, rename, switch between, export and delete them. You just can't make new ones until it has fewer than 3.

## Switching

Click **Switch** on any version. Anything still saving goes into the version you're leaving first, then the builder opens the other one.

The version you're editing is marked **Editing**. Switching only moves you: other people on the project can keep working in another version at the same time.

## Renaming and deleting

The pencil renames a version. Its number and everything in it stay the same. Names are for you: "Before the economy rewrite" is more useful than "Version 4".

The bin deletes one.

:::warning
Deleting a version deletes every command, event and variable in it. Nothing else is affected, but that version is gone.

Deleting your **last** version turns versions off for the project and starts it again **empty**. Don't delete your last version unless you mean to start over.
:::

## Nothing is shared between versions

Every version holds its own copy of your commands, events and variables. Changing Version 2 can never change Version 1.

[Secrets](../Guide/secrets.md), the bot token, [collaborators](collaborators.md) and the project's settings belong to the **project**, so they're the same in every version.

## Exporting a version

Click the ZIP button on a version to [export](exporting.md) it, or pick the version in the export dialog. You can export any version, not only the one you're editing.

This is how you keep a stable version running while you build the next one: export the stable one for your host, and keep working in the other.

## Collaborators and versions

Collaborators can see every version, switch between them, and change the one they're on, as far as [their permissions](collaborators.md#permissions) go. Only the owner can create, rename or delete a version.

## How to use it well

- **Make a version before a big change.** Copy the current version, name it after what it was, and work in the new one.
- **Keep one known-good version.** Whatever you have running, keep a version that matches it.
- **Name versions after what changed**, not when. "Added tickets" tells you more than "v3".
- **Delete versions you won't go back to.** They count towards your limit.
