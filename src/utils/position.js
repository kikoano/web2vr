export default class Position {
    constructor(domPosition, depth, scale) {
        // depth = z
        this.depth = depth;
        this.startDepth = depth;
        this.scale = scale;
        this.scrollY = 0;
        this.updatePosition(domPosition);
    }

    updatePosition(domPosition) {
        this.domPosition = domPosition;
        this.aframePosition = this.calculateAFramePosition(this.domPosition);
    }

    calculateAFramePosition(domPosition) {
        // making positions be in center because dom positions are in top left
        const aframePosition = {
            x: domPosition.x + domPosition.width / 2,
            y: domPosition.y + domPosition.height / 2,
            z: this.depth
        };

        // scaling
        aframePosition.x *= this.scalingFactor;
        aframePosition.y *= this.scalingFactor * -1; // * -1 to match aframe y-axis

        aframePosition.width = domPosition.width * this.scalingFactor;
        aframePosition.height = domPosition.height * this.scalingFactor;

        return aframePosition;
    }

    equalsDOMPosition(domPosition) {
        return this.domPosition.top == domPosition.top && this.domPosition.bottom == domPosition.bottom && this.domPosition.left == domPosition.left && this.domPosition.right == domPosition.right;
    }

    get scalingFactor() {
        return 1 / this.scale;
    }

    get x() {
        return this.aframePosition.x;
    }

    get y() {
        return this.aframePosition.y + this.scrollY;
    }

    get z() {
        return this.aframePosition.z;
    }

    get width() {
        return this.aframePosition.width;
    }

    get height() {
        return this.aframePosition.height;
    }

    // vector3
    get xyz() {
        return { x: this.x, y: this.y, z: this.z };
    }

    get left() {
        return { x: this.x - this.width / 2, y: this.y, z: this.z };
    }

    get right() {
        return { x: this.x + this.width / 2, y: this.y, z: this.z };
    }

    get top() {
        return { x: this.x, y: this.y + this.height / 2, z: this.z };
    }

    get bottom() {
        return { x: this.x, y: this.y - this.height / 2, z: this.z };
    }

}