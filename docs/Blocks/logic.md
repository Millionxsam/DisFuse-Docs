---
sidebar_position: 2
title: Logic
---

# Logic

Logic blocks let your bot make decisions. Almost every command you write will use at least one of them, usually to check whether something is true before acting.

<details>
  <summary>Show the whole Logic flyout</summary>

![The Logic category](media/categories/logic.png)

</details>

## Making a decision

### if / do

![The if block](media/blocks/controls_if.png)

Runs the blocks inside `do` only when the condition plugged into `if` is true.

Click the blue gear on the block to add `else if` and `else` branches:

- **else if** adds another condition, checked only if the ones above it were false.
- **else** runs when none of the conditions matched.

### Ternary

![The ternary block](media/blocks/logic_ternary.png)

`test ... if true ... if false ...` picks between two values in a single block. Use it when you want a value rather than a branch, for example choosing between the words "member" and "members".

### If null

![The nullish block](media/blocks/logic_nullishOperator.png)

`use value ... if null use ...` gives you a fallback. If the first value is missing, the second one is used instead. It is the tidiest way to handle a nickname that might not be set, or a database key that does not exist yet.

## Comparisons

![The compare block](media/blocks/logic_compare.png)

The `=` block compares two values. Use the dropdown to switch between `=`, `≠`, `<`, `≤`, `>` and `≥`.

![The exactly equals block](media/blocks/logic_equalsExactly.png)

`exactly equals` is stricter: it also requires both sides to be the same type. The text `"5"` equals the number `5`, but it does not exactly equal it. Reach for this one when you are comparing IDs or values that came out of a database.

## Combining conditions

| Block | What it does |
| --- | --- |
| ![and / or](media/blocks/logic_operation.png) | `and` is true only when both sides are true. Switch the dropdown to `or` for either side. |
| ![not](media/blocks/logic_negate.png) | Flips true into false and false into true. |
| ![true / false](media/blocks/logic_boolean.png) | A plain true or false value. |
| ![null](media/blocks/logic_null.png) | Nothing. Use it to check whether something is missing. |

## Switch statements

When you need to compare one value against many possibilities, a switch is easier to read than a stack of `else if` branches.

![The switch block](media/blocks/logic_switch.png)

Put `equals to` blocks inside it, one for each case:

![The case block](media/blocks/logic_case.png)

And optionally an `if none of the above` block at the end:

![The default block](media/blocks/logic_default.png)

:::tip
A switch is a good fit for a command router: check the name of the slash command once, then give each command its own case.
:::

## Example

A simple permission check before a moderation action:

1. `if` the member running the command **has the permission** Ban Members, ban the target.
2. `else`, reply that they cannot use this command.

The permission check comes from the [Members](Servers/members.md) category, and the reply comes from [Interactions](../Interactions/slash.md).
