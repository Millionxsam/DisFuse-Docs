---
sidebar_position: 9
title: Color
---

# Color

Colors are used for container accents, role colors, and anything you draw with the [Canvas](Apps/canvas.md) blocks.

![The Color category](media/categories/colour.png)

## The blocks

| Block | What it does |
| --- | --- |
| ![color picker](media/blocks/colour_picker.png) | A color you choose from a picker. Click the swatch to open it. |
| ![to color](media/blocks/colour_convert.png) | Turns text or a number into a color, so a hex code from a database or a slash command option can be used as one. |
| ![random color](media/blocks/colour_random.png) | A different color every time it runs. |
| ![rgb](media/blocks/colour_rgb.png) | A color built from red, green and blue values, each 0 to 100. |
| ![blend](media/blocks/colour_blend.png) | Mixes two colors. The ratio decides how much of each: 0 is all of the first, 1 is all of the second. |

## Hex codes

Discord and DisFuse both use hex codes, which look like `#5865F2`. The two characters after the `#` are red, the next two green, the last two blue, each from `00` to `FF`.

If you have a hex code as text, `to color` converts it. If you want the hex code of an existing role or member color, the [Roles](Servers/roles.md) and [Members](Servers/members.md) categories both have blocks that return one.

## Where colors are used

- **Container accent color** on a [container](Components/layout.md) component, which draws the colored bar down the left of the message.
- **Button style** is not a color block. Discord only allows five fixed button styles, so buttons use a dropdown rather than a color.
- **Role color**, when creating a role with the [Roles](Servers/roles.md) blocks.
- **Fill and stroke color** on the [Canvas](Apps/canvas.md) blocks.

:::tip
`random color` on a container accent gives a message a different feel each time it is sent, which works nicely for fun commands and badly for anything a user needs to recognize at a glance.
:::
