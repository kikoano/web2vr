import ContainerElement from "./containerElement";

export default class TextElement extends ContainerElement {
    constructor(web2vr, domElement, layer) {
        super(web2vr, domElement, layer, false);

        this.entity.setAttribute("text", "value", "");
        this.textValue = null;
    }

    setupClipping() {
        let clippingContext = this.getClippingContext();

        if (clippingContext) {
            this.clippingContext = clippingContext;

            let material = this.entity.components.text.material;

            // text component uses custom shader so default three.js clipping doesnt work, needed to inject clipping shader code inside the custom shader code(RawShaderMaterial)
            // help from https://stackoverflow.com/questions/42532545/add-clipping-to-three-shadermaterial
            // 1.1.0 version changes: Because Aframe 1.1.0 changes text material shader to use webgl 2(glsl 3) some of the three.js ShaderChunk had to be converted to glsl 3.
            const fragmentShader = `#version 300 es
            precision highp float;
            uniform bool negate;
            uniform float alphaTest;
            uniform float opacity;
            uniform sampler2D map;
            uniform vec3 color;
            in vec2 vUV;
            out vec4 fragColor;
            float median(float r, float g, float b) {
                return max(min(r, g), min(max(r, g), b));
            }
            #define BIG_ENOUGH 0.001
            #define MODIFIED_ALPHATEST (0.02 * isBigEnough / BIG_ENOUGH)
            
            // clipping_planes_pars_fragment converted to glsl 3
            #if NUM_CLIPPING_PLANES > 0
                in vec3 vClipPosition;
                uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];
            #endif
            
            void main() {
                // compatible with glsl 3
                #include <clipping_planes_fragment>

                vec3 sampleColor = texture(map, vUV).rgb;
                if (negate) { sampleColor = 1.0 - sampleColor; }
                float sigDist = median(sampleColor.r, sampleColor.g, sampleColor.b) - 0.5;
                float alpha = clamp(sigDist / fwidth(sigDist) + 0.5, 0.0, 1.0);
                float dscale = 0.353505;
                vec2 duv = dscale * (dFdx(vUV) + dFdy(vUV));
                float isBigEnough = max(abs(duv.x), abs(duv.y));
                // Do modified alpha test.
                if (isBigEnough > BIG_ENOUGH) {
                    float ratio = BIG_ENOUGH / isBigEnough;
                    alpha = ratio * alpha + (1.0 - ratio) * (sigDist + 0.5);
                }
                // Do modified alpha test.
                if (alpha < alphaTest * MODIFIED_ALPHATEST) { discard; return; }
                fragColor = vec4(color.xyz, alpha * opacity);
            }`;

            const vertexShader = `#version 300 es
            in vec2 uv;
            in vec3 position;
            uniform mat4 projectionMatrix;
            uniform mat4 modelViewMatrix;
            out vec2 vUV;

            // clipping_planes_pars_vertex converted to glsl 3
            #if NUM_CLIPPING_PLANES > 0
	            out vec3 vClipPosition;
            #endif

            void main(void) {
                // compatible with glsl 3
                #include <begin_vertex>

                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                vUV = uv;

                // compatible with glsl 3
                #include <project_vertex>
                #include <clipping_planes_vertex>

            }`;

            material.fragmentShader = fragmentShader;
            material.vertexShader = vertexShader;
            material.clipping = true;
            material.clippingPlanes = clippingContext.planes;

            this.updateClipping();
        }
    }

    updateTextAlignment() {
        // align css text-align to text component
        let align = this.style.textAlign;
        if (!["left", "right", "center"].includes(align))
            align = "left";
        this.entity.setAttribute("text", "align", align);

        // set text lineHeight if it has custom css lineHeight
        const text = this.entity.components.text;
        if (this.style.lineHeight != "normal" && (typeof text.currentFont != "undefined")) {
            this.entity.setAttribute("text", "lineHeight", text.currentFont.common.lineHeight + parseFloat(this.style.lineHeight));
        }
    }

    updateTextSize() {
        const actualFontSize = parseFloat(this.style.fontSize);
        const width = this.position.width;

        const widthInPixels = width / this.position.scalingFactor;
        let wrapPixels = widthInPixels * 42 / actualFontSize;
        wrapPixels *= 1.107; //1.10706774183070233
        this.entity.setAttribute("text", "wrapPixels", wrapPixels);
        this.entity.setAttribute("text", "width", width);
    }

    updateTextColor() {
        // opacity from parent because it doesnt pass it to children
        const opacity = this.domElement.parentElement.element.style.opacity;
        this.entity.setAttribute("text", "opacity", opacity);

        const textColor = this.style.color;
        this.entity.setAttribute("text", "color", textColor);
    }

    updateText() {
        // remove new lines and whitespaces
        this.textValue = this.domElement.textContent.replace(/\s{2,}/g, ' ');
    }

    specificUpdate() {
        super.specificUpdate();

        this.updateTextSize();
        this.updateTextAlignment();
        this.updateText();
        this.entity.setAttribute("text", "value", this.textValue);
        this.updateTextColor();
    }
}