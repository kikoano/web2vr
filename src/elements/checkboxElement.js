import Element from "./element";

export default class CheckBoxElement extends Element {
    constructor(web2vr, domElement, layer) {
        super(web2vr, domElement, layer);
        this.borderColor = new THREE.Color(0x000000);
        this.borderWidth = 1;
        this.entity = document.createElement("a-plane");
        this.domElement.addEventListener("click", (() => {
            this.specificUpdate();
        }).bind(this))
    }

    specificUpdate() {
        if (this.domElement.checked)
            this.entity.setAttribute("color", "#0075FF");
        else
            this.entity.setAttribute("color", "#FFFFFF");
    }
}