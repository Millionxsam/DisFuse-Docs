---
sidebar_position: 5
title: Math
---

# Math

Math blocks do arithmetic and work with numbers. Economy bots, leveling systems and anything that counts will lean on this category.

<details>
  <summary>Show the whole Math flyout</summary>

![The Math category](media/categories/math.png)

</details>

## Numbers and arithmetic

| Block | What it does |
| --- | --- |
| ![number](media/blocks/math_number.png) | A plain number. Type into the box. |
| ![to number](media/blocks/math_toNumber.png) | Converts text into a number. Use it on anything that came from a database or a slash command option. |
| ![arithmetic](media/blocks/math_arithmetic.png) | Add, subtract, multiply, divide, or raise to a power. |
| ![remainder](media/blocks/math_modulo.png) | The remainder after dividing. `10 mod 3` is 1. |
| ![round](media/blocks/math_round.png) | Round, round up, or round down. |

:::warning
Values that come back from a database or from a text option are text, even when they look like numbers. Adding `"5"` to `"5"` gives `"55"`, not `10`. Wrap them in `to number` first.
:::

## Random numbers

| Block | What it does |
| --- | --- |
| ![random integer](media/blocks/math_random_int.png) | A whole number between two values, both included. |
| ![random fraction](media/blocks/math_random_float.png) | A number between 0 and 1. |

`random integer from 1 to 100` is the block behind most dice, giveaways and loot drops.

## Working with lists of numbers

![Math on list](media/blocks/math_on_list.png)

`sum of list` adds every number in a list together. The dropdown also offers minimum, maximum, average, median, modes, standard deviation and a random item.

## Checks and limits

| Block | What it does |
| --- | --- |
| ![number property](media/blocks/math_number_property.png) | True when a number is even, odd, prime, whole, positive, negative, or divisible by another number. |
| ![constrain](media/blocks/math_constrain.png) | Clamps a number so it never goes below the low value or above the high one. |

`constrain` is useful for keeping a balance from going negative, or keeping a page number inside the range that actually exists.

## Advanced math

| Block | What it does |
| --- | --- |
| ![single](media/blocks/math_single.png) | Square root, absolute value, negation, natural log, log 10, e^, and 10^. |
| ![trig](media/blocks/math_trig.png) | sin, cos, tan, and their inverses. |
| ![constant](media/blocks/math_constant.png) | π, e, φ, √2, √½ and infinity. |
| ![atan2](media/blocks/math_atan2.png) | The angle from the origin to a point. |

These come into their own with the [Canvas](Apps/canvas.md) blocks, where you might be placing things around a circle.
