import Element from "./element";

export default class VideoElement extends Element {
    constructor(web2vr, domElement, layer) {
        super(web2vr, domElement, layer);
        // normal video
        this.entity = document.createElement("a-video");
        // 360 video
        this.video360 = document.createElement("a-videosphere");
        this.web2vr.aframe.scene.appendChild(this.video360);
        this.current360Src = null;

        this.createClickEvent();

        this.domElement.addEventListener("play", () => {
            if (this.domElement.hasAttribute("vr"))
                this.video360.components.material.material.map.image.play();
        });

        this.domElement.addEventListener("pause", () => {
            if (this.domElement.hasAttribute("vr"))
                this.video360.components.material.material.map.image.pause();
        });

        // update elements when video loaded
        this.domElement.addEventListener("loadeddata", () => {
            this.web2vr.update();
        });
    }

    init() {
        // this is async dynamic so no need to put in update
        const texture = new THREE.VideoTexture(this.domElement);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.format = THREE.RGBAFormat;

        this.entity.object3D.children[0].material = new THREE.MeshBasicMaterial({ map: texture });
        super.init();
    }

    createClickEvent() {
        // for normal video
        this.domElement.addEventListener("click", () => {
            this.domElement.paused ? this.domElement.play() : this.domElement.pause();
        });
        // for 360 video
        /*this.video360.addEventListener("click", () => {
            if (this.domElement.paused) {
                this.domElement.play();
                this.video360.components.material.material.map.image.play();
            }
            else {
                this.domElement.pause();
                this.video360.components.material.material.map.image.pause();
            }
        });**/
    }

    specificUpdate() {
        if (this.domElement.hasAttribute("vr")) {
            this.video360.object3D.visible = true;
            this.video360.classList.add(this.web2vr.settings.interactiveTag);
            this.entity.object3D.visible = false;
            this.entity.classList.remove(this.web2vr.settings.interactiveTag);

            const src = this.domElement.firstElementChild.src;
            if (this.current360Src != src) {
                const assetID = this.web2vr.aframe.assetManager.getAsset(src, "video");
                this.video360.setAttribute("src", "#" + assetID);
                // set video360 rotation
                const rotation = this.domElement.getAttribute("vr");
                if (rotation)
                    this.video360.object3D.rotation.y = THREE.Math.degToRad(rotation);
                else
                    this.video360.object3D.rotation.y = 0;

                // no need for audio because we have it from the html where we control it
                if (this.video360.components.material.material.map)
                    this.video360.components.material.material.map.image.muted = true;
            }
        }
        else {
            this.video360.object3D.visible = false;
            this.video360.classList.remove(this.web2vr.settings.interactiveTag);
            this.entity.object3D.visible = true;
            this.entity.classList.add(this.web2vr.settings.interactiveTag);
        }
    }
}