---
sidebar_position: 4
title: Roles
---

# Roles

Roles carry permissions and color, and they are how almost every bot decides who is allowed to do what.

<details>
  <summary>Show the whole Roles flyout</summary>

![The Roles subcategory](../media/categories/servers-roles.png)

</details>

## Getting a role

![Get a role](../media/blocks/roles_getone.png)

`get the role with the name equal to ... on the server ...` finds a role by name or ID. IDs are safer, since role names change.

![Highest role](../media/blocks/roles_highest.png)

`role with highest position on the server` gives you the top role, which is useful when checking whether the bot can act on someone.

## Loops

| Block | What it does |
| --- | --- |
| ![for each role](../media/blocks/roles_foreach.png) | Loops over every role in a server. |
| ![current role](../media/blocks/roles_foreach_role.png) | The role being handled. |
| ![for each member with role](../media/blocks/roles_foreachMember.png) | Loops over everyone who has a specific role. |
| ![current member](../media/blocks/roles_currentLoopMember.png) | The member being handled. |

`for each member with the role` is the block behind "announce to everyone with the Subscriber role" and similar features.

## Creating a role

![Create a role](../media/blocks/roles_create.png)

`create new role named ...` takes a name, server, color, position, whether it can be mentioned, and a list of permissions.

![Permission](../media/blocks/misc_permission.png)

`permission ...` is one permission. Put several inside a `create list with` block from [Lists](../lists.md) to grant more than one.

## Reading a role

| Block | Returns |
| --- | --- |
| ![name](../media/blocks/roles_name.png) | The role name. |
| ![id](../media/blocks/roles_id.png) | Its ID. |
| ![position](../media/blocks/roles_position.png) | Its place in the role list. Higher numbers sit higher. |
| ![hex color](../media/blocks/roles_hexColor.png) | Its color, as a hex code. |
| ![created at](../media/blocks/roles_createdAt.png) | When it was created. |
| ![has permission](../media/blocks/roles_hasPermission.png) | Whether the role has a permission. |

## Giving and taking roles

| Block | What it does |
| --- | --- |
| ![add role](../media/blocks/roles_addToMember.png) | Gives a role to a member. |
| ![remove role](../media/blocks/roles_removeFromMember.png) | Takes it away. |
| ![has role](../media/blocks/roles_hasRole.png) | True when a member has the role. |

These three are all an autorole, a reaction role or a level role needs.

## Changing a role

| Block | What it does |
| --- | --- |
| ![rename](../media/blocks/roles_rename.png) | Renames the role. |
| ![set permissions](../media/blocks/roles_setPermissions.png) | Replaces the role's permissions with a list. |
| ![delete](../media/blocks/roles_delete.png) | Deletes the role. |

:::warning
`set permissions` replaces everything, it does not add. To keep the existing permissions, read them first and build a new list that includes them.
:::

## The role hierarchy

Discord will refuse anything that breaks the hierarchy:

- A bot cannot give, take, edit or delete a role that is **above its own highest role**.
- A bot cannot moderate a member whose highest role is above the bot's.

If a role block does nothing, the bot's role is almost always too low. Drag the bot's role higher in Server Settings, Roles.

## Events

For the moment a role is added or removed from a member, see [Member Actions](../Events/member-actions.md).

## A worked example: an autorole

1. `when a member joins a server` from [Server Actions](../Events/server-actions.md).
2. `get the role with the name equal to Member on the server <server the member joined to>`.
3. `add role <that role> to member <member that joined>`.

Store the role ID in a [database](../Databases/simple.md) or a [website dashboard setting](../dashboard.md) so each server can pick its own.
