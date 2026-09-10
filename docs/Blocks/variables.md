---
sidebar_position: 10
title: Variables
---

# Variables

A variable is a named box you put a value in, so you can use it again later. Anything you calculate once and need twice belongs in one.

![The Variables category](media/categories/variables.png)

## Creating a variable

The Variables category is empty until you make your first variable. Click **Create variable...**, give it a name, and three blocks appear:

- `set <name> to ...` puts a value in the box.
- `change <name> by ...` adds a number to whatever is already there.
- `<name>` on its own reads the value out.

Drag the `set` block into your code, plug a value into it, and then use the plain `<name>` block anywhere you want that value.

## Naming

Give variables names that say what they hold. `targetMember` is easier to work with a month later than `m`. Names cannot contain spaces at the start or end, and every variable in a workspace must have a unique name.

To rename or delete a variable, right-click any of its blocks and choose the option from the menu. Renaming updates every block that uses it.

## Scope

A variable belongs to the workspace it was created in. Two workspaces in the same project can both have a variable called `count`, and they are separate boxes.

A variable set inside an event block is still there after the event finishes, so a variable is not a good way to hold something for one command only. If you need a value to survive a restart, put it in a [database](Databases/simple.md) instead.

:::warning
Variables live in your bot's memory. When the bot restarts, every variable goes back to being empty. Balances, levels, warnings and settings all need a database.
:::

## Loop variables

Blocks that loop create their own variable for the current item, and it is filled in for you. `for each item in list` gives you `i`, `for each member in server` gives you `current member in loop`, and so on. You do not need to create those yourself.

## Example

Working out a level from an XP total, once, and using it three times:

1. `set level to` the result of your calculation.
2. Use `level` in the reply text.
3. Use `level` again in an `if` that checks whether a role should be given.
4. Use `level` again when writing the new value to the database.
