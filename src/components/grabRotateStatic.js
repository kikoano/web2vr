AFRAME.registerComponent("vr-grab-rotate-static", {
    tick: function () {
        if (this.el.components["grabbable"].grabbed) {
            // update clipping when moving
            if (this.el.web2vr.scroll.hasScroll) {
                for (const element of this.el.web2vr.elements)
                    element.updateClipping();
            }

            const obj = this.el.object3D;
            const hand = this.el.components["grabbable"].grabbers[0].object3D;

            obj.rotation.y = Math.atan2(hand.position.x - (obj.position.x + this.el.children[0].getAttribute("width") / 2), hand.position.z - obj.position.z);

            //obj.rotation.x = hand.rotation.x;
            //obj.rotation.y = hand.rotation.y;
            //obj.rotation.z = hand.rotation.z;
        }
    },
});