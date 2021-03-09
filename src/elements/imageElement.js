import Element from "./element";

export default class ImageElement extends Element {
    constructor(web2vr, domElement, layer) {
        super(web2vr, domElement, layer);

        this.currentSrc = null;
        this.changed = false;
        this.entity = document.createElement("a-image");
        this.entity.setAttribute("material", "side", "front");
        // know when image is loaded
        this.loaded = false;
        this.domElement.addEventListener("load", () => {
            this.loaded = true;
            // if image changed update all after image loaded
            if (this.changed) {
                this.changed = false;
                this.web2vr.update();
            }
        });
    }
    updateImage(src) {
        const assetID = this.web2vr.aframe.assetManager.getAsset(src, "img");
        this.entity.setAttribute("id", "IMAGE_" + assetID);

        const isGif = /\.(gif)$/i;
        if (isGif.test(src)) {
            this.entity.setAttribute("material", "shader", "gif");
            this.entity.setAttribute("material", "src", "#" + assetID);
        }
        else {
            this.entity.setAttribute("material", "shader", "flat");
            this.entity.setAttribute("src", "#" + assetID);
        }
    }

    specificUpdate() {
        const src = this.domElement.getAttribute("src");
        if (src != this.currentSrc) {
            if (this.currentSrc) {
                this.loaded = false;
                this.changed = true;
            }
            this.currentSrc = src;
            this.updateImage(this.currentSrc);
        }
    }
}

// TODO: No need to save image copy in assets you can directly read it from the orignal