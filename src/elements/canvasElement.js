import Element from "./element";

export default class CanvasElement extends Element {
    constructor(web2vr, domElement, layer) {
        super(web2vr, domElement, layer);

        this.imageId = null;
        this.entity = document.createElement("a-image");
    }

    updateImage(src) {
        const assetId = this.web2vr.aframe.assetManager.getAsset(src, "img");

        // remove old image if there is new image
        if (this.imageId && this.imageId != assetId)
            this.web2vr.aframe.assetManager.removeAsset(this.imageId);

        this.entity.setAttribute("id", "IMAGE_" + assetId);
        this.entity.setAttribute("src", "#" + assetId);
        this.imageId = assetId;
    }

    specificUpdate() {
        this.updateImage(this.domElement.toDataURL());
    }
}