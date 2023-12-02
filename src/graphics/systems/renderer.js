import { WebGLRenderer } from '/node_modules/three/src/renderers/WebGLRenderer.js';
// import { WebGLRenderer } from '/three';



function createRenderer() {
    const renderer = new WebGLRenderer({ antialias: true });

    // renderer.physicallyCorrectLights = true;
    // renderer.useLegacyLights = true;

    return renderer;
}

export {createRenderer};