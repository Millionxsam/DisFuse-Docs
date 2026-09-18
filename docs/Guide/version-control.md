---
sidebar_position: 9
title: Version Control
---

# Version Control

A version is a snapshot of your whole project: every workspace, exactly as it was. You can switch between versions, work on one without touching the others, and come back to a version that worked when a change goes wrong.

:::info
Version Control is free, with up to 3 versions per project. [DisFuse Premium](../Features/premium.md) raises that to 25. It is optional: a project works without versions until you create the first one.
:::

## Opening it

Click **Versions** in the editor toolbar. Before you have any, the button says "Versions"; once you do, it shows the name of the one you are editing.

![The Version Control panel](../Features/media/editor-version-control.png)

## Creating your first version

Click **Create first version**. DisFuse copies your project exactly as it is into Version 1, and from then on the project reads and writes through versions rather than through its own workspaces.

Nothing is lost and nothing changes about how you work. The tab bar, autosave and collaboration all behave the same.

## Creating more

Click **New Version**. You choose where its blocks come from:

| Source | What you get |
| --- | --- |
| **A copy of an existing version** | Everything that version has, as a starting point. |
| **Blank** | No workspaces at all, to build something from scratch. |

Copying is the usual choice. It gives you a safe place to try a rewrite while the version people are actually running stays untouched.

A project can hold up to 3 versions on a free account, or 25 with [DisFuse Premium](../Features/premium.md). The limit follows the project owner's plan. If you reach it, delete a version to make room for a new one.

If a Premium subscription ends, a project that already has more than 3 versions keeps all of them. You just cannot create new ones until it has fewer than 3.

## Switching

Click **Switch** on any version. The editor reloads with that version's workspaces, and DisFuse keeps you on the same tab where it can.

The version you are editing is marked **Active**, and its name shows in the toolbar so you always know which one you are changing.

## Renaming and deleting

The pencil renames a version. Names are for you: "Before the economy rewrite" is more useful than "Version 4".

The bin deletes one.

:::warning
Deleting a version deletes its blocks. Nothing else is affected, but that version is gone.

Deleting **every** version puts the project back to having no versions at all, and starts it fresh and empty. Do not delete your last version unless you mean to start over.
:::

## Nothing is shared between versions

Every version holds its own copy of every workspace. Editing Version 2 can never change Version 1. That is the whole point, and it is why a version is safe to experiment in.

Secrets, the bot token, collaborators and project settings belong to the **project**, so they are the same whichever version you are in.

## Exporting a specific version

The export dialog lets you pick which version to export.

![The export dialog](../Features/media/editor-export.png)

This is how you keep a stable version running while building the next one: export the stable one for your host, and keep editing the other.

## How to use it well

- **Take a version before a big change.** Rewriting your economy? Copy the current version first, name it after what it was, and work in the new one.
- **Keep one known-good version.** Whatever you have running on your host, keep a version that matches it, so you can always get back to what works.
- **Name them after what changed**, not when. "Added tickets" tells you more than "v3".
- **Delete versions you will not go back to.** Versions count towards your limit, and a list of forgotten snapshots is not useful.

## Collaborators and versions

Collaborators can read every version, switch between them, and edit whichever is active. Only the owner can create, rename or delete one.
