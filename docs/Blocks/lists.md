---
sidebar_position: 6
title: Lists
---

# Lists

A list holds several values in order. Discord blocks hand you lists all the time: the members who reacted to a message, the permissions on a role, the files someone uploaded to a modal.

![The Lists category](media/categories/lists.png)

:::info
Lists in DisFuse start at position 1, not 0. `get # 1` is the first item.
:::

## Making a list

| Block | What it does |
| --- | --- |
| ![create list with](media/blocks/lists_create_with.png) | Builds a list out of the values you plug in. Click the gear to add more slots. |
| ![repeat item](media/blocks/lists_repeat.png) | Builds a list by repeating one value. |
| ![split text](media/blocks/lists_split.png) | Splits text into a list on a separator, or joins a list back into text. |
| ![merge](media/blocks/list_merge.png) | Joins two lists into one. |

## Reading a list

| Block | Returns |
| --- | --- |
| ![length](media/blocks/lists_length.png) | How many items the list has. |
| ![is empty](media/blocks/lists_isEmpty.png) | True when the list has nothing in it. |
| ![get index](media/blocks/lists_getIndex.png) | One item, by position. The dropdowns also offer first, last and random. |
| ![index of](media/blocks/lists_indexOf.png) | The position of an item, or 0 when it is not there. |
| ![sublist](media/blocks/lists_getSublist.png) | A slice of the list. |

## Changing a list

| Block | What it does |
| --- | --- |
| ![set index](media/blocks/lists_setIndex.png) | Replaces or inserts an item at a position. |
| ![sort](media/blocks/lists_sort.png) | Sorts numerically, alphabetically, or ignoring case, ascending or descending. |
| ![reverse](media/blocks/lists_reverse.png) | Reverses the order. |

## Searching a list

Two blocks run a test over every item for you.

![The filter block](media/blocks/list_filter.png)

`filter list ... by` keeps only the items the test says yes to. Inside the test, `item in loop` is the item being checked.

![The find block](media/blocks/list_find.png)

`find first in list ... that matches` returns the first item the test says yes to, and nothing if there is none.

## Looping over a list

Use `for each item in list` from [Loops](loops.md). It gives you each item in turn, which is usually simpler than counting positions yourself.

## Example

To pick a random winner from everyone who reacted to a giveaway message:

1. `get users of reaction ... with emoji 🎉` from [Message](Messages/message.md) gives you a list.
2. `filter` that list, keeping only entries where `is user a bot?` is false.
3. `in list ... get random` picks the winner.
