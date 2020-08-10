export default class Settings {
    constructor() {
        this.scale = 600;
        this.position = { x: 0, y: 2, z: -1 }
        this.rotation = { x: 0, y: 0, z: 0 }
        this.layerStep = 0.0005; // z space between the layers

        this.parentSelector= null;
        this.interactiveTag = "vr-interactable";
        this.ignoreTags = ["BR", "SOURCE", "SCRIPT", "AUDIO", "NOSCRIPT"];

        this.debug = false;
        this.showClipping = false;
        this.forceClipping = false;
        this.experimental = false;

        this.scroll = true;
        this.scrollWindowHeight = 800;
        this.createControllers = true;
        this.raycasterFar = 5;
        this.skybox = true;
        this.border = true;
    }
}                  