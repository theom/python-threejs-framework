alheimr
===========

## A 3D Web Framework

Alheimr is a 3D web framework based on [three.js](https://github.com/mrdoob/three.js), [WebSockets](http://dev.w3.org/html5/websockets/), [Tornado](http://www.tornadoweb.org/) and [ZODB](http://www.zodb.org/). It provides all the components you need to build a pure 3D web application, including 3D UI widgets, message passing between components regardless of location, a stable web server (Tornado) and an object oriented database (ZODB).

### Features

The following features have been implemented:

#### Front-end

Three.js based UI widgets:

* Simple line font (including the Icelandic letters).
* Editable text line.
* Text paragraph.
* Button with a text label.
* Checkbox with an editable text label.
* Radio buttons.
* Image loaded using a message from the server (not through an URL).
* File upload.
* Frame that can contain other widgets.
* An HUD.
* Edge navigator that stays hidden at the screen edges until hovered over.

Communication:

* WebSocket with an auto reconnect feature.
* Message based component communication.
* Dynamic code loading using messages.

#### Back-end

The back-end is implemented in Python 3:

* Uses the Tornado web server.
* WebSocket based messages.
* Hierarchical name based and location agnostic message routing.
* Objects persisted using ZODB.
* ZODB runs as a separate process and accessed using ZEO.

### Installation

#### Requirements

#### Procedure

To install the server just run the file 'install' in the install directory. This will download and install Tornado and ZODB in their separate virtual env directories. The script will tell you where the directories were installed.

To start the database server cd into the new 'zodb' directory and run './start' from there.

To start the web server start a new shell, cd into the new 'tornado' directory and run './start' from there. You should see in the database shell a connection message when the web server connects to the database.

Then go to 'localhost:8000' in your browser and try out the examples.

### Examples

For client-side examples look at the create_world method in alheimr/static/js/world.js. There you can find several examples of how to use the UI widgets.
For the server-side, look at the websocket_handler.py file.

