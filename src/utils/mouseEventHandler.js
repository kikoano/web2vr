export default class MouseEventHandler {
    constructor(element) {
        this.element = element;
        this.listeningForMouseEvents = false;
        this.resync();
        this.checkEntityEvents();
    }

    resync() {
        const mouseEvents = ["click", "mouseenter", "mouseleave", "mousedown", "mouseup"];
        const mouseProperties = ["onclick", "onmouseenter", "onmouseleave", "onmousedown", "onmouseup"];

        let hasMouseEventRegistered = false;
        for (const mouseEvent of mouseEvents) {
            if (this.element.domElement.eventListenerList && this.element.domElement.eventListenerList[mouseEvent]) {
                hasMouseEventRegistered = true;
                break;
            }
        }

        let hasMouseProperty = false;
        for (const mouseProperty of mouseProperties) {
            if (this.element.domElement[mouseProperty]) {
                hasMouseProperty = true;
                break;
            }
        }

        if (hasMouseEventRegistered || hasMouseProperty) {
            if (!this.listeningForMouseEvents) {
                this.addMouseListeners(mouseEvents);
                this.listeningForMouseEvents = true;
            }
        }
        // no event handlers or event properties registered, so we can safely remove our listeners
        else if (this.listeningForMouseEvents) {
            this.removeMouseListeners(mouseEvents);
            this.listeningForMouseEvents = false;
        }
    }
    mouseEventHandler(evt) {
        const mouseEvent = new MouseEvent(evt.type, {
            "view": window,
            "bubbles": true,
            "cancelable": true,
            "target": this.element.domElement // maybe?
        });
        this.element.domElement.dispatchEvent(mouseEvent);
    }

    addMouseListeners(mouseEvents) {
        mouseEvents.forEach(eventName => {
            this.element.entity.addEventListener(eventName, this.mouseEventHandler.bind(this))
        })
    }

    removeMouseListeners(mouseEvents) {
        mouseEvents.forEach(eventName => {
            this.element.entity.removeEventListener(eventName, this.mouseEventHandler.bind(this))
        });
    }

    // for hover and input element
    checkEntityEvents() {
        const mouseEvents = ["click", "mouseenter", "mouseleave", "mousedown", "mouseup"];
        for (const mouseEvent of mouseEvents) {
            if (this.element.entity.eventListenerList && this.element.entity.eventListenerList[mouseEvent]) {
                this.listeningForMouseEvents = true;
                break;
            }
        }
    }
}