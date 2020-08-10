import Element from "./element";
import Helper from "../utils/helper";

export default class ContainerElement extends Element {
    constructor(web2vr, domElement, layer, textOnly = false) {
        super(web2vr, domElement, layer);
        this.textOnly = textOnly;
        this.entity = document.createElement("a-plane");

        // if hyperlink trigger a click event
        if (this.domElement.tagName == "A") {
            this.entity.addEventListener("click", () => { console.log("Link clicked!", this.domElement.click()); });
        }

        if (!this.textOnly) {
            // show back plane for the main container
            if (this.domElement == this.web2vr.container)
                this.entity.setAttribute("material", "side", "double");

            // only needed for experimental background
            this.expImageId = null;
            this.oldBackgroundImage = null;
            this.oldDomPosition = null;
        }
    }

    specificUpdate() {
        if (!this.textOnly) {
            const backgroundColor = this.style.backgroundColor;
            let backgroundImage = this.style.backgroundImage; // to get 1:1 as html have to use background-size: cover; or use experimental

            if (backgroundImage != "none") {
                // cannot use animations that require update to be called every frame. html2canvas is very performance heavy.
                if (this.web2vr.settings.experimental) {
                    if ((backgroundImage != this.oldBackgroundImage || (this.oldDomPosition && !this.position.equalsDOMPosition(this.oldDomPosition)))) {
                        let id = this.domElement.id;
                        let customId = false;
                        if (!id) {
                            customId = true;
                            id = "html2canvas-" + this.web2vr.html2canvasIDcounter++;
                            this.domElement.id = id;
                        }

                        html2canvas(this.domElement, {
                            onclone: (clone) => {
                                const style = document.createElement('style');

                                clone.head.appendChild(style);
                                // ignoring opacity because we use opacity from aframe
                                style.sheet.insertRule(`
                    #${id} {
                        opacity: 1;
                    }`);
                                // hide the text
                                style.sheet.insertRule(`
                    #${id} {
                        color: transparent;
                    }`);
                                // hide the children elements
                                style.sheet.insertRule(`
                    #${id} > * {
                        display:none
                    }`);
                                // vr-span has to be block so it can render properly
                                style.sheet.insertRule(`
                    #${id} > .vr-span {
                        display:block
                    }`);
                                if (customId)
                                    this.domElement.removeAttribute("id");
                            }
                        }).then(canvas => {
                            if (this.expImageId)
                                this.web2vr.aframe.assetManager.removeAsset(this.expImageId);
                            this.expImageId = this.web2vr.aframe.assetManager.getAsset(canvas.toDataURL(), "img");
                            this.entity.setAttribute("material", "src: #" + this.expImageId);
                        });
                        this.oldBackgroundImage = backgroundImage;
                    }
                }
                else if (Helper.isUrl(backgroundImage)) {
                    // remove url("")
                    backgroundImage = backgroundImage.substring(backgroundImage.lastIndexOf('(\"') + 2, backgroundImage.lastIndexOf('\")'));
                    this.entity.setAttribute("material", "src: #" + this.web2vr.aframe.assetManager.getAsset(backgroundImage, "img"));
                    // transparent images support
                    this.entity.setAttribute("material", "transparent", true);
                }
            }
            else {
                // if there is no backgroundColor dont renders
                if (backgroundColor == "rgba(0, 0, 0, 0)") {
                    this.entity.setAttribute("material", "visible", false);
                }
                else {
                    this.entity.setAttribute("material", "visible", true);
                    this.entity.setAttribute("color", backgroundColor);
                    this.updateOpacity();
                }
            }
            this.oldDomPosition = this.position.domPosition;
        }
    }

    updateOpacity() {
        const alpha = parseFloat(this.style.backgroundColor.split(',')[3]);
        // calculate final alpha channel result
        if (alpha) {
            let a = alpha;
            let b = this.style.opacity;
            if (a < b) {
                b = alpha;
                a = this.style.opacity;
            }
            this.entity.setAttribute("opacity", a - (a - b));
        }
    }
}