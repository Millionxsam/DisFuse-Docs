---
sidebar_position: 6
title: Reddit
---

# Reddit

Blocks for Reddit: read posts, comments, subreddits and users, get a random meme, and post new posts to a Discord channel as they arrive. None of this needs an account. Logging in with a Reddit app is optional for reading, and needed to post, reply and send messages.

Subreddits can be written like `memes`, `r/memes` or a reddit.com link, and users like `spez` or `u/spez`.

<details>
  <summary>Show the whole Reddit flyout</summary>

![The Reddit subcategory](../media/categories/apps-utils-reddit.png)

</details>

## Posts

These run the blocks inside them with a post. Inside, `get ... of Reddit post` reads from it.

| Block | What it does |
| --- | --- |
| ![random post](../media/blocks/reddit_getRandomPost.png) | Picks a random post from the subreddit's hot posts. Pick **image post** for a meme command. NSFW posts are skipped unless you tick the box. |
| ![for each post](../media/blocks/reddit_forEachPost.png) | Runs once for each post, sorted by hot, new, rising, top or controversial. |
| ![get post](../media/blocks/reddit_getPost.png) | Looks up one post by its link or ID. |
| ![search](../media/blocks/reddit_searchPosts.png) | Searches one subreddit, or all of Reddit if the subreddit is empty. |
| ![user posts](../media/blocks/reddit_forEachUserPost.png) | Runs once for each post a user made. |

![Post info](../media/blocks/reddit_postInfo.png)

`get ... of Reddit post` reads the title, text, link to the post, the URL it links to, its image URL, thumbnail, author, subreddit, score, upvote ratio, comment count, date, flair, and whether it is NSFW, a spoiler, pinned, a video or a text post.

## New post feeds

![On new post](../media/blocks/reddit_onNewPost.png)

`when a new post is made in subreddit ...` goes on its own in the workspace, not inside an event. It checks the subreddit every few minutes (at least 1) and runs once for each new post. Posts that were already there when the bot started are skipped.

## Comments

| Block | What it does |
| --- | --- |
| ![for each comment](../media/blocks/reddit_forEachComment.png) | Runs once for each top-level comment on a post. |
| ![comment info](../media/blocks/reddit_commentInfo.png) | Inside that, reads the comment's text, author, score, reply count, date or link. |

## Subreddits and users

![Get subreddit](../media/blocks/reddit_getSubreddit.png)

![Subreddit info](../media/blocks/reddit_subredditInfo.png)

`get subreddit ... then ...` looks up a subreddit, and `get ... of Reddit subreddit` reads its name, title, description, sidebar, member count, members online, creation date, type, icon, banner, colour and link.

![Get user](../media/blocks/reddit_getUser.png)

![User info](../media/blocks/reddit_userInfo.png)

`get Reddit user ... then ...` looks up a user, and `get ... of Reddit user` reads their karma (total, post or comment), account creation date, avatar, bio, profile link and more.

## Quick info

| Block | Returns |
| --- | --- |
| ![post list](../media/blocks/reddit_postList.png) | A list of the titles, links or image URLs of a subreddit's posts. |
| ![members](../media/blocks/reddit_memberCount.png) | How many members a subreddit has. |
| ![subreddit exists](../media/blocks/reddit_subredditExists.png) | True when a subreddit exists and is public. |
| ![karma](../media/blocks/reddit_userKarma.png) | A user's total karma. |
| ![user exists](../media/blocks/reddit_userExists.png) | True when an account exists and is not suspended. |

## Logging in

Reddit sometimes refuses requests from servers that are not logged in. When that happens, post blocks fall back to Reddit's public RSS feeds, which always work but do not include scores, comment counts, NSFW or flair (those are `null`). Subreddit and user info has no fallback.

Logging in fixes this, and it is needed for posting:

1. Go to [reddit.com/prefs/apps](https://www.reddit.com/prefs/apps) and create an app of type **script**. Any redirect URI works, like `http://localhost`.
2. Save the ID under the app's name as a [secret](../../Guide/secrets.md) named `REDDIT_CLIENT_ID`, and the secret as `REDDIT_CLIENT_SECRET`.
3. Put `log in to Reddit` in `when the bot is logged in`.

![Log in](../media/blocks/reddit_login.png)

With only the ID and secret, every Reddit block reads through Reddit's official API. To post as an account, also give it the account's username and password (save the password as a secret named `REDDIT_PASSWORD`). The app must belong to that account, and the account cannot have two-factor authentication turned on.

| Block | What it does |
| --- | --- |
| ![submit](../media/blocks/reddit_submitPost.png) | Posts a text or link post to a subreddit. |
| ![reply](../media/blocks/reddit_reply.png) | Comments on a post, or replies to a comment, by its link. |
| ![message](../media/blocks/reddit_sendMessage.png) | Sends a private message to a user. |

Follow Reddit's rules and each subreddit's rules about bots.

## Notes

- Every block here goes over the network, so `defer reply` first inside an interaction.
- Reddit rate limits requests. Add a [cooldown](../cooldowns.md) to commands that use these blocks.

## A worked example: a meme command

1. A slash command `meme`.
2. `defer reply`.
3. `get random image post from subreddit memes then`:
4. Reply with an embed whose title is `get title of Reddit post` and whose image is `get image URL of Reddit post`.
