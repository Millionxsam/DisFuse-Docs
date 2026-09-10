---
sidebar_position: 4
title: Modals
---

# Modals

A modal is a pop-up form. Your bot shows it, the user fills it in, and your bot receives everything they entered at once. It is the right tool whenever a slash command would need more than two or three options, or when the answer should stay private.

<details>
  <summary>Show the whole Modals flyout</summary>

![The Modals subcategory](../Blocks/media/categories/interactions-modals.png)

</details>

:::warning
A modal can only be shown **in response to an interaction**: a slash command, a button click, a select menu, or a context menu. It cannot be shown from a message event or on a timer.

A modal also cannot be shown in response to another modal, and it cannot be shown after you have already replied or deferred.
:::

## Showing a modal

![Show modal](../Blocks/media/blocks/modal_show.png)

`show modal` displays it. This is your response to the interaction, so do not reply or defer before it.

![Create modal](../Blocks/media/blocks/modal_create.png)

`create modal with title ... custom ID ... components ...` builds the form. The **custom ID** is how you recognize the submission later.

## Building the form

![Add component with label](../Blocks/media/blocks/modalc_label.png)

`add component with label` is the wrapper around every input. It gives the field its label and an optional description, and holds the input itself.

![Add text to the modal](../Blocks/media/blocks/modalc_textDisplay.png)

`add text to the modal` adds a paragraph of explanation with no input attached.

A modal holds up to 5 of these.

## The inputs

Plug one of these into a label block.

| Block | What the user does |
| --- | --- |
| ![text input](../Blocks/media/blocks/modalc_textInput.png) | Types text. Short for one line, paragraph for many. |
| ![select menu](../Blocks/media/blocks/modalc_stringSelect.png) | Picks from options you define. |
| ![user select](../Blocks/media/blocks/modalc_userSelect.png) | Picks members. |
| ![role select](../Blocks/media/blocks/modalc_roleSelect.png) | Picks roles. |
| ![mentionable select](../Blocks/media/blocks/modalc_mentionableSelect.png) | Picks members or roles. |
| ![channel select](../Blocks/media/blocks/modalc_channelSelect.png) | Picks channels. Restrict the kinds with `channel type` blocks. |
| ![file upload](../Blocks/media/blocks/modalc_fileUpload.png) | Uploads between 1 and 10 files. |
| ![radio buttons](../Blocks/media/blocks/modalc_radioGroup.png) | Picks exactly one of 2 to 10 choices. |
| ![checkboxes](../Blocks/media/blocks/modalc_checkboxGroup.png) | Ticks any number of choices. |
| ![single checkbox](../Blocks/media/blocks/modalc_checkbox.png) | Ticks one box, for a yes or no. |

Every input has a **custom ID**, which is how you read its value back. They have to be unique within the modal.

### Options

![Select option](../Blocks/media/blocks/modalc_selectOption.png)

`add an option` fills a select menu: label, description, emoji, value, and whether it starts selected.

![Choice option](../Blocks/media/blocks/modalc_choiceOption.png)

`add an option` for radio buttons and checkboxes: label, description, value, and whether it starts selected.

## Handling the submission

![When a modal is submitted](../Blocks/media/blocks/modal_handle_interaction.png)

`when a modal is submitted` fires for every modal your bot shows, so check the custom ID first.

![Custom ID of the modal](../Blocks/media/blocks/modal_get_customId.png)
![User that submitted](../Blocks/media/blocks/modal_get_author.png)

`custom ID of the modal` and `user that submited the modal` tell you which form came back and who sent it.

### Reading the values

Each input type has its own block. Give it the custom ID you set on the input.

| Block | Returns |
| --- | --- |
| ![text value](../Blocks/media/blocks/modal_get_input_value.png) | The text from a text input. |
| ![select values](../Blocks/media/blocks/modalc_getStringSelectValues.png) | The values chosen in a select menu. |
| ![selected users](../Blocks/media/blocks/modalc_getSelectedUsers.png) | The users chosen. |
| ![selected members](../Blocks/media/blocks/modalc_getSelectedMembers.png) | The same people, as members of the server. |
| ![selected roles](../Blocks/media/blocks/modalc_getSelectedRoles.png) | The roles chosen. |
| ![selected channels](../Blocks/media/blocks/modalc_getSelectedChannels.png) | The channels chosen. |
| ![selected mentionables](../Blocks/media/blocks/modalc_getSelectedMentionables.png) | The users and roles chosen. |
| ![uploaded files](../Blocks/media/blocks/modalc_getUploadedFileUrls.png) | Links to the files uploaded. |
| ![radio value](../Blocks/media/blocks/modalc_getRadioGroup.png) | The value of the radio button chosen. |
| ![checkbox values](../Blocks/media/blocks/modalc_getCheckboxGroup.png) | The values of the boxes ticked. |
| ![single checkbox](../Blocks/media/blocks/modalc_getCheckbox.png) | True when the box was ticked. |

Most of these return a list, so read them with the [Lists](../Blocks/lists.md) blocks.

## Replying

A modal submission is an interaction like any other, and it has the same 3 second limit. Use `reply to the interaction`, or `defer reply` and then `edit the bot's reply`.

## A worked example: a suggestion form

1. Register a slash command `suggest` with no options.
2. In the handler, `show modal` with `create modal`:
   - title "New suggestion", custom ID `suggestion_form`
   - a label "Title" holding a short text input, custom ID `title`
   - a label "Details" holding a paragraph text input, custom ID `details`
   - a label "Category" holding a select menu, custom ID `category`, with options for Feature, Bug and Other
3. In `when a modal is submitted`:
   - Check the custom ID is `suggestion_form`.
   - Read the three values.
   - Send a message to your suggestions channel with a container holding the title, the category and the details.
   - React to it with 👍 and 👎.
   - Reply, visible only to the user, with "Thanks, your suggestion has been posted."

:::tip
Modals are much friendlier than a slash command with six options. The user sees labels and descriptions, and nothing they type is visible in the channel while they type it.
:::
