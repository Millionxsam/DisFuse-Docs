---
sidebar_position: 10
title: Instagram
---

# Instagram

Blocks for Instagram: read your account and posts, share new posts in Discord, publish photos, reels and stories, and manage comments.

Instagram has no public API for reading accounts without logging in, so every Instagram block works on your own account, through the official Instagram API. It must be a **professional** account (Business or Creator). Switching is free in the Instagram app's settings.

<details>
  <summary>Show the whole Instagram flyout</summary>

![The Instagram subcategory](../media/categories/apps-utils-instagram.png)

</details>

## Logging in

1. Go to [developers.facebook.com](https://developers.facebook.com), create an app, and add the **Instagram** product ("Instagram API with Instagram Login").
2. Under **Generate access tokens**, add your Instagram account and generate a token.
3. Save it as a [secret](../../Guide/secrets.md) named `INSTAGRAM_TOKEN`.

![Log in](../media/blocks/instagram_login.png)

Put `log in to Instagram` in `when the bot is logged in`. Tokens last 60 days. While the bot is running it refreshes its copy every day, but the secret itself is not changed, so generate a new token if the bot has been off for a long time.

## Your account

| Block | What it does |
| --- | --- |
| ![get account](../media/blocks/instagram_getAccount.png) | Gets your account. Use `get ... of Instagram account` inside. |
| ![account info](../media/blocks/instagram_accountInfo.png) | Reads the username, name, ID, bio, website, link, profile picture, followers, following, post count or account type. |
| ![followers](../media/blocks/instagram_followers.png) | Your follower count, without getting the account first. |

## Your posts

These run the blocks inside them with a post. Inside, `get ... of Instagram post` reads from it.

| Block | What it does |
| --- | --- |
| ![latest](../media/blocks/instagram_getLatestPost.png) | Gets your newest post. |
| ![for each](../media/blocks/instagram_forEachPost.png) | Runs once for each of your latest posts, newest first. |
| ![get post](../media/blocks/instagram_getPost.png) | Looks up one of your posts by its link or ID. |
| ![on new post](../media/blocks/instagram_onNewPost.png) | Goes on its own in the workspace. Checks every few minutes and runs once for each new post, so your server hears about every post. |

![Post info](../media/blocks/instagram_postInfo.png)

`get ... of Instagram post` reads the caption, link, ID, type (photo, video, reel, carousel), the image or video URL, a thumbnail, post date, likes, comment count, username and shortcode.

## Publishing

![Publish](../media/blocks/instagram_publish.png)

Posts a photo, reel, photo story or video story from a public URL, then runs the blocks inside with the new post. Photos must be JPEGs, and videos MP4s. Instagram downloads the file itself, so the link must work for anyone, not just you. Videos can take a minute to process. Stories have no caption.

Instagram allows 100 published posts a day through the API.

## Comments

| Block | What it does |
| --- | --- |
| ![for each comment](../media/blocks/instagram_forEachComment.png) | Runs once for each comment on one of your posts. |
| ![comment info](../media/blocks/instagram_commentInfo.png) | Inside that, reads the comment's text, username, ID, likes, date, whether it is hidden, and the post ID. |
| ![comment](../media/blocks/instagram_comment.png) | Comments on one of your posts, or replies to a comment by its ID. |
| ![comment action](../media/blocks/instagram_commentAction.png) | Hides, unhides or deletes a comment on your posts. |

## Notes

- Every block here goes over the network, so `defer reply` first inside an interaction.
- Reading other people's accounts and sending DMs are not part of these blocks: Instagram only allows them for apps that go through Meta's review.
