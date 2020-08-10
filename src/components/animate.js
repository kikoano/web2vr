AFRAME.registerComponent("vr-animate", {
    init: function () {
        this.running = false;
        // listenes for css animation and translation
        this.el.element.domElement.addEventListener("animationstart", this.startAnimation.bind(this));
        this.el.element.domElement.addEventListener("animationend", this.stopAnimation.bind(this));
        this.el.element.domElement.addEventListener("transitionstart", this.startAnimation.bind(this));
        this.el.element.domElement.addEventListener("transitionend", this.stopAnimation.bind(this));
    },
    tick: function () {
        if (this.running)
            this.el.element.web2vr.update();
    },
    startAnimation: function () {
        this.running = true;
    },
    stopAnimation: function () {
        this.running = false;
        // one final update
        this.el.element.web2vr.update();
    }
});