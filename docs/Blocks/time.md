---
sidebar_position: 8
title: Time
---

# Time

Time blocks create dates, convert between units, and turn durations into text a person can read. Anything with a cooldown, a ban length, a reminder or an "account created" line uses them.

![The Time category](media/categories/time.png)

## Getting a date

| Block | Returns |
| --- | --- |
| ![now in ms](media/blocks/time_date_now.png) | The current time as a number of milliseconds. |
| ![current date](media/blocks/time_date.png) | The current time as a date. |
| ![create date](media/blocks/time_createdate.png) | A date built from a millisecond timestamp, or from date text like `2026-09-22T15:00` or `September 22, 2026 3:00 PM`. A time on its own, like `3:00`, is not a date. |

A **timestamp** is a plain number: how many milliseconds have passed since the start of 1970. A **date** is a richer value that Discord blocks understand. `create date from time` converts one into the other.

## Time of day

![When the time is](media/blocks/time_whenTime.png)

`when the time is ... in ...` runs the blocks inside every day when the clock reaches that time. It is an event of its own: put it anywhere, not inside another event. The last dropdown picks the time zone; the default is the local time of the machine your bot runs on.

Any of the three fields can be set to **any**, which matches every value:

| Setting | Runs |
| --- | --- |
| 15 : 00 : 00 | Every day at 3:00pm |
| any : 00 : 00 | Every hour, on the hour |
| any : any : 00 | Every minute |
| 15 : 00 : any | Once a second for the whole minute of 3:00pm |

![Is the time](media/blocks/time_isTime.png)

`is the time ... in ...` is true when the clock matches, on any day. Use it in an `if` to only allow something at certain hours: `is the time 22 : any : any` is true for the whole hour from 10pm.

## Discord timestamps

![Timestamp from date](media/blocks/time_timestampFromDate.png)

`create timestamp from date` produces the special text Discord renders as a live, local-time timestamp in a message, for example "in 3 hours" or "Today at 14:05". The dropdown picks the style:

| Style | Looks like |
| --- | --- |
| Short time | 14:05 |
| Long time | 14:05:32 |
| Short date | 09/09/2026 |
| Long date | 9 September 2026 |
| Short date and time | 9 September 2026 14:05 |
| Long date and time | Wednesday, 9 September 2026 14:05 |
| Relative | in 3 hours |

This is much better than writing a date yourself, because Discord shows it in each viewer's own time zone.

## Converting and comparing

| Block | What it does |
| --- | --- |
| ![convert](media/blocks/time_convert.png) | Converts a number between milliseconds, seconds, minutes, hours, days and weeks. |
| ![operation](media/blocks/time_operation.png) | Adds or subtracts an amount of time from a date. |
| ![between](media/blocks/time_between.png) | How much time separates two dates. |

`milliseconds between date ... and date ...` is how you work out how long ago someone joined, or how long until a ban expires.

## Durations as text

| Block | What it does |
| --- | --- |
| ![string to ms](media/blocks/time_stringToMS.png) | Turns text like `10m`, `2h` or `7d` into milliseconds. |
| ![ms to string](media/blocks/time_msToString.png) | Turns milliseconds into text like `10m` or, with long display on, `10 minutes`. |

These two are what make a `/mute @user 10m` command possible: read the duration as text from the slash command option, convert it with `turn time string to milliseconds`, and pass the result to the timeout block.

## A worked example: a daily message

1. Drag out `when the time is` and set it to `09 : 00 : 00` in your time zone.
2. Inside it, `get channel with ID` and send "Good morning!" to it.

## Example

A cooldown message that reads naturally:

1. `cooldown left for user ... on command ...` from [Cooldowns](cooldowns.md) gives you milliseconds.
2. `turn milliseconds to time string` with long display on gives you "2 minutes".
3. Reply with `create text with` "Try again in " and that value.
