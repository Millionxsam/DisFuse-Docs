---
sidebar_position: 4
title: Text
---

# Text

Text blocks build and inspect strings. Every message your bot sends, every command name, and every database key is text, so this is one of the categories you will use most.

<details>
  <summary>Show the whole Text flyout</summary>

![The Text category](media/categories/text.png)

</details>

## Creating text

| Block | What it does |
| --- | --- |
| ![text](media/blocks/text.png) | A plain piece of text. Type into the white box. |
| ![multiline text](media/blocks/text_multiline.png) | Text that spans several lines. Click the icon to expand it. |
| ![create text with](media/blocks/text_join.png) | Joins pieces together. Click the gear to add more slots. |
| ![new line](media/blocks/text_newline.png) | A line break, for use inside `create text with`. |

`create text with` is how you build a sentence out of a fixed part and a changing part, for example "Welcome to the server, " followed by the member's name.

## Changing text

| Block | What it does |
| --- | --- |
| ![append](media/blocks/text_append.png) | Adds text onto the end of a variable. |
| ![change case](media/blocks/text_changeCase.png) | Converts to UPPER CASE, lower case or Title Case. |
| ![trim](media/blocks/text_trim.png) | Removes spaces from the start, the end, or both. |
| ![replace](media/blocks/text_replace.png) | Replaces every occurrence of one piece of text with another. |
| ![repeat](media/blocks/text_repeat.png) | Repeats a piece of text a number of times. |
| ![reverse](media/blocks/text_reverse.png) | Turns the text back to front. |
| ![substring](media/blocks/text_getSubstring.png) | Takes a slice out of the middle of some text. |
| ![letter at](media/blocks/text_charAt.png) | Gets a single letter by position. |

## Inspecting text

| Block | Returns |
| --- | --- |
| ![length](media/blocks/text_length.png) | How many characters the text has. |
| ![is empty](media/blocks/text_isEmpty.png) | True when the text has no characters at all. |
| ![contains](media/blocks/text_contains.png) | True when one piece of text appears inside another. |
| ![starts with](media/blocks/text_startOrEndWith.png) | True when the text starts (or ends) with something. |
| ![find occurrence](media/blocks/text_indexOf.png) | The position of a piece of text inside another. |
| ![count](media/blocks/text_count.png) | How many times one piece of text appears in another. |

## Regular expressions

At the bottom of the category are the regular expression blocks. A regular expression is a pattern that describes a shape of text: "a string of digits", "an email address", "a word starting with a capital letter". They are powerful, and they take a little learning.

![The regexp block](media/blocks/text_regexp.png)

The `regexp` block holds the pattern itself. Plug it into one of these:

| Block | What it does |
| --- | --- |
| ![test](media/blocks/text_regexp_test.png) | True when the pattern matches somewhere in the text. |
| ![match](media/blocks/text_regexp_match.png) | A list of every part of the text that matched. |
| ![exec](media/blocks/text_regexp_exec.png) | The first match, plus its capture groups. |
| ![replace](media/blocks/text_regexp_replace.png) | Replaces everything that matched with something else. |

:::tip
If you are new to regular expressions, [regex101.com](https://regex101.com) explains what a pattern does while you type it.
:::

## A worked example

To detect a Discord invite link in a message and delete it:

1. Use `when a message is received from a human` from [Message](Messages/message.md).
2. Plug `get content of message received` into a `test regexp` block with a pattern like `discord\.gg\/\w+`.
3. If the test is true, use `delete message` and send a warning.
