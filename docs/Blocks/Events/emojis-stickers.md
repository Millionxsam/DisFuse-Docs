---
sidebar_position: 7
title: Emojis and Stickers
---

# Emojis and Stickers

Events for a server's custom expressions being added, removed or changed.

<details>
  <summary>Show the whole Emojis and Stickers flyout</summary>

![The Emojis and Stickers subcategory](../media/categories/events-emojis-stickers.png)

</details>

## Emoji events

| Block | Fires when |
| --- | --- |
| ![emoji created](../media/blocks/events_emojis_created.png) | An emoji is uploaded. |
| ![emoji deleted](../media/blocks/events_emojis_deleted.png) | An emoji is removed. |

![Created or deleted emoji](../media/blocks/events_emojis_createdOrDeletedEmoji.png)

`created/deleted emoji` works inside both of those events.

![Emoji changed](../media/blocks/events_emojis_changed.png)

`when an emoji is changed` fires on a rename or a change to which roles can use it.

| Companion block | Returns |
| --- | --- |
| ![before](../media/blocks/events_emojis_changedOldEmoji.png) | The emoji before the change. |
| ![after](../media/blocks/events_emojis_changedNewEmoji.png) | The emoji after. |

## Sticker events

The same four blocks exist for stickers.

| Block | Fires when |
| --- | --- |
| ![sticker created](../media/blocks/events_stickers_created.png) | A sticker is uploaded. |
| ![sticker deleted](../media/blocks/events_stickers_deleted.png) | A sticker is removed. |
| ![created or deleted](../media/blocks/events_stickers_createdOrDeletedSticker.png) | The sticker involved, inside either event. |
| ![sticker changed](../media/blocks/events_stickers_changed.png) | A sticker is renamed or edited. |
| ![before](../media/blocks/events_stickers_changedOldSticker.png) | The sticker before the change. |
| ![after](../media/blocks/events_stickers_changedNewSticker.png) | The sticker after. |

## Reading the emoji or sticker

The blocks for getting a name, ID, image URL or author are in [Emojis](../Servers/emojis.md) and [Stickers](../Servers/stickers.md).

## A worked example: an expression log

1. `when an emoji is created`.
2. Send a message in your log channel with a media gallery containing `get image/gif URL of the emoji <created/deleted emoji>`.
3. Add a text display with the name and who uploaded it, using `get author of the emoji`.
4. Repeat with `when an emoji is deleted` so removals are logged too.

A log like this is useful in large servers where several people have permission to manage expressions and emoji slots run out.
