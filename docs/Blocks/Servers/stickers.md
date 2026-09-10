---
sidebar_position: 9
title: Stickers
---

# Stickers

Stickers are the larger images people send from the sticker picker. These blocks read a server's stickers and manage them.

<details>
  <summary>Show the whole Stickers flyout</summary>

![The Stickers subcategory](../media/categories/servers-stickers.png)

</details>

## Getting a sticker

![Get sticker](../media/blocks/sticker_getwith.png)

`get sticker with name equal to ... on the server ...` finds one by name or ID.

| Block | What it does |
| --- | --- |
| ![for each sticker](../media/blocks/sticker_getallinserver.png) | Loops over every sticker in a server. |
| ![current sticker](../media/blocks/sticker_getallinserver_value.png) | The sticker being handled. |

## Reading a sticker

| Block | Returns |
| --- | --- |
| ![name](../media/blocks/sticker_getname.png) | The sticker name. |
| ![id](../media/blocks/sticker_getid.png) | Its ID. |
| ![image url](../media/blocks/sticker_geturl.png) | A URL to the image. |
| ![server](../media/blocks/sticker_getguild.png) | The server it belongs to. |
| ![created](../media/blocks/sticker_created.png) | When it was uploaded. |

## Managing stickers

| Block | What it does |
| --- | --- |
| ![create](../media/blocks/sticker_create.png) | Uploads a new sticker from a file URL. |
| ![rename](../media/blocks/sticker_setname.png) | Renames a sticker. |
| ![delete](../media/blocks/sticker_delete.png) | Deletes it. |

Creating and deleting stickers needs the **Manage Expressions** permission.

## Sticker limits

| Boost level | Stickers |
| --- | --- |
| None | 5 |
| Level 1 | 15 |
| Level 2 | 30 |
| Level 3 | 60 |

Discord requires stickers to be PNG, APNG or Lottie, exactly 320 by 320 pixels, and under 512 KB. If `create a sticker` fails, the file usually does not meet one of those.

## Events

For when a sticker is created, deleted or renamed, see [Emojis and Stickers](../Events/emojis-stickers.md).
