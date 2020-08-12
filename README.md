
# Web2VR
<p align="center">
Video showing Web2VR features
<br>
<a href ="">
<img src="">
</a>
</p>
Web2VR is library for A-Frame web framework. Dynamically translate HTML and CSS to A-Frame 3D world for virtual reality.

## Examples
You can view the examples with VR or Non-VR.
***Controls for VR:***
Use trigger button to click.
Use grip button to drag.
Use both grip buttons to stretch.
***Controls for Non-VR:***
Use WASD keys to move.
User can move camera (look around), by holding left mouse button and moving mouse.
Use left mouse button to click.
### AR
DEMO
Simple use of [AR.js](https://github.com/AR-js-org/AR.js) [hiro image](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png) marker to display web2vr elements. User needs camera.
### Room
DEMO
3D room model with lots of bootstrap examples placed everywhere. Examples are taken from [Bootsnipp](https://bootsnipp.com/). Each example shows a feature of Web2VR. Low-end computers may get lower performance because of the room model and lighting.
### Video platform
DEMO
This is full working web app of video platform that is entirely written with HTML, CSS and JS  then translated to web2vr elements.
Entire web app has dynamic elements to show that Web2VR works with dynamic elements.
If the user is viewing in Non-VR then the watch will be shown in the top left corner of the window.
### Tests
DEMO
Left screen is normal browser HTML while right side is translated version in A-Frame.
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
Install and use by directly by including the [browser files](https://github.com/kikoano/web2vr/master/dist):
```html
<!DOCTYPE html>
<html>

<head>
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script src="/dist/web2vr.min.js"></script>
</head>

<body>
    <div id="html-container">
	Welcome to Web2VR!
    </div>
    <script>
        const web2vr = new Web2VR("#html-container");
        web2vr.start();
    </script>
</body>

</html>
```
Check tests and examples for more.
#### npm
IN THE WORKS
Install via npm:
```
npm install web2vr
```
Then import before DOM elements are created and use it after DOM elements are created.
```js
import "aframe";
import Web2VR from "web2vr";
```
### Parameters
```js
new Web2VR("css selector",{"parameters go here"});
```
This is the list of the available parameters.
| Parameter | Default | Description |
|-----------|---------|-------------|
| **scale** | 600 | Set scale. The bigger the scale it is the smaller the web2vr elements will be in the 3D world. |
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
| **scroll** | true | Enable scroll support. |
| **scrollWindowHeight** | 800 | Scroll window height for the web2vr container. |
| **createControllers** | true  |Create super hands controllers. |
| **raycasterFar**| 5 | Maximum distance for the raycaster laser. |
| **skybox** | true | Create default skybox if there is no skybox in the scene. |
| **border**| true | Enable border support. |
## Compatibility
A-frame version 1.0.4 was used for developing Web2VR. Newer versions should work fine but older may not.
For now borders are disabled on mobile VR like Oculus Go and Oculus Quest.
Everything has been tested on desktop VR. More simple examples also work on Oculus Go with fine performance. I dont have Oculus Quest so i cannot confirm if everything works there.
## A-Frame community components
This library uses [Super hands](https://github.com/wmurphyrd/aframe-super-hands-component), [Super keyboard](https://github.com/supermedium/aframe-super-keyboard) and [GIF Shader](https://github.com/mayognaise/aframe-gif-shader) A-Frame community components.
## License
This program is free software and is distributed under an [MIT License](LICENSE).