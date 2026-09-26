---
sidebar_position: 6
title: WebSockets
---

# WebSockets

WebSockets keep a live connection open, so both sides can send messages at any time. They are what chats, live dashboards, games and real-time APIs are built on.

The WebSockets subcategory has two halves:

| Half | Use it when |
| --- | --- |
| **Frontend (client)** | Your bot connects to someone else's server, like a live API or a game server. |
| **Backend (server)** | Your bot runs its own server that websites and apps connect to. |

Each half offers two libraries, and they do not mix:

| Library | What it is |
| --- | --- |
| **WebSocket (ws)** | The plain, built-in kind. Links start with `ws://` or `wss://`. |
| **Socket.IO** | Adds named events, rooms and replies on top, but only talks to other Socket.IO apps. |

Pick whichever one the other side uses. If you are building both sides yourself, Socket.IO is usually easier.

## Names

Every connection and every server has a name, `main` by default. All the other blocks take that name, so one bot can hold several connections or run several servers at once: just give each a different name and use it everywhere.

## Events

Both libraries can send **events**: a name plus some data. Socket.IO has them built in. For plain WebSockets, DisFuse sends events as JSON shaped like `{ "event": "chat", "data": ... }`, and the `when ... receives event` blocks read that same shape, so a DisFuse client and a DisFuse server understand each other.

## Hosting a server

A server block opens a port on the machine your bot runs on. Your host has to allow that and tell you which port to use. See [Hosting](../../Help/hosting.md).


## Client: WebSocket (ws)

<details>
  <summary>Show the whole flyout</summary>

![Client: WebSocket (ws)](../media/categories/apps-utils-websockets-client-ws.png)

</details>

Connect to any plain WebSocket server (ws:// or wss:// links)

Every connection has a name, "main" by default. Use the same name in all blocks.

### Connect

| Block | What it does |
| --- | --- |
| ![ws_client_connect](../media/blocks/ws_client_connect.png) | Opens a WebSocket connection to a server (the URL starts with ws:// or wss://). The name lets other blocks use this connection. Put "when connection … receives a message" blocks anywhere to react to it. |
| ![ws_client_waitOpen](../media/blocks/ws_client_waitOpen.png) | Pauses until the connection has finished opening, or until the time runs out. Handy right after connecting, before sending something. |

### Connect with headers, like an API key

| Block | What it does |
| --- | --- |
| ![ws_client_connectAdvanced](../media/blocks/ws_client_connectAdvanced.png) | Opens a WebSocket connection and sends extra headers with it, like an Authorization header with an API key. Leave the subprotocol empty unless the API asks for one. |

### React to the server

| Block | What it does |
| --- | --- |
| ![ws_client_onOpen](../media/blocks/ws_client_onOpen.png) | Runs every time the connection opens, including after it reconnects. A good place to log in or subscribe to things. |
| ![ws_client_onMessage](../media/blocks/ws_client_onMessage.png) | Runs every time the server sends a message |
| ![ws_client_onEvent](../media/blocks/ws_client_onEvent.png) | Runs when the server sends JSON like `{ "event": "chat", "data": ... }` with this event name. Use "event data" inside it. |
| ![ws_client_onClose](../media/blocks/ws_client_onClose.png) | Runs when the connection closes, whether you closed it or the server did |
| ![ws_client_onError](../media/blocks/ws_client_onError.png) | Runs when something goes wrong, like the server being unreachable. Without this block, errors are printed to the console. |

### What the server sent

| Block | What it does |
| --- | --- |
| ![ws_client_message](../media/blocks/ws_client_message.png) | The message the server sent, as text |
| ![ws_client_messageJson](../media/blocks/ws_client_messageJson.png) | The message the server sent, read as JSON. Use the Objects blocks to get keys from it. Empty if the message isn't JSON. |
| ![ws_client_eventData](../media/blocks/ws_client_eventData.png) | The "data" part of the event the server sent. It can be text, a number, an object or a list. |
| ![ws_client_closeInfo](../media/blocks/ws_client_closeInfo.png) | Why the connection closed. Code 1000 is a normal close, 1006 means it dropped without a goodbye. |
| ![ws_client_errorMessage](../media/blocks/ws_client_errorMessage.png) | What went wrong, as text |

### Send to the server

| Block | What it does |
| --- | --- |
| ![ws_client_send](../media/blocks/ws_client_send.png) | Sends a message to the server. Text is sent as it is; objects and lists are sent as JSON. If the connection is still opening, the message is sent as soon as it opens. |

Events are sent as JSON: `{ "event": "chat", "data": ... }`

| Block | What it does |
| --- | --- |
| ![ws_client_sendEvent](../media/blocks/ws_client_sendEvent.png) | Sends `{ "event": name, "data": data }` as JSON. Use this with servers that expect events in that shape — including DisFuse WebSocket servers. |

### Connection status

| Block | What it does |
| --- | --- |
| ![ws_client_isOpen](../media/blocks/ws_client_isOpen.png) | True if the connection is open and ready to send messages |
| ![ws_client_state](../media/blocks/ws_client_state.png) | The connection's status as text: "connecting", "open", "closing" or "closed" |
| ![ws_client_url](../media/blocks/ws_client_url.png) | The URL this connection was opened to |

### Disconnect or reconnect

| Block | What it does |
| --- | --- |
| ![ws_client_disconnect](../media/blocks/ws_client_disconnect.png) | Closes the connection. It won't reconnect by itself after this. Close code 1000 means a normal close. Custom codes must be between 3000 and 4999. |
| ![ws_client_reconnect](../media/blocks/ws_client_reconnect.png) | Closes the connection (if it's open) and connects again to the same URL, with the same settings |


## Client: Socket.IO

<details>
  <summary>Show the whole flyout</summary>

![Client: Socket.IO](../media/categories/apps-utils-websockets-client-sio.png)

</details>

Connect to a server made with Socket.IO (it won't accept plain WebSockets)

Every connection has a name, "main" by default. Use the same name in all blocks.

### Connect

| Block | What it does |
| --- | --- |
| ![sio_client_connect](../media/blocks/sio_client_connect.png) | Connects to a Socket.IO server. The URL usually starts with https:// or http:// — add a path like /chat to the end to join that namespace. The name lets other blocks use this connection. |
| ![sio_client_waitConnected](../media/blocks/sio_client_waitConnected.png) | Pauses until the connection is ready, or until the time runs out |

### Connect with login details, headers and more

| Block | What it does |
| --- | --- |
| ![sio_client_connectAdvanced](../media/blocks/sio_client_connectAdvanced.png) | Connects to a Socket.IO server with extra settings. Leave anything you don't need empty. Login details are what a DisFuse Socket.IO server reads with "login detail … of this client". |

### React to the server

| Block | What it does |
| --- | --- |
| ![sio_client_onConnect](../media/blocks/sio_client_onConnect.png) | Runs every time the connection is made, including after reconnecting |
| ![sio_client_onEvent](../media/blocks/sio_client_onEvent.png) | Runs when the server sends an event with this name. Use "event data" inside it. |
| ![sio_client_onAny](../media/blocks/sio_client_onAny.png) | Runs for every event the server sends, whatever its name. Use "event name" to see which one it was. |
| ![sio_client_onDisconnect](../media/blocks/sio_client_onDisconnect.png) | Runs when the connection is lost or closed |
| ![sio_client_onError](../media/blocks/sio_client_onError.png) | Runs when connecting fails, like when the server is down or rejects the login. Without this block, errors are printed to the console. |

### What the server sent

| Block | What it does |
| --- | --- |
| ![sio_client_eventData](../media/blocks/sio_client_eventData.png) | The data the server sent with the event. It can be text, a number, an object or a list. |
| ![sio_client_eventArgs](../media/blocks/sio_client_eventArgs.png) | Some servers send more than one value with an event. This is all of them, as a list. "event data" is the first one. |
| ![sio_client_eventName](../media/blocks/sio_client_eventName.png) | The name of the event the server sent |
| ![sio_client_disconnectReason](../media/blocks/sio_client_disconnectReason.png) | Why it disconnected, like "io server disconnect" (the server kicked it) or "transport close" (the connection dropped) |
| ![sio_client_errorMessage](../media/blocks/sio_client_errorMessage.png) | Why it couldn't connect, as text |

### Answer an event the server is waiting on

| Block | What it does |
| --- | --- |
| ![sio_client_reply](../media/blocks/sio_client_reply.png) | Answers the event the server sent, if the server is waiting for an answer. Only the first reply is sent. |

### Send events to the server

| Block | What it does |
| --- | --- |
| ![sio_client_emit](../media/blocks/sio_client_emit.png) | Sends an event to the server. The data can be text, a number, an object or a list. If it isn't connected yet, it's sent as soon as it connects. |
| ![sio_client_emitWithReply](../media/blocks/sio_client_emitWithReply.png) | Sends an event and waits for the server to answer it. Use "reply from the server" inside — it's empty if no answer came in time. |
| ![sio_client_replyValue](../media/blocks/sio_client_replyValue.png) | What the server answered with. Empty if it didn't answer in time. |

### Connection status

| Block | What it does |
| --- | --- |
| ![sio_client_isConnected](../media/blocks/sio_client_isConnected.png) | True if the connection is open right now |
| ![sio_client_id](../media/blocks/sio_client_id.png) | The ID the server gave this connection. It changes every time it reconnects. |

### Disconnect or reconnect

| Block | What it does |
| --- | --- |
| ![sio_client_disconnect](../media/blocks/sio_client_disconnect.png) | Closes the connection. It won't reconnect by itself after this. |
| ![sio_client_reconnect](../media/blocks/sio_client_reconnect.png) | Connects again after the connection was closed with "disconnect" |

### Run your own server that websites and apps connect to

Your host must let you open a port for others to reach it


## Server: WebSocket (ws)

<details>
  <summary>Show the whole flyout</summary>

![Server: WebSocket (ws)](../media/categories/apps-utils-websockets-server-ws.png)

</details>

Host a plain WebSocket server. Clients connect to `ws://your-host:port`

Every server has a name, "main" by default. Use the same name in all blocks.

### Start the server

| Block | What it does |
| --- | --- |
| ![ws_server_start](../media/blocks/ws_server_start.png) | Starts a WebSocket server that apps and websites can connect to with `ws://your-host:port`. Most hosts tell you which port you're allowed to use. Put this in "when the bot starts". |
| ![ws_server_stop](../media/blocks/ws_server_stop.png) | Disconnects every client and stops the server |
| ![ws_server_isRunning](../media/blocks/ws_server_isRunning.png) | True if the server has been started and not stopped |

### React to clients

| Block | What it does |
| --- | --- |
| ![ws_server_onConnect](../media/blocks/ws_server_onConnect.png) | Runs every time a new client connects to the server |
| ![ws_server_onMessage](../media/blocks/ws_server_onMessage.png) | Runs every time any client sends the server a message |
| ![ws_server_onEvent](../media/blocks/ws_server_onEvent.png) | Runs when a client sends JSON like `{ "event": "chat", "data": ... }` with this event name. Use "event data" inside it. |
| ![ws_server_onDisconnect](../media/blocks/ws_server_onDisconnect.png) | Runs when a client leaves, for any reason. You can still read its ID and data, but can't send to it anymore. |

### What the client sent

| Block | What it does |
| --- | --- |
| ![ws_server_message](../media/blocks/ws_server_message.png) | The message the client sent, as text |
| ![ws_server_messageJson](../media/blocks/ws_server_messageJson.png) | The message the client sent, read as JSON. Use the Objects blocks to get keys from it. Empty if the message isn't JSON. |
| ![ws_server_eventData](../media/blocks/ws_server_eventData.png) | The "data" part of the event the client sent. It can be text, a number, an object or a list. |
| ![ws_server_closeInfo](../media/blocks/ws_server_closeInfo.png) | Why the client left. Code 1000 or 1001 is a normal close, 1006 means it dropped without a goodbye. |

### Reply to this client

| Block | What it does |
| --- | --- |
| ![ws_server_sendClient](../media/blocks/ws_server_sendClient.png) | Sends a message to this client only. Text is sent as it is; objects and lists are sent as JSON. |
| ![ws_server_sendEventClient](../media/blocks/ws_server_sendEventClient.png) | Sends `{ "event": name, "data": data }` as JSON to this client only |

### Send to everyone

| Block | What it does |
| --- | --- |
| ![ws_server_broadcast](../media/blocks/ws_server_broadcast.png) | Sends a message to everyone connected. "all clients except this one" only works inside a "when a client…" block. |
| ![ws_server_broadcastEvent](../media/blocks/ws_server_broadcastEvent.png) | Sends an event to everyone connected. "all clients except this one" only works inside a "when a client…" block. |

### Send to one client by ID

| Block | What it does |
| --- | --- |
| ![ws_server_sendId](../media/blocks/ws_server_sendId.png) | Sends a message to one client, found by its ID. Works anywhere. |
| ![ws_server_sendEventId](../media/blocks/ws_server_sendEventId.png) | Sends an event to one client, found by its ID. Works anywhere. |

### About this client

| Block | What it does |
| --- | --- |
| ![ws_server_clientInfo](../media/blocks/ws_server_clientInfo.png) | Information about this client. The ID is unique and can be saved and used later with "send to client with ID". |
| ![ws_server_clientQuery](../media/blocks/ws_server_clientQuery.png) | A value from the end of the URL the client connected with. For `ws://host:8080/?token=abc`, the parameter "token" is "abc". |
| ![ws_server_clientHeader](../media/blocks/ws_server_clientHeader.png) | A header the client sent when it connected, like "user-agent" or "authorization" |
| ![ws_server_clientIsConnected](../media/blocks/ws_server_clientIsConnected.png) | True if this client hasn't disconnected yet |

### Remember things about a client

| Block | What it does |
| --- | --- |
| ![ws_server_setData](../media/blocks/ws_server_setData.png) | Remembers something about this client for as long as it's connected, like its username after it logs in |
| ![ws_server_getData](../media/blocks/ws_server_getData.png) | Something you saved about this client with "set … of this client's data" |
| ![ws_server_getDataById](../media/blocks/ws_server_getDataById.png) | Something you saved about a client, found by its ID. Works anywhere. |

### Groups (like chat rooms)

| Block | What it does |
| --- | --- |
| ![ws_server_joinGroup](../media/blocks/ws_server_joinGroup.png) | Groups are like chat rooms: put clients in one, then send a message to everyone in it at once. A client can be in many groups. |
| ![ws_server_inGroup](../media/blocks/ws_server_inGroup.png) | True if this client has been added to the group |
| ![ws_server_sendGroup](../media/blocks/ws_server_sendGroup.png) | Sends a message to every client in the group. Tick "except this client" to skip the one that sent it (only inside a "when a client…" block). |
| ![ws_server_sendEventGroup](../media/blocks/ws_server_sendEventGroup.png) | Sends an event to every client in the group |
| ![ws_server_groupInfo](../media/blocks/ws_server_groupInfo.png) | Who is in a group right now |
| ![ws_server_forEachInGroup](../media/blocks/ws_server_forEachInGroup.png) | Runs the blocks inside once for every client in the group. Inside, "this client" means the one the loop is on. |

### All connected clients

| Block | What it does |
| --- | --- |
| ![ws_server_clientsInfo](../media/blocks/ws_server_clientsInfo.png) | Everyone connected to the server right now |
| ![ws_server_idConnected](../media/blocks/ws_server_idConnected.png) | True if a client with this ID is connected right now |
| ![ws_server_forEachClient](../media/blocks/ws_server_forEachClient.png) | Runs the blocks inside once for every connected client. Inside, "this client" means the one the loop is on. |

### Only let some clients in

| Block | What it does |
| --- | --- |
| ![ws_server_onVerify](../media/blocks/ws_server_onVerify.png) | Runs before a client is let in. Check things like a password in the URL (with "query parameter") and use "reject this connection" to turn them away. Anything saved to the client's data here is kept once they connect. |
| ![ws_server_reject](../media/blocks/ws_server_reject.png) | Turns the client away before it connects, and stops the blocks after it. Only letters, numbers and punctuation are sent in the reason. |

### Disconnect clients

| Block | What it does |
| --- | --- |
| ![ws_server_kick](../media/blocks/ws_server_kick.png) | Closes this client's connection. Close code 1000 means a normal close. Custom codes must be between 3000 and 4999. |
| ![ws_server_kickId](../media/blocks/ws_server_kickId.png) | Closes one client's connection, found by its ID. Works anywhere. |

### Server problems

| Block | What it does |
| --- | --- |
| ![ws_server_onStart](../media/blocks/ws_server_onStart.png) | Runs once the server is up and ready for connections |
| ![ws_server_onError](../media/blocks/ws_server_onError.png) | Runs when the server itself has a problem, like the port already being in use. Without this block, errors are printed to the console. |
| ![ws_server_errorMessage](../media/blocks/ws_server_errorMessage.png) | What went wrong, as text |


## Server: Socket.IO

<details>
  <summary>Show the whole flyout</summary>

![Server: Socket.IO](../media/categories/apps-utils-websockets-server-sio.png)

</details>

Host a Socket.IO server. Websites connect with the Socket.IO library

Every server has a name, "main" by default. Use the same name in all blocks.

### Start the server

| Block | What it does |
| --- | --- |
| ![sio_server_start](../media/blocks/sio_server_start.png) | Starts a Socket.IO server that apps and websites can connect to. "Allow websites" is which websites may connect from a browser: * for any, or a list like https://mysite.com, https://other.com. Put this in "when the bot starts". |
| ![sio_server_stop](../media/blocks/sio_server_stop.png) | Disconnects every client and stops the server |
| ![sio_server_isRunning](../media/blocks/sio_server_isRunning.png) | True if the server has been started and not stopped |

### React to clients

| Block | What it does |
| --- | --- |
| ![sio_server_onConnect](../media/blocks/sio_server_onConnect.png) | Runs every time a new client connects to the server |
| ![sio_server_onEvent](../media/blocks/sio_server_onEvent.png) | Runs when any client sends an event with this name. Use "event data" inside it, and "reply to this event" if the client is waiting for an answer. |
| ![sio_server_onAny](../media/blocks/sio_server_onAny.png) | Runs for every event any client sends, whatever its name. Use "event name" to see which one it was. |
| ![sio_server_onDisconnect](../media/blocks/sio_server_onDisconnect.png) | Runs when a client leaves, for any reason. You can still read its ID and data here. |

### What the client sent

| Block | What it does |
| --- | --- |
| ![sio_server_eventData](../media/blocks/sio_server_eventData.png) | The data the client sent with the event. It can be text, a number, an object or a list. |
| ![sio_server_eventArgs](../media/blocks/sio_server_eventArgs.png) | A client can send more than one value with an event. This is all of them, as a list. "event data" is the first one. |
| ![sio_server_eventName](../media/blocks/sio_server_eventName.png) | Which event the client sent |
| ![sio_server_disconnectReason](../media/blocks/sio_server_disconnectReason.png) | Like "client namespace disconnect" (it left on purpose), "transport close" (the connection dropped) or "server namespace disconnect" (you kicked it) |

### Answer an event the client is waiting on

| Block | What it does |
| --- | --- |
| ![sio_server_reply](../media/blocks/sio_server_reply.png) | Answers the event the client sent, if the client is waiting for an answer ("send event … and wait for a reply"). Only the first reply is sent. |

### Send events to this client

| Block | What it does |
| --- | --- |
| ![sio_server_emitClient](../media/blocks/sio_server_emitClient.png) | Sends an event to this client only |
| ![sio_server_emitClientWithReply](../media/blocks/sio_server_emitClientWithReply.png) | Sends an event to this client and waits for it to answer. Use "reply from the client" inside — it's empty if no answer came in time. |
| ![sio_server_replyValue](../media/blocks/sio_server_replyValue.png) | What the client answered with. Empty if it didn't answer in time. |

### Send to everyone

| Block | What it does |
| --- | --- |
| ![sio_server_emitAll](../media/blocks/sio_server_emitAll.png) | Sends an event to everyone connected. "all clients except this one" only skips someone inside a "when a client…" block. |

### Send to one client by ID

| Block | What it does |
| --- | --- |
| ![sio_server_emitId](../media/blocks/sio_server_emitId.png) | Sends an event to one client, found by its ID. Works anywhere. |

### About this client

| Block | What it does |
| --- | --- |
| ![sio_server_clientInfo](../media/blocks/sio_server_clientInfo.png) | Information about this client. The ID can be saved and used later with "send event to client with ID". |
| ![sio_server_clientHandshake](../media/blocks/sio_server_clientHandshake.png) | Something the client sent when it connected: its login details (the auth object), a value from its URL, or a header like user-agent |
| ![sio_server_clientIsConnected](../media/blocks/sio_server_clientIsConnected.png) | True if this client hasn't disconnected yet |

### Remember things about a client

| Block | What it does |
| --- | --- |
| ![sio_server_setData](../media/blocks/sio_server_setData.png) | Remembers something about this client for as long as it's connected, like its username after it logs in |
| ![sio_server_getData](../media/blocks/sio_server_getData.png) | Something you saved about this client with "set … of this client's data" |
| ![sio_server_getDataById](../media/blocks/sio_server_getDataById.png) | Something you saved about a client, found by its ID. Works anywhere. |

### Rooms (like chat rooms)

| Block | What it does |
| --- | --- |
| ![sio_server_joinRoom](../media/blocks/sio_server_joinRoom.png) | Rooms are like chat rooms: put clients in one, then send an event to everyone in it at once. A client can be in many rooms. |
| ![sio_server_joinRoomId](../media/blocks/sio_server_joinRoomId.png) | Moves a client in or out of a room, found by its ID. Works anywhere. |
| ![sio_server_inRoom](../media/blocks/sio_server_inRoom.png) | True if this client is in the room |
| ![sio_server_emitRoom](../media/blocks/sio_server_emitRoom.png) | Sends an event to every client in the room. Tick "except this client" to skip the one that sent it (only inside a "when a client…" block). |
| ![sio_server_roomInfo](../media/blocks/sio_server_roomInfo.png) | Who is in a room right now |
| ![sio_server_forEachInRoom](../media/blocks/sio_server_forEachInRoom.png) | Runs the blocks inside once for every client in the room. Inside, "this client" means the one the loop is on. |

### All connected clients

| Block | What it does |
| --- | --- |
| ![sio_server_clientsInfo](../media/blocks/sio_server_clientsInfo.png) | Everyone connected to the server right now |
| ![sio_server_idConnected](../media/blocks/sio_server_idConnected.png) | True if a client with this ID is connected right now |
| ![sio_server_forEachClient](../media/blocks/sio_server_forEachClient.png) | Runs the blocks inside once for every connected client. Inside, "this client" means the one the loop is on. |

### Only let some clients in

| Block | What it does |
| --- | --- |
| ![sio_server_onAuth](../media/blocks/sio_server_onAuth.png) | Runs before a client is let in. Check its login details and use "reject this connection" to turn it away. You can also save client data or join rooms here. |
| ![sio_server_reject](../media/blocks/sio_server_reject.png) | Turns the client away before it connects, and stops the blocks after it. The client sees the reason in its "fails to connect" event. |

### Disconnect clients

| Block | What it does |
| --- | --- |
| ![sio_server_kick](../media/blocks/sio_server_kick.png) | Closes this client's connection. It won't reconnect by itself. |
| ![sio_server_kickId](../media/blocks/sio_server_kickId.png) | Closes the connection of one client (by ID) or of everyone in a room. Works anywhere. |

### Server started

| Block | What it does |
| --- | --- |
| ![sio_server_onStart](../media/blocks/sio_server_onStart.png) | Runs once the server is up and ready for connections |


## A worked example: a live Discord feed for a website

1. In `when the bot starts`, `start Socket.IO server` `main` on the port your host gives you.
2. In `when a message is received`, `send event` `message` with the message content as data `to all clients on server main`.
3. On your website, connect with the Socket.IO library and listen for `message`. Every Discord message now shows up live on the page.
