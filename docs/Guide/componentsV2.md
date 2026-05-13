# Components V2

## What is Components V2?

Components V2 is the official name of a new components system made by Discord that allows bots to send messages with components (buttons, menus, and images) in the middle of messages mixed along with text. This adds a lot more flexibility to bot messages and kind of lets you "build" your message with different components however you want. It was released to all Discord bots in March of 2025, and Components V2 support was added to DisFuse in May 2026.

### Examples of messages made with Components V2:

![alt text](media/componentsv2/image-9.png)
![alt text](media/componentsv2/image-10.png)

:::info
If you're curious, you can look at the [official docs from Discord](https://docs.discord.com/developers/components/reference) about components, but this page is meant for DisFuse users specifically to teach you how to use component blocks in DisFuse.
:::

## How to Use Components in DisFuse

After Components V2 blocks were added to DisFuse, messages are now fully based on components. You no longer have to specify a "content" or "embeds" of the message. Instead, you can build your message however you want using components.

All message components are inside of the "Components" category in the toolbox. When you click on the category, it shows the base components like text displays, containers, sections, and others. Also, under that category, there are subcategories for buttons and menus.

![Components category in DisFuse](media/componentsv2/image-2.png)

    **Learn more about each type of component:**

<details>
    <summary>Containers</summary>

    Containers are basically the same thing as embeds, if you are familiar with the legacy system. They contain other components inside it, and have a different background color than the rest of the message. You can also set an accent color which would change the color of the left border of the container. The only difference between embeds and containers is that containers support components V2 inside them. You cannot put containers inside other containers.

    ![alt text](media/componentsv2/image-11.png)
    ![alt text](media/componentsv2/image.png)

</details>
<details>
    <summary>Text displays</summary>

    This is just regular text. If you want to send a normal message with just regular text, you would only use this component without anything else. Text displays can go anywhere: inside containers, or by itself. You can also have text displays before or after other components, so the text can be below the container or sections. This is different from the old system, where the message content would always be above the embed or buttons/menus.

![alt text](media/componentsv2/image-12.png)
![alt text](media/componentsv2/image-1.png)

</details>
<details>
    <summary>Sections</summary>

    You can use sections to have an image or a button on the right side of the message. Sections can go anywhere: inside containers, or by itself.

    **Section with thumbnail**: The text will be on the left side, and there will be a small image on the right side, next to the text.

    ![alt text](media/componentsv2/image-13.png)
    ![alt text](media/componentsv2/image-3.png)

    **Section with button**: The text will be on the left side, and there will be a button on the right side, next to the text. This button will be clickable by users and you can respond to them with the "when a button is clicked" event block, just like regular buttons in the old system.

    ![alt text](media/componentsv2/image-14.png)
    ![alt text](media/componentsv2/image-4.png)

</details>
<details>
    <summary>Separators</summary>

    Separators simply add a small or large gap between different components. For example, you can add this in between text displays to look like there is a heading at the top of your message (you can put "# " before your text to make it large), or you can add a separator in between images and sections, or any type of component. You can also check the "show line" for it to actually show a separating line between two components. If you don't check "show line" it will just be an empty gap between components.

    ![alt text](media/componentsv2/image-15.png)
    ![alt text](media/componentsv2/image-5.png)

</details>
<details>
    <summary>Media galleries</summary>

    Media galleries allow you to have images in your message. You can have multiple images inside one gallery, and you can have galleries anywhere in your message, before or after other components.

    ![alt text](media/componentsv2/image-16.png)
    ![alt text](media/componentsv2/image-6.png)

</details>
<details>
    <summary>Files</summary>

    You can use file components to add files in the middle of your message. The "Add file from URL/path" block will go in the **files** part of your message, and the "show file with name" block should go in the **components** part of your message, wherever you want it to show. This is necessary because of the way Discord handles file attachments. The file names should exactly match with each other, and you should include a file extension in the name (like .txt or .pdf).

    ![alt text](media/componentsv2/image-18.png)
    ![alt text](media/componentsv2/image-8.png)

</details>
<details>
    <summary>Interactive rows</summary>

    Interactive rows allow you to have buttons or menus anywhere in your message. Unlike sections, this will put the buttons or menus on the left side instead of the right side, with no text next to them. If you are familiar with the old system, this is the same as having buttons and menus at the bottom of your message. But with components V2, you can have them anywhere, even at the very top, or between different components.

![alt text](media/componentsv2/image-20.png)
![alt text](media/componentsv2/image-7.png)

</details>

Any of these components can go inside of the "components" part of a block when you want to send a message, and it does not matter what order they are in.

## Buttons and Menus

### Creating buttons and menus

You can use the blocks called "add a button" or "add a menu" _(or different types of menus)_ to add a button or menu inside of an interactive row. You <u>**cannot**</u> put buttons or menus directly inside of a message's components. They need to go inside of an interactive row.

:::info
If you are using a **section with button** component, you do not need to use the "add a button" block because it is already built into the section.
:::

### Responding to buttons and menus

If you are familiar with the old system, responding to buttons and menus has not changed at all with Components V2. You can still use "when a button is clicked" or "when a menu is clicked" events and check the ID to respond to the interaction.

![alt text](media/componentsv2/image-21.png)

## More examples of Components V2, with blocks

**Have multiple files in one message:**
![alt text](media/componentsv2/image-23.png)
![alt text](media/componentsv2/image-22.png)

---

**One section with thumbnail and one section with button:**
![alt text](media/componentsv2/image-26.png)
![alt text](media/componentsv2/image-25.png)

---

**Text displays and three sections with buttons:**
![alt text](media/componentsv2/image-29.png)
![alt text](media/componentsv2/image-28.png)

---

**Media gallery in a container:**

![alt text](media/componentsv2/image-31.png)
![alt text](media/componentsv2/image-30.png)

---

**Interactive rows inside of a container:**
:::info
You can even use the special menus (channel menus, role menus, user menus, etc.) to have the options automatically pre-fill for you!. For example, you can have a channel menu to allow the user to select which channels they want to have access to, or a role menu to select which roles they want.
:::
![alt text](media/componentsv2/image-32.png)
![alt text](media/componentsv2/image-33.png)

---

Those were just a few things you can do with components V2! You can basically build messages however you want and the possibilities are endless. If you have any more questions, feel free to join our [Discord server](https://dsc.gg/disfuse) and create a post in the support channel if you need any help.
