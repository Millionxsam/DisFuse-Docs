---
sidebar_position: 3
title: Roblox
---

# Roblox

Blocks for reading public Roblox information: users, groups, games, servers, badges, gamepasses and avatar shop items. No API key is needed for any of that, because it is all public. A last section of blocks talks to **your own game** (messages, DataStores and bans) and needs an Open Cloud API key.

<details>
  <summary>Show the whole Roblox flyout</summary>

![The Roblox subcategory](../media/categories/apps-utils-roblox.png)

</details>

## Users

![Get Roblox user](../media/blocks/roblox_getUser.png)

`get Roblox user ... then ...` looks a user up. Blocks in the `then` part run once the lookup finishes.

![Roblox user info](../media/blocks/roblox_userInfo.png)

Inside that part, `get ... of Roblox user` reads a property. The dropdown offers username, display name, description, ID, creation date, whether the account is banned, friend and follower counts, avatar image and profile link.

![Get user by ID](../media/blocks/roblox_getUserById.png)

Already have a user ID? `get Roblox user with ID ... then ...` does the same from the ID.

### Quick lookups

These do not need the user fetched first:

| Block | Returns |
| --- | --- |
| ![user id](../media/blocks/roblox_userId.png) | The numeric user ID. |
| ![avatar](../media/blocks/roblox_userAvatar.png) | A URL to the avatar image. |
| ![profile link](../media/blocks/roblox_profileLink.png) | A link to the profile page. |
| ![thumbnail](../media/blocks/roblox_userThumbnail.png) | A URL to a headshot, bust or full avatar picture. |
| ![user list](../media/blocks/roblox_userList.png) | A list of the user's group names, group IDs, previous usernames or the games they made. |
| ![search](../media/blocks/roblox_searchUsers.png) | Up to 10 usernames matching a search. |
| ![name from id](../media/blocks/roblox_usernameFromId.png) | The username or display name of a user ID. |

## Groups

![Get group](../media/blocks/roblox_getGroup.png)

`get Roblox group with ID ... then ...` fetches a group.

![Group info](../media/blocks/roblox_groupInfo.png)

`get ... of Roblox group` reads a property: name, description, member count, owner and so on.

| Block | Returns |
| --- | --- |
| ![in group](../media/blocks/roblox_userInGroup.png) | True when a user is a member of a group. |
| ![group rank](../media/blocks/roblox_userGroupRank.png) | The user's rank name in that group. |
| ![group roles](../media/blocks/roblox_groupRoles.png) | A list of the group's role names, lowest rank first. |

These two are what a Roblox verification bot is built from: check the group, then give a Discord role to match.

## Games

![Get game](../media/blocks/roblox_getGame.png)

`get Roblox game with place ID ... then ...` fetches a game. The place ID is the number in the game's URL.

![Game info](../media/blocks/roblox_gameInfo.png)

`get ... of Roblox game` reads a property: name, description, visits, players online, favorites, likes, dislikes, like percentage, genre, universe ID, icon, thumbnail and more.

| Block | What it does |
| --- | --- |
| ![players](../media/blocks/roblox_gamePlayers.png) | How many people are playing right now. |
| ![for each server](../media/blocks/roblox_forEachServer.png) | Runs once for each public server (up to 100, fullest first). |
| ![server info](../media/blocks/roblox_serverInfo.png) | Inside that, reads the server's players, max players, FPS, ping, ID or a join link. |

## Badges, gamepasses and items

| Block | Returns |
| --- | --- |
| ![owns gamepass](../media/blocks/roblox_ownsGamepass.png) | True when a user owns a gamepass. |
| ![owns badge](../media/blocks/roblox_ownsBadge.png) | True when a user owns a badge. |

To read about the badge, gamepass or avatar shop item itself, get it first, then use its info block inside:

| Get | Info |
| --- | --- |
| ![get badge](../media/blocks/roblox_getBadge.png) | ![badge info](../media/blocks/roblox_badgeInfo.png) Name, description, times awarded (ever and yesterday), win rate, game, icon and link. |
| ![get gamepass](../media/blocks/roblox_getGamepass.png) | ![gamepass info](../media/blocks/roblox_gamepassInfo.png) Name, description, price, whether it is for sale, creator, icon and link. |
| ![get item](../media/blocks/roblox_getItem.png) | ![item info](../media/blocks/roblox_itemInfo.png) Name, description, price, whether it is for sale or limited, copies remaining, creator, image and link. |

All of them take an ID, which you can find in the URL on the Roblox site.

## Your own game (Open Cloud)

These blocks talk to a game you own, so they need an Open Cloud API key:

1. Go to [create.roblox.com/dashboard/credentials](https://create.roblox.com/dashboard/credentials) and create an API key.
2. Add your game to it, with the permissions the blocks below say they need.
3. Save the key as a [secret](../../Guide/secrets.md) named `ROBLOX_API_KEY`. The blocks come with `get secret with name ROBLOX_API_KEY` already plugged in.

Every block takes the game's place ID, the number in its link.

| Block | What it does | Permission |
| --- | --- | --- |
| ![message](../media/blocks/roblox_publishMessage.png) | Sends a message to every running server. In the game, receive it with `MessagingService:SubscribeAsync(topic)`. | `messaging-service:publish` |
| ![get datastore](../media/blocks/roblox_getDataStore.png) | Reads a value the game saved with `DataStoreService`. | `universe-datastores.objects:read` |
| ![set datastore](../media/blocks/roblox_setDataStore.png) | Saves a value the game can read. | `universe-datastores.objects:create` and `update` |
| ![ban](../media/blocks/roblox_banUser.png) | Bans or unbans a player, even from servers already running. A duration of 0 bans forever. | `universe.user-restriction:write` |

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
