import Element from "./element";

export default class RadioElement extends Element {
    constructor(web2vr, domElement, layer) {
        super(web2vr, domElement, layer);
        this.borderColor = new THREE.Color(0x000000);
        this.borderWidth = 1;
        this.entity = document.createElement("a-circle");
        this.domElement.addEventListener("click", (() => {
            this.web2vr.update();
        }).bind(this));
    }

    specificUpdate() {
        this.entity.setAttribute("radius", this.position.width / 2);
        
            if (this.domElement.checked)
                this.entity.setAttribute("color", "#0075FF");
            else
                this.entity.setAttribute("color", "#FFFFFF");
        }
    }