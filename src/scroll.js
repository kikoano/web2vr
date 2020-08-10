import "./components/scrollbar";
export default class Scroll {
    constructor(web2vr) {
        this.web2vr = web2vr;

        this.hasScroll = false;
        this.scrollBody = false;
        this.scrollContainer = null;
        if (this.web2vr.settings.scroll) {
            this.checkScrollbar();
            if (this.hasScroll)
                this.createScrollbar();
        }
    }

    checkScrollbar() {
        // entire body scroll
        const body = document.scrollingElement;
        // div container scroll
        const container = this.web2vr.container;

        if (body.scrollHeight > body.clientHeight) {
            this.hasScroll = true;
            this.scrollContainer = body;
            this.scrollBody = true;
        }
        else if (container.element.style.overflow == "scroll") { //container.scrollHeight > container.clientHeight
            this.hasScroll = true;
            this.scrollContainer = container;
        }
    }

    createScrollbar() {
        this.scrollbar = document.createElement("a-entity");

        this.pointer = document.createElement("a-plane");
        this.pointer.setAttribute("material", "shader", "flat");
        this.pointer.setAttribute("color", "#C1C1C1");

        this.plane = document.createElement("a-plane");
        this.plane.setAttribute("material", "shader", "flat");
        this.plane.setAttribute("material", "side", "double");
        this.plane.classList.add(this.web2vr.settings.interactiveTag);
        this.plane.setAttribute("color", "#F1F1F1");
        this.plane.setAttribute("width", 1);
        this.plane.setAttribute("vr-scrollbar", "");

        // pointers for scroll compoment
        this.plane.web2vr = this.web2vr;
        this.plane.pointer = this.pointer;
        this.plane.scrollbar = this.scrollbar;

        this.plane.appendChild(this.pointer);
        this.scrollbar.appendChild(this.plane);
        this.web2vr.aframe.container.appendChild(this.scrollbar);
    }

    update() {
        // there is no need to show scrollbar if the main container is hidden
        if (this.hasScroll) {
            if (this.web2vr.container.element.style.visibility == "visible") {
                this.scrollbar.object3D.visible = true;
                this.plane.classList.add(this.web2vr.settings.interactiveTag);
            }
            else if (this.web2vr.container.element.style.visibility == "hidden") {
                this.scrollbar.object3D.visible = false;
                this.plane.classList.remove(this.web2vr.settings.interactiveTag);
            }
        }
    }
}