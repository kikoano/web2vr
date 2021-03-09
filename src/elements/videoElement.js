import Element from "./element";

export default class VideoElement extends Element {
    constructor(web2vr, domElement, layer) {
        super(web2vr, domElement, layer);
        // normal video
        this.entity = document.createElement("a-video");
        // 360 video
        this.video360 = document.createElement("a-videosphere");
        this.web2vr.aframe.scene.appendChild(this.video360);

        this.createClickEvent();

        this.domElement.addEventListener("play", () => {
            if (this.domElement.hasAttribute("vr"))
                this.video360.components.material.material.map.image.play();
        });

        this.domElement.addEventListener("pause", () => {
            if (this.domElement.hasAttribute("vr"))
                this.video360.components.material.material.map.image.pause();
        });
    }

    createClickEvent() {
        // for normal video
        this.domElement.addEventListener("click", () => {
            this.domElement.paused ? this.domElement.play() : this.domElement.pause();
        });
    }

    specificUpdate() {
        const src = this.domElement.currentSrc;
        let id = this.domElement.id;

        // if there is no video id generate new id
        if(!id){
            id = this.web2vr.aframe.assetManager.updateCurrentAssetIdReturn();
            this.domElement.id = id;
        }

        if (this.domElement.hasAttribute("vr")) {
            this.video360.object3D.visible = true;
            this.video360.classList.add(this.web2vr.settings.interactiveTag);
            this.entity.object3D.visible = false;
            this.entity.classList.remove(this.web2vr.settings.interactiveTag);

            this.video360.setAttribute("src", "#" + id);
            // set video360 rotation
            const rotation = this.domElement.getAttribute("vr");
            if (rotation)
                this.video360.object3D.rotation.y = THREE.Math.degToRad(rotation);
            else
                this.video360.object3D.rotation.y = 0;
        }
        else {
            this.video360.object3D.visible = false;
            this.video360.classList.remove(this.web2vr.settings.interactiveTag);
            this.entity.object3D.visible = true;
            this.entity.classList.add(this.web2vr.settings.interactiveTag);

            this.entity.setAttribute("src", "#" + id);
        }
    }
}