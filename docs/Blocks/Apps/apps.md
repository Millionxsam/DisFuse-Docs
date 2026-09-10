---
sidebar_position: 1
title: Apps / Utils Overview
---

# Apps / Utils

This category is where DisFuse talks to the world outside Discord: other websites, other platforms, and the drawing tools that let your bot generate its own images.

## The subcategories

| Page | What it does |
| --- | --- |
| [Scratch](scratch.md) | Reads public profile information from Scratch |
| [Roblox](roblox.md) | Reads public information about Roblox users, groups and games |
| [Captcha](captcha.md) | Generates a captcha image for verification |
| [Fetch](fetch.md) | Sends a request to any web API |
| [Canvas](canvas.md) | Draws images your bot can send |

## When to use Fetch instead

Scratch and Roblox have their own blocks because they come up often. For anything else, [Fetch](fetch.md) can talk to any API that speaks HTTP, which is nearly all of them. If you want weather, currency rates, a random cat picture or your own web service, Fetch is the block.

## These blocks are slow

Every block in this category except Canvas goes over the network. That takes time, sometimes a second or more.

Two consequences:

- Use `defer reply` before any of them in an interaction, or you will hit Discord's 3 second limit. See [Buttons](../Components/buttons.md).
- Wrap them in a `try` block from [JavaScript](../javascript.md). A service being down should not take a command down with it.
