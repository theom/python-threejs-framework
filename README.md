allteria
===========

## A 3D Web Framework

Allteria is a 3D web framework based on [three.js](https://github.com/mrdoob/three.js), [WebSockets](http://dev.w3.org/html5/websockets/), [Tornado](http://www.tornadoweb.org/) and [ZODB](http://www.zodb.org/). It provides all the components you need to build a pure 3D web application, including 3D UI widgets, message passing between components regardless of location, a stable web server (Tornado) and an object oriented database (ZODB).

### Features

The following features have been implemented:

#### Front-end

Three.js based UI widgets:

* Simple line font (including the Icelandic letters).
* Editable text line.
* Text paragraph.
* Button with a text label.
* Checkbox with an editable text label.

Server communications:

* WebSocket with an auto reconnect feature.

#### Back-end

The back-end is implemented in Python 3:

* Uses the Tornado web server.
* Very basic handling of socket messages.
* ZODB (ZEO) database connection from the web server.
* ZODB runs as a separate process and accessed using ZEO.

### Examples

For client-side examples look at the create_world method in allteria/static/js/world.js. There you can find several examples of how to use the UI widgets.

You don't need the server up and running to get the examples working - just open the file allteria/static/index.html in your browser.
