---
sidebar_position: 6
title: Voice Actions
---

# Voice Actions

Events for members moving in and out of voice channels.

<details>
  <summary>Show the whole Voice Actions flyout</summary>

![The Voice Actions subcategory](../media/categories/events-voice-actions.png)

</details>

## When a member joins a voice channel

![Voice join](../media/blocks/events_voice_join.png)

| Companion block | Returns |
| --- | --- |
| ![member](../media/blocks/events_voice_join_member.png) | The member who joined. |
| ![channel](../media/blocks/events_voice_join_channel.png) | The voice channel they joined. |

## When a member leaves a voice channel

![Voice leave](../media/blocks/events_voice_leave.png)

| Companion block | Returns |
| --- | --- |
| ![member](../media/blocks/events_voice_leave_member.png) | The member who left. |
| ![channel](../media/blocks/events_voice_leave_channel.png) | The voice channel they left. |

## A worked example: temporary voice channels

1. In `when a member joins a voice channel`, check whether `voice channel that was joined` is your "Join to create" channel.
2. If it is, create a new voice channel named after the member and move them into it.
3. In `when a member leaves a voice channel`, delete `voice channel that was left` if it is one you created and nobody is left in it.
