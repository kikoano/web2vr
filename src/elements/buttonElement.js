import TextElement from "./textElement";

export default class ButtomElement extends TextElement {
    constructor(web2vr, domElement, layer) {
        super(web2vr, domElement, layer);
        this.borderColor = new THREE.Color(0x000000);
        this.borderWidth = 1;
    }

    updateTextPadding() {
        // ignore padding for buttons
    }

    updateText() {
        if (this.domElement.tagName == "INPUT")
            this.textValue = this.domElement.value.replace(/\s{2,}/g, ' ');
    }
}