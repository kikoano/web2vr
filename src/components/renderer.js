AFRAME.registerComponent("vr-renderer", {
    init: function () {
        this.el.sceneEl.renderer.localClippingEnabled = true;
    }
});