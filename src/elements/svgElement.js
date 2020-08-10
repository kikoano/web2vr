import Element from "./element";

export default class SvgElement extends Element {
    constructor(web2vr, domElement, layer) {
        super(web2vr, domElement, layer);

        this.imageId = null;
        this.entity = document.createElement("a-image");
    }

    svgToImage() {
        const svgString = new XMLSerializer().serializeToString(this.domElement);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = this.position.domPosition.width * 2;
        canvas.height = this.position.domPosition.height * 2;

        const DOMURL = self.URL || self.webkitURL || self;
        const img = new Image();
        const svg = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
        const url = DOMURL.createObjectURL(svg);

        img.onload = () => {
            if (this.domElement.style.width)
                ctx.drawImage(img, 0, 0, canvas.width*2, canvas.height*2);
            else
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            DOMURL.revokeObjectURL(url);
            this.updateImage(canvas.toDataURL());
            canvas.remove();
        };
        img.src = url;
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
        this.svgToImage();
    }
}