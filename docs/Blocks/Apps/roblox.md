---
sidebar_position: 3
title: Roblox
---

# Roblox

Blocks for reading public Roblox information: users, groups, games, gamepasses and badges. No API key is needed, because all of it is public.

<details>
  <summary>Show the whole Roblox flyout</summary>

![The Roblox subcategory](../media/categories/apps-utils-roblox.png)

</details>

## Users

![Get Roblox user](../media/blocks/roblox_getUser.png)

`get Roblox user ... then ...` looks a user up. Blocks in the `then` part run once the lookup finishes.

![Roblox user info](../media/blocks/roblox_userInfo.png)

Inside that part, `get ... of Roblox user` reads a property. The dropdown offers username, display name, description, ID, creation date, and whether the account is banned.

### Quick lookups

These three do not need the user fetched first:

| Block | Returns |
| --- | --- |
| ![user id](../media/blocks/roblox_userId.png) | The numeric user ID. |
| ![avatar](../media/blocks/roblox_userAvatar.png) | A URL to the avatar image. |
| ![profile link](../media/blocks/roblox_profileLink.png) | A link to the profile page. |

## Groups

![Get group](../media/blocks/roblox_getGroup.png)

`get Roblox group with ID ... then ...` fetches a group.

![Group info](../media/blocks/roblox_groupInfo.png)

`get ... of Roblox group` reads a property: name, description, member count, owner and so on.

| Block | Returns |
| --- | --- |
| ![in group](../media/blocks/roblox_userInGroup.png) | True when a user is a member of a group. |
| ![group rank](../media/blocks/roblox_userGroupRank.png) | The user's rank name in that group. |

These two are what a Roblox verification bot is built from: check the group, then give a Discord role to match.

## Games

![Get game](../media/blocks/roblox_getGame.png)

`get Roblox game with place ID ... then ...` fetches a game. The place ID is the number in the game's URL.

![Game info](../media/blocks/roblox_gameInfo.png)

`get ... of Roblox game` reads a property: name, description, visits, players online, favorites and more.

## Gamepasses and badges

| Block | Returns |
| --- | --- |
| ![owns gamepass](../media/blocks/roblox_ownsGamepass.png) | True when a user owns a gamepass. |
| ![owns badge](../media/blocks/roblox_ownsBadge.png) | True when a user owns a badge. |

Both take an ID, which you can find in the item's URL on the Roblox site.

## Verification

These blocks read public data. They do **not** prove that the Discord user in front of you owns the Roblox account they typed in.

The usual way to prove it is to give the person a short code, ask them to put it in their Roblox profile description, then read the description back with `get description of Roblox user` and check the code is there.

## Notes

- Every block here goes over the network, so `defer reply` first inside an interaction.
- Roblox rate limits requests. Add a [cooldown](../cooldowns.md) to commands that use these blocks.
- Wrap them in a `try` block from [JavaScript](../javascript.md), so a misspelled username gives a friendly reply instead of a failure.

## A worked example: a Roblox group role

1. A slash command `verify` with a text option `roblox_username`.
2. `defer reply`.
3. `Roblox user <option> is in group with ID <your group ID>`.
4. If true, `add role to member` with your Verified role, and reply with a confirmation.
5. If false, reply telling them to join the group first.
