import Position from "../utils/position";
import MouseEventHandler from "../utils/mouseEventHandler";

export default class Element {
    constructor(web2vr, domElement, layer) {
        this.web2vr = web2vr;
        this.domElement = domElement;
        this.layer = layer;
        this.domElement.element = this; // so we can do domeElement.parentNode.element
        this.childElements = new Set();

        this.entity = null; // aframe entity this null becasue Element class is abstract
        this.visible = true;
        if (this.domElement.classList.contains("vr-span"))
            this.paddingToMargin();
        this.position = new Position(this.domElement.getBoundingClientRect(), layer * this.web2vr.settings.layerStep, web2vr.settings.scale);
        this.style = window.getComputedStyle(this.domElement);
        this.parentTransform = "none";
        this.needsStartingTransformSize = true;
    }

    // call after entity is created in inheriting class
    initEventHandlers() {
        this.initHover();

        // setting up MouseEventHandler
        this.mouseEventHandle = new MouseEventHandler(this);

        // dynamic listeners
        this.domElement.addEventListener("eventListenerAdded", () => this.mouseEventHandle.resync());
        this.domElement.addEventListener("eventListenerRemoved", () => this.mouseEventHandle.resync());
    }

    // add animation compoment if dom element has animation
    checkAnimation() {
        if (parseFloat(this.style.animationDuration) || parseFloat(this.style.transitionDuration))
            this.entity.setAttribute("vr-animate", "");
        else
            this.entity.removeAttribute("vr-animate");
    }

    initHover() {
        // find what has hover
        let tag = null;
        if (this.web2vr.hoverSelectors.has(this.domElement.tagName.toLowerCase()))
            tag = this.domElement.tagName.toLowerCase();
        let classes = [];
        for (const cls of this.domElement.classList) {
            if (this.web2vr.hoverSelectors.has("." + cls))
                classes.push(cls);
        }
        let id = null;
        if (this.web2vr.hoverSelectors.has("#" + this.domElement.id))
            id = this.domElement.id;

        // add mouseenter and mouseleave if element has hover.
        if (tag || classes.length > 0 || id) {
            this.entity.addEventListener("mouseenter", () => {
                if (tag)
                    this.domElement.classList.add(tag + "hover");
                if (classes.length > 0)
                    for (const cls of classes)
                        this.domElement.classList.add(cls + "hover");
                if (id)
                    this.domElement.classList.add(id + "hover");
                // this is only for hover transform. Update all elements when transform gets added
                if (this.style.transform != "none") {
                    this.web2vr.update();
                    this.hoverTransform = true;
                }

            });
            this.entity.addEventListener("mouseleave", () => {
                if (tag)
                    this.domElement.classList.remove(tag + "hover");
                if (classes.length > 0)
                    for (const cls of classes)
                        this.domElement.classList.remove(cls + "hover");
                if (id)
                    this.domElement.classList.remove(id + "hover");
                if (this.hoverTransform) {
                    this.position.depth = this.position.startDepth;
                    for (const element of this.domElement.querySelectorAll('*')) {
                        if (element.element) {
                            element.element.parentTransform = "none";
                            element.element.position.depth = element.element.position.startDepth;
                        }
                    }
                }
            });
        }
    }

    // getBoundingClientRect works great with margin while with padding it has problems with paddingRight that needs to be manualy calculated and set
    // because dealing with paddingRight is problematic we can make the padding be margin for the textNode(vr-span)
    paddingToMargin() {
        // only if element has text
        if (this.domElement.textContent.trim()) {
            //const left = this.domElement.parentElement.element.style.paddingLeft;
            const right = this.domElement.parentElement.element.style.paddingRight;
            //const top = this.domElement.parentElement.element.style.paddingTop;
            //const bottom = this.domElement.parentElement.element.style.paddingBottom;

            /*if (parseFloat(left)) {
                this.domElement.style.marginLeft = left;
                this.domElement.parentElement.style.paddingLeft = "0px";
            }*/
            if (parseFloat(right)) {
                this.domElement.style.marginRight = right;
                this.domElement.parentElement.style.paddingRight = "0px";
            }
            /*if (parseFloat(top)) {
                this.domElement.style.marginTop = top;
                //this.domElement.parentElement.style.paddingTop = "0px";
            }
            if (parseFloat(bottom)) {
                this.domElement.style.marginBottom = bottom;
                //this.domElement.parentElement.style.paddingBottom = "0px";
            }*/
        }
    }

    init() {
        // reference of the element for aframe compoment
        this.entity.element = this;

        // dont need light to affect material
        this.entity.setAttribute("material", "shader", "flat");

        //init sizes at start
        this.entity.setAttribute("width", this.position.width);
        this.entity.setAttribute("height", this.position.height);

        this.initEventHandlers();

        this.setupClipping();
    }

    update() {
        const clientRect = this.domElement.getBoundingClientRect();

        // its not on the screen
        if (clientRect.width == 0 || clientRect.height == 0) {
            this.entity.object3D.visible = false;
            if (!this.domElement.classList.contains("vr-span"))
                this.entity.classList.remove(this.web2vr.settings.interactiveTag);
            this.position.aframePosition.y = 1000; // for some reason raycast still hits so have to move position
            return;
        }

        // for future move this in TextElement class
        if (this.domElement.classList.contains("vr-span")) {
            // dont need interaction with the text when we always have the background as interaction
            this.entity.classList.remove(this.web2vr.settings.interactiveTag);
            // so all inline text width is good, dont do this if its text inside button
            if (this.domElement.parentElement.tagName != "BUTTON") {
                clientRect.width += 8;
                clientRect.x -= 2;
            }
        }

        // set fixed container height if its using scrollBody, best is to move this code outside update loop for future
        if (this.web2vr.scroll.hasScroll && this.domElement == this.web2vr.container && this.web2vr.scroll.scrollBody)
            clientRect.height = this.web2vr.settings.scrollWindowHeight;
        this.position.updatePosition(clientRect);

        this.checkVisible();
        if (this.visible) {
            this.style = window.getComputedStyle(this.domElement);

            // its on visible screen but its hidden by style
            if (this.style.visibility === "hidden" || this.style.display === "none") {
                this.entity.object3D.visible = false;
                if (!this.domElement.classList.contains("vr-span"))
                    this.entity.classList.remove(this.web2vr.settings.interactiveTag);
                this.position.aframePosition.y = 1000; // for some reason raycast still hits so have to move position
                // update border so we can remove it because element is hidden
                this.updateBorder();
                return;
            }
            else {
                this.entity.object3D.visible = true;
                // for input text because it has custom event for entity it cannot detect with this.mouseEventHandle.listeningForMouseEvents
                // we have to check tagName and type to see if its input text, for future make this work with mouseEventHandle
                // also add interactiveTag if its main container
                if ((!this.domElement.classList.contains("vr-span") && (this.mouseEventHandle.listeningForMouseEvents || (this.domElement.tagName == "INPUT" && this.domElement.type == "text")) || this.domElement == this.web2vr.container))
                    this.entity.classList.add(this.web2vr.settings.interactiveTag);
            }

            // if there is transform then width and height will be set with the transform matrix scale
            // using needsStartingTransformSize so width and height are never 0 when doing transform scale
            if (this.style.transform == "none" || this.needsStartingTransformSize) {
                this.entity.setAttribute("width", this.position.width);
                this.entity.setAttribute("height", this.position.height);
            }

            this.checkAnimation();

            const opacity = this.style.opacity;
            this.entity.setAttribute("opacity", opacity);

            this.specificUpdate();
            this.updateTransform();
            this.updateClipping();
        }
        this.updateBorder();
    }

    updateTransform() {

        let transform = this.style.transform;
        if (transform == "none")
            transform = this.parentTransform;
        else {
            // give transform to all descendents
            for (const element of this.domElement.querySelectorAll('*')) {
                if (element.element)
                    element.element.parentTransform = transform;
            }
        }

        if (transform != "none") {
            this.needsStartingTransformSize = false;
            const matrixType = transform.split('(')[0];
            // get matrix values in float
            let values = transform.split('(')[1];
            values = values.split(')')[0];
            values = values.split(',');
            values = values.map(v => parseFloat(v));
            let matrix = null;

            if (matrixType == "matrix") {
                // transform to matrix4x4 and invert skewX to match three.js
                matrix = new THREE.Matrix4().fromArray([values[0], values[1], 0, 0, -values[2], values[3], 0, 0, 0, 0, 1, 0, values[4], values[5], 0, 1]);
            }
            else if (matrixType == "matrix3d") {
                // invert skewX and skewZ? to match three.js
                values[4] *= -1;
                values[9] *= -1;
                matrix = new THREE.Matrix4().fromArray(values);
            }
            const position = new THREE.Vector3();
            const quaternion = new THREE.Quaternion();
            const scale = new THREE.Vector3();
            matrix.decompose(position, quaternion, scale);

            // position
            this.position.domPosition.x += position.x;
            this.position.domPosition.y += position.y;
            if (position.z != 0)
                this.position.depth = position.z * this.position.scalingFactor + this.position.startDepth;

            // rotation
            this.entity.object3D.rotation.setFromRotationMatrix(matrix);

            // calcualte scale and set it to entity
            if (this.parentTransform == "none") {
                const elements = matrix.elements;
                const scaleX = Math.sqrt(elements[0] * elements[0] + elements[1] * elements[1]);
                const scaleY = Math.sqrt(elements[5] * elements[5] + elements[4] * elements[4]);
                // for radio scale is 2 times smaller because its circle, for some rason checkbox scale needs to be in half else its too big
                if (this.domElement.tagName == "INPUT" && (this.domElement.type == "radio" || this.domElement.type == "checkbox"))
                    this.entity.object3D.scale.set(scaleX / 2, scaleY / 2, 1);
                else
                    this.entity.object3D.scale.set(scaleX, scaleY, 1);
            }
        }
        this.entity.object3D.position.set(this.position.x, this.position.y, this.position.z);
    }

    // abstract method
    specificUpdate() {

    }

    updateBorder() {
        if (this.web2vr.settings.border) {
            // using borderTopWidth and borderTopColor because borderWidth and borderColor doesnt work in firefox
            const borderWidth = parseFloat(this.style.borderTopWidth);
            if ((borderWidth || this.borderWidth) && this.entity.object3D.visible) {
                this.entity.setAttribute("vr-border", `width:${borderWidth}; color:${this.style.borderTopColor};`);
                this.entity.components["vr-border"].updateBorder();
            }
            else if (this.entity.components["vr-border"])
                this.entity.removeAttribute("vr-border");
        }
    }

    rotateNormal(normal) {
        const normalMatrix = new THREE.Matrix3().getNormalMatrix(this.web2vr.aframe.container.object3D.matrixWorld);
        const output = normal.clone().applyMatrix3(normalMatrix).normalize();
        return output;
    }

    getClippingContext() {
        let output = null;

        if (this.domElement.parentNode && this.domElement.parentNode.element && this.domElement.parentNode.element.clippingContext)
            output = this.domElement.parentNode.element.clippingContext;
        else {
            if ((this.style.overflow && this.style.overflow == "hidden") || (this.web2vr.scroll.hasScroll && this.domElement == this.web2vr.container) || (this.web2vr.settings.forceClipping && this.domElement == this.web2vr.container)) {
                // ignore if its svg
                if (this.domElement.tagName != "svg") {
                    let clippingContext = {};
                    clippingContext.authority = this;

                    clippingContext.bottom = new THREE.Plane(this.rotateNormal(new THREE.Vector3(0, 1, 0))); // normal up
                    clippingContext.top = new THREE.Plane(this.rotateNormal(new THREE.Vector3(0, -1, 0))); // normal down
                    clippingContext.left = new THREE.Plane(this.rotateNormal(new THREE.Vector3(1, 0, 0))); // normal right
                    clippingContext.right = new THREE.Plane(this.rotateNormal(new THREE.Vector3(-1, 0, 0))); // normal left

                    clippingContext.planes = [clippingContext.bottom, clippingContext.top, clippingContext.left, clippingContext.right];

                    output = clippingContext;
                }
            }
        }
        return output;
    }

    setupClipping() {
        const clippingContext = this.getClippingContext();

        if (clippingContext) {
            this.clippingContext = clippingContext;

            // we are sure the renderer is loaded
            const object3D = this.entity.object3D;
            if (!object3D || !object3D.children || !object3D.children.length > 0 || !object3D.children[0].material) {
                return;
            }

            const material = object3D.children[0].material;
            material.clippingPlanes = clippingContext.planes;

            //this.updateClipping();
            setTimeout(() => { this.updateClipping(); }, 200); // if it doesnt work use this
        }
    }

    updateClipping() {
        // only element with authority can change the clipping planes position
        if (!this.clippingContext || this.clippingContext.authority != this)
            return;

        const position = this.entity.object3D.position;

        const bottomLocal = position.clone().add((new THREE.Vector3(0, -1, 0)).multiplyScalar(this.position.height / 2));
        const topLocal = position.clone().add((new THREE.Vector3(0, 1, 0)).multiplyScalar(this.position.height / 2));
        const leftLocal = position.clone().add((new THREE.Vector3(-1, 0, 0)).multiplyScalar(this.position.width / 2));
        const rightLocal = position.clone().add((new THREE.Vector3(1, 0, 0)).multiplyScalar(this.position.width / 2));

        const bottomGlobal = this.web2vr.aframe.container.object3D.localToWorld(bottomLocal.clone());
        const topGlobal = this.web2vr.aframe.container.object3D.localToWorld(topLocal.clone());
        const leftGlobal = this.web2vr.aframe.container.object3D.localToWorld(leftLocal.clone());
        const rightGlobal = this.web2vr.aframe.container.object3D.localToWorld(rightLocal.clone());

        this.clippingContext.bottom.setFromNormalAndCoplanarPoint(this.rotateNormal(new THREE.Vector3(0, 1, 0)), bottomGlobal).normalize();
        this.clippingContext.top.setFromNormalAndCoplanarPoint(this.rotateNormal(new THREE.Vector3(0, -1, 0)), topGlobal).normalize();
        this.clippingContext.left.setFromNormalAndCoplanarPoint(this.rotateNormal(new THREE.Vector3(1, 0, 0)), leftGlobal).normalize();
        this.clippingContext.right.setFromNormalAndCoplanarPoint(this.rotateNormal(new THREE.Vector3(-1, 0, 0)), rightGlobal).normalize();

        if (this.web2vr.settings.showClipping) {
            if (!this.clippingPlaneHelpers) {
                this.clippingPlaneHelpers = [];

                for (const plane of this.clippingContext.planes) {
                    const material = new THREE.MeshBasicMaterial({ color: 0x00e33d, side: THREE.DoubleSide });
                    const geometry = new THREE.PlaneGeometry(200 * this.position.scalingFactor, 200 * this.position.scalingFactor); // no need same width and height as container because this is only for debugging
                    const mesh = new THREE.Mesh(geometry, material);

                    mesh.debugPlane = plane;
                    this.clippingPlaneHelpers.push(mesh);

                    const axisHelper = new THREE.AxesHelper(5);
                    mesh.add(axisHelper);
                }

                for (const helper of this.clippingPlaneHelpers) {
                    this.web2vr.aframe.scene.object3D.add(helper);
                }
            }
            for (const mesh of this.clippingPlaneHelpers) {
                mesh.visible = true;

                const worldPos = new THREE.Vector3();
                this.entity.object3D.getWorldPosition(worldPos);
                const point = new THREE.Vector3();
                mesh.debugPlane.projectPoint(worldPos, point);
                mesh.position.set(point.x, point.y, point.z);

                // clipping plane normals are inverted, we multiply by -1
                const focalPoint = point.clone().add(mesh.debugPlane.normal.clone().multiplyScalar(-1));
                mesh.lookAt(focalPoint);
            }

        }
        else {
            if (this.clippingPlaneHelpers) {
                for (const mesh of this.clippingPlaneHelpers)
                    mesh.visible = false;
            }
        }
    }

    checkVisible() {
        if (this.clippingContext) {
            const container = this.clippingContext.authority;
            if (this.position.bottom.y > container.position.top.y || this.position.top.y < container.position.bottom.y) {
                this.visible = false;
                this.entity.object3D.visible = false;
                // remove interactive tag
                if (!this.domElement.classList.contains("vr-span"))
                    this.entity.classList.remove(this.web2vr.settings.interactiveTag);
            }
            else {
                this.visible = true;
                this.entity.object3D.visible = true;
                // interactive tag so we can do raycasting if it has mouse events or its container background
                if ((!this.domElement.classList.contains("vr-span") && this.mouseEventHandle.listeningForMouseEvents) || this.domElement == this.web2vr.container)
                    this.entity.classList.add(this.web2vr.settings.interactiveTag);
            }
        }
    }
}