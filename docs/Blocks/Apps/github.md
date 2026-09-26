---
sidebar_position: 5
title: GitHub
---

# GitHub

Blocks for GitHub: read public users, organizations, repositories, issues, pull requests, commits, releases and gists, and, with a token, act as your own account to open issues, comment, merge, publish releases and more.

<details>
  <summary>Show the whole GitHub flyout</summary>

![The GitHub subcategory](../media/categories/apps-utils-github.png)

</details>

## Tokens and rate limits

Reading public information needs no token. GitHub allows **60 requests an hour** without one, shared by everything your bot does.

The blocks under **Actions as your account** need a token. Make one at [github.com/settings/tokens](https://github.com/settings/tokens) and save it as a [secret](../../Guide/secrets.md) named `GITHUB_TOKEN`. The blocks come with `get secret with name GITHUB_TOKEN` already plugged in. Never paste a token straight into a text block: anyone who sees your project would see it.

| Block | Returns |
| --- | --- |
| ![rate limit](../media/blocks/github_rateLimit.png) | How many requests the bot has left this hour. Checking does not use one up. |
| ![zen](../media/blocks/github_zen.png) | A random piece of design wisdom from GitHub. |

## The "get, then info" pattern

Most things work in two steps, the same as [Roblox](roblox.md): a `get ... then` block looks something up, and inside its `then` part an info block reads from it.

![Get GitHub user](../media/blocks/github_getUser.png)

![GitHub user info](../media/blocks/github_userInfo.png)

The info blocks only work inside their own `get` block, or inside a `for each` loop of the same kind.

## Users

`get GitHub user` works for organizations too. `get ... of GitHub user` reads the username, display name, bio, ID, account type, company, location, website, public email, X username, follower and repository counts, join date, avatar and profile link.

| Block | Returns |
| --- | --- |
| ![exists](../media/blocks/github_userExists.png) | True when the username is taken. |
| ![avatar](../media/blocks/github_userAvatar.png) | A link to the avatar image. |
| ![follows](../media/blocks/github_userFollows.png) | True when one user follows another. |
| ![list](../media/blocks/github_userList.png) | A list about the user: repository names, followers, following, starred repositories, organizations or gist IDs (up to 100). |
| ![search users](../media/blocks/github_searchUsers.png) | Usernames matching a search, like `location:Berlin` (up to 30). |

## Organizations

![Get organization](../media/blocks/github_getOrg.png)

![Organization info](../media/blocks/github_orgInfo.png)

![Organization members](../media/blocks/github_orgMembers.png)

`public members of GitHub organization` gives a list of usernames (up to 100).

## Repositories

A repository is written as `owner/name`, like `octocat/Hello-World`. A full `github.com` link works too.

![Get repository](../media/blocks/github_getRepo.png)

![For each repository](../media/blocks/github_forEachRepo.png)

![Search repositories](../media/blocks/github_searchRepos.png)

![Repository info](../media/blocks/github_repoInfo.png)

`for each repository` loops over a user's or organization's public repositories (up to 100). `for each GitHub repository matching search` searches all of GitHub (up to 30). Use the repository info block inside either loop.

### Quick repository info

| Block | Returns |
| --- | --- |
| ![exists](../media/blocks/github_repoExists.png) | True when a public repository exists. |
| ![stars](../media/blocks/github_repoStars.png) | How many stars it has. |
| ![list](../media/blocks/github_repoList.png) | A list about the repository: contributors, stargazers, branches, tags, languages, labels, release tags or forks (up to 100). |
| ![readme](../media/blocks/github_repoReadme.png) | The text of its README. |
| ![file](../media/blocks/github_fileContent.png) | The text of any file on the default branch, like `src/index.js`. |
| ![workflow](../media/blocks/github_workflowStatus.png) | The result of the latest GitHub Actions run: `success`, `failure`, `cancelled`, `in_progress`, `queued`… |

## Issues and pull requests

![Get issue](../media/blocks/github_getIssue.png)

![For each issue](../media/blocks/github_forEachIssue.png)

![Issue info](../media/blocks/github_issueInfo.png)

![Get pull request](../media/blocks/github_getPullRequest.png)

![For each pull request](../media/blocks/github_forEachPullRequest.png)

![Pull request info](../media/blocks/github_pullRequestInfo.png)

`for each open issue` leaves pull requests out; the dropdown can switch it to closed, or open or closed.

![Search count](../media/blocks/github_searchCount.png)

`number of GitHub issues & pull requests matching search` counts search results, like `repo:octocat/Hello-World is:issue is:open`.

## Commits, releases and gists

![Get commit](../media/blocks/github_getCommit.png)

Leave the branch as `HEAD` for the default branch, or give a branch name or a commit SHA.

![For each commit](../media/blocks/github_forEachCommit.png)

![Commit info](../media/blocks/github_commitInfo.png)

![Get release](../media/blocks/github_getRelease.png)

![For each release](../media/blocks/github_forEachRelease.png)

![Release info](../media/blocks/github_releaseInfo.png)

![Get gist](../media/blocks/github_getGist.png)

![Gist info](../media/blocks/github_gistInfo.png)

A gist's ID is the long code at the end of its link.

## Actions as your account

These all need a token, and they act as the account that token belongs to.

![Get token account](../media/blocks/github_getTokenUser.png)

`get GitHub account with token` looks up whose token it is. Use the user info block inside.

| Block | What it does |
| --- | --- |
| ![create issue](../media/blocks/github_createIssue.png) | Opens an issue, then runs its `then` part. Use the issue info block inside for its number or link. |
| ![comment](../media/blocks/github_comment.png) | Comments on an issue or pull request. |
| ![set state](../media/blocks/github_setIssueState.png) | Closes or reopens an issue or pull request. |
| ![edit](../media/blocks/github_editIssue.png) | Adds labels, removes a label, or assigns people. Give a list, or text like `bug, help wanted`. |
| ![merge](../media/blocks/github_mergePullRequest.png) | Merges a pull request with a merge commit, squash or rebase. |
| ![release](../media/blocks/github_createRelease.png) | Publishes a release, creating the tag from the default branch if needed. |
| ![workflow](../media/blocks/github_runWorkflow.png) | Starts a workflow that has `workflow_dispatch` in its triggers. |
| ![write file](../media/blocks/github_writeFile.png) | Creates or replaces a file, as a commit on the default branch. |
| ![create repo](../media/blocks/github_createRepo.png) | Creates a repository on the token's account. |
| ![gist](../media/blocks/github_createGist.png) | Creates a gist with one file and gives back its link. Handy for sharing text too long for a Discord message. |
| ![star](../media/blocks/github_starRepo.png) | Stars or unstars a repository. |
| ![follow](../media/blocks/github_followUser.png) | Follows or unfollows a user. |

## A worked example: a bug report command

1. Make a `/bug` slash command with a `description` text option.
2. `defer reply`.
3. `create issue in GitHub repository` `you/your-bot`, with the title `Bug report from` and the user's name, the description from the option, and the token from `GITHUB_TOKEN`.
4. Inside its `then` part, reply with `get issue link of GitHub issue`.
