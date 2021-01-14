AFRAME.registerComponent("vr-border", {
    schema: {
        width: { type: "number" },
        color: { type: "string" },
    },
    init: function () {
        this.running = true;
        const plane = this.el.object3D.children[0];
        const edges = new THREE.EdgesGeometry(plane.geometry);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: this.data.width }));

        this.borderObject = line;
        this.el.element.web2vr.aframe.container.object3D.add(this.borderObject);

        //maybe clippingContext inside tick?
        if (this.el.element.clippingContext) {
            line.material.clippingPlanes = this.el.element.clippingContext.planes;
            line.material.needsUpdate = true;
        }
    },
    update: function () {
        // waiting for three.js(WebGL) to add lineWidth support for Windows(DirectX) browsers for now linewidth is 1 no matter what you set it.
        // lineWidth works for other OS.
        const borderWidth = this.data.width;

        // custom element border width
        if (this.el.element.borderWidth)
            this.borderObject.material.linewidth = this.el.element.borderWidth;
        else
            this.borderObject.material.linewidth = borderWidth;

        // custom element border color
        if (this.el.element.borderColor)
            this.borderObject.material.color = this.el.element.borderColor;
        else
            this.borderObject.material.color = new THREE.Color(this.data.color);
    },
    updateBorder: function () {
        if (this.el.element.visible) {
            this.running = true;
            this.borderObject.material.visible = true;
        }
        else
            this.borderObject.material.visible = false;
    },
    tick: function () {
        if (this.running) {
            const scale = this.el.object3D.scale;
            const plane = this.el.object3D.children[0].geometry.clone();
            plane.scale(scale.x, scale.y, scale.z);
            const edges = new THREE.EdgesGeometry(plane);
            const position = this.el.object3D.position;

            this.borderObject.geometry = edges;

            this.borderObject.position.set(position.x, position.y, position.z + this.el.element.web2vr.settings.layerStep * 2);
            this.running = false;
        }
    },
    remove: function () {
        this.el.element.web2vr.aframe.container.object3D.remove(this.borderObject);
    }
});