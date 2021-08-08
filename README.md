
# Web2VR
<p float="left">
 <img width=270 src="https://raw.githubusercontent.com/kikoano/web2vr/master/docs/images/show.gif">
 <img width=270 src="https://raw.githubusercontent.com/kikoano/web2vr/master/docs/images/scroll.gif">
 <img width=270 src="https://raw.githubusercontent.com/kikoano/web2vr/master/docs/images/animations.gif">
 <img width=270 src="https://raw.githubusercontent.com/kikoano/web2vr/master/docs/images/drag.gif">
 <img width=270 src="https://raw.githubusercontent.com/kikoano/web2vr/master/docs/images/input.gif">
 <img width=270 src="https://raw.githubusercontent.com/kikoano/web2vr/master/docs/images/attach.gif">
</p>
Web2VR is library for A-Frame web framework. Dynamically translate HTML and CSS to A-Frame 3D world for virtual reality.
<br>
<p align="center">
<a href ="https://www.youtube.com/watch?v=4iTngVEsOqs">
  <img width=500 src="https://raw.githubusercontent.com/kikoano/web2vr/master/docs/images/play title.png">
</a>
<br>
Video showing Web2VR features
</p>

## Examples
You can view the examples with VR or Non-VR. Drag and stretch features only available for VR.

***Controls for VR:***
- Use trigger button to click.
- Use grip button to drag.
- Use both grip buttons to stretch.

***Controls for Non-VR:***
- Use WASD keys to move.
- User can move camera (look around), by holding left mouse button and moving mouse.
- Use left mouse button to click.

### AR

[DEMO](https://kikoano.github.io/web2vr/examples/ar)

Simple use of [AR.js](https://github.com/AR-js-org/AR.js) with [hiro image](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png) marker to display web2vr elements. User needs camera.
### Room

[DEMO](https://kikoano.github.io/web2vr/examples/room)

Room 3D model with lots of bootstrap examples placed everywhere. Examples are taken from [Bootsnipp](https://bootsnipp.com/). Each example shows a feature of Web2VR. Low-end computers may get lower performance because of the room model and lighting.
### Video platform

[DEMO](https://kikoano.github.io/web2vr/examples/video%20platform)

This is full working web app of video platform that is entirely written with HTML, CSS and JS then translated to web2vr elements.
Entire web app has dynamic elements to show that Web2VR works with dynamic elements.
If the user is viewing in Non-VR then the watch will be shown in the top left corner of the window.
If you click 360 video as your first video to watch it wont load because of aframe-environment-component bugs.
### Tests

[DEMO](https://kikoano.github.io/web2vr/tests)

Left window is normal browser HTML while right side is translated version in A-Frame.
## Features
 - 90% CSS support
 - AR support
 - CSS transitions and animations
 - GIF images
 - SVG and canvas
 - CSS hover
 - Click interaction
 - Dynamic elements
 - Experimental CSS gradient
 - Normal and 360 videos
 - Scroll support
 - Drag and Stretch HTML
 - Keyboard support
 - Attach HTML to models
 - And more

## Usage
### Example
#### Browser
Install and use directly by including the [browser files](https://github.com/kikoano/web2vr/tree/master/dist):
```html
<!DOCTYPE html>
<html>

<head>
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/web2vr@1.1.1/dist/web2vr.min.js"></script>
    <style>
        #html-container{
            position: absolute;
            width: 200px;
            background-color: gainsboro;
            text-align: center;
        }
    </style>
</head>

<body>
    <div id="html-container">
        Welcome to Web2VR!
        <button id="btn">Click me!</button>
        <div id="info"></div>
    </div>
    <script>
        document.getElementById("btn").onclick = () => {
            document.getElementById("info").innerText = "Button Clicked!";
        };
        const web2vr = new Web2VR("#html-container");
        web2vr.start();
    </script>
</body>

</html>
```
Result of the code:

<img src="https://raw.githubusercontent.com/kikoano/web2vr/master/docs/images/simple demo.gif">

See working code [source](https://glitch.com/edit/#!/leaf-serious-blade) and [live example](https://leaf-serious-blade.glitch.me).

Check tests and examples for more.
#### npm
Install via npm:
```
npm install web2vr
```
Be sure to have aframe installed.
Then import and use.
```js
import "aframe";
import "web2vr";
```
### Parameters
```js
new Web2VR("css selector",{"parameters go here"});
```
This is the list of the available parameters.
| Parameter | Default | Description |
|-----------|---------|-------------|
| **scale** | 600 | Set scale. The bigger the scale is the smaller the web2vr elements will be in the 3D world. |
| **position** | { x:  0, y:  2, z: -1 } | Set starting position. |
| **rotation** | { x:  0, y:  0, z:  0 } | Set starting rotation. |
| **layerStep** | 0.0005 | Set z space between the layers. |
| **parentSelector** | null | Attach web2vr container element to parent entity. |
| **interactiveTag**| "vr-interactable" | Interactive class for the web2vr elements. If you are using your own custom controllers you have to tell the raycaster to react on objects with this interactive class.|
| **ignoreTags** | ["BR", "SOURCE", "SCRIPT", "AUDIO", "NOSCRIPT"] | DOM element tags to be ignored while creating web2vr elements. |
| **debug** | false | Show logs and stats. |
| **showClipping** | false | Show clipping planes. |
| **forceClipping** | false | Force clipping. |
| **experimental** | false | Enable different method of rendering that can show css gradients but with cost of performance. Needs to have [html2canvas](https://html2canvas.hertzen.com/) library included. |
| **scroll** | true | Enable scroll support if needed. |
| **scrollWindowHeight** | 800 | Set scroll window height for the web2vr container element. |
| **createControllers** | true  |Create super hands controllers. |
| **raycasterFar**| 5 | Maximum distance for the raycaster laser. |
| **skybox** | true | Create default skybox if there is no skybox in the scene. |
| **border**| true | Enable CSS border support. For now all borders width is 1 due to limitations of WebGL line width. |
## Compatibility
For A-Frame 1.2.0 and newer versions use Web2VR 1.1.1 or newer version.

For A-Frame 1.0.4 and older versions use Web2VR 1.0.1 version.

Do not use A-Frame version 1.1.0 it breaks Web2VR code.

Everything has been tested on desktop VR. Desktop Chrome version 89.0.4389.82 and Firefox version 86.0 have been used for testing. Reported to work in Oculus Quest 2, as well.

## A-Frame community components
This library uses [Super hands](https://github.com/wmurphyrd/aframe-super-hands-component), [Super keyboard](https://github.com/supermedium/aframe-super-keyboard) and [GIF Shader](https://github.com/mayognaise/aframe-gif-shader) A-Frame community components.
## License
This program is free software and is distributed under an [MIT License](LICENSE).
