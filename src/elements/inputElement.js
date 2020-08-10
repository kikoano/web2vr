import TextElement from "./textElement";

export default class InputElement extends TextElement {
    constructor(web2vr, domElement, layer) {
        super(web2vr, domElement, layer);
        this.borderColor = new THREE.Color(0x000000);
        this.borderWidth = 1;
        this.active = false;

        // update when there is change of value
        this.domElement.addEventListener("input", () => this.update());
        // when clicked make it active input for the keyboard and position the keyboard relative to camera
        this.entity.addEventListener("click", () => {
            const camera = this.web2vr.aframe.scene.camera.parent;
            const keyboard = this.web2vr.aframe.keyboard.object3D;

            keyboard.position.copy(camera.position);
            keyboard.rotation.copy(camera.rotation);
            keyboard.rotation.z = 0;
            keyboard.rotation.x = THREE.Math.degToRad(-30);
            keyboard.translateX(-0.24);
            keyboard.translateY(-0.1);
            keyboard.translateZ(-0.6);
            keyboard.visible = true;

            if (this.web2vr.aframe.keyboard.activeInput){
                this.web2vr.aframe.keyboard.activeInput.element.active = false;
                // update web2vr where activeInput is located
                this.web2vr.aframe.keyboard.activeInput.element.web2vr.update();
            }
            this.active = true;

            this.web2vr.aframe.keyboard.activeInput = this.domElement;
            this.web2vr.update();
        })
    }

    updateText() {
        const value = this.domElement.value;
        if (value)
            this.textValue = value;
        else
            this.textValue = this.domElement.placeholder;
    }
    updateTextColor() {
        const value = this.domElement.value;
        if (value)
            super.updateTextColor();
        else
            this.entity.setAttribute("text", "color", "#999");

        if (this.active)
            this.entity.setAttribute("color", "#ffffcc");
    }
}