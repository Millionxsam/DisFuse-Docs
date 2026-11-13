---
sidebar_position: 12
title: Bluesky
---

# Bluesky

Blocks for Bluesky: read public posts and profiles, get notified when someone posts, and post, reply, like, follow, search and react to notifications as your own account.

Reading works without any account, through Bluesky's official public API. Acting as your account needs an app password, and those blocks have their own section at the bottom of the flyout.

Wherever a block asks for a user, you can give it a handle (`bsky.app`), an `@handle` or a profile link. Wherever it asks for a post, give it the post's link.

<details>
  <summary>Show the whole Bluesky flyout</summary>

![The Bluesky subcategory](../media/categories/apps-utils-bluesky.png)

</details>

## Posts

These run the blocks inside them with a post. Inside, `get ... of Bluesky post` reads from it. The dropdowns pick posts only, posts and reposts, or posts and replies.

| Block | What it does |
| --- | --- |
| ![get post](../media/blocks/bluesky_getPost.png) | Looks up one post by its link. |
| ![get latest](../media/blocks/bluesky_getLatestPost.png) | Gets a user's newest post. Pinned posts are skipped. |
| ![for each](../media/blocks/bluesky_forEachPost.png) | Runs once for each of a user's latest posts, newest first. |

![Post info](../media/blocks/bluesky_postInfo.png)

`get ... of Bluesky post` reads the text, link, the author's handle, name, link and profile picture, likes, reposts, replies, quotes, post date, a list of image URLs, a video's thumbnail, the link card's URL, whether it is a reply, whether it is a repost and by whom, its language, and its `at://` URI.

## New post notifications

![On new post](../media/blocks/bluesky_onNewPost.png)

`when Bluesky user ... posts a new ...` goes on its own in the workspace, not inside an event. It checks the user every few minutes (at least 1) and runs once for each new post.

## Users

![Get user](../media/blocks/bluesky_getUser.png)

`get Bluesky user ... then ...` looks up a profile.

![User info](../media/blocks/bluesky_userInfo.png)

`get ... of Bluesky user` reads the handle, display name, DID, bio, link, followers, following, post count, profile picture, banner and join date.

## Quick info

| Block | Returns |
| --- | --- |
| ![latest link](../media/blocks/bluesky_latestPostLink.png) | A link to the user's newest post. |
| ![followers](../media/blocks/bluesky_followers.png) | The user's follower count. |
| ![exists](../media/blocks/bluesky_userExists.png) | True when the account exists. |

## Logging in

1. In Bluesky, go to **Settings → Privacy and security → App passwords** and add one. Never use your real password.
2. Save it as a [secret](../../Guide/secrets.md) named `BLUESKY_APP_PASSWORD`.

![Log in](../media/blocks/bluesky_login.png)

Put `log in to Bluesky` in `when the bot is logged in`, with your handle.

## Acting as your account

| Block | What it does |
| --- | --- |
| ![post](../media/blocks/bluesky_createPost.png) | Posts up to 300 characters, optionally with an image from a URL (with alt text) or as a reply to another post. Links, `@mentions` and `#hashtags` become clickable. Inside, `get link of Bluesky post` is the new post's link. |
| ![post action](../media/blocks/bluesky_postAction.png) | Likes, unlikes, reposts, undoes a repost or deletes a post. You can only delete your own posts. |
| ![follow](../media/blocks/bluesky_followUser.png) | Follows or unfollows a user. |
| ![search](../media/blocks/bluesky_searchPosts.png) | Searches posts, newest or top first, and runs once for each. Supports `from:handle` and `#hashtags`. |

## Notifications

![On notification](../media/blocks/bluesky_onNotification.png)

`when someone ... my Bluesky account` goes on its own in the workspace. It checks your notifications every few minutes and runs once for each new mention, reply, quote, follow, like or repost. Inside, `get ... of Bluesky user` is the person who did it, and `get ... of Bluesky post` is their post (for mentions, replies and quotes) or your post they liked or reposted.

## Notes

- Every block here goes over the network, so `defer reply` first inside an interaction.
- Images must be under 1 MB; Bluesky refuses bigger ones.
