// import * as THREE from '/node_modules/three/build/three.module.js';
import { PerspectiveCamera } from '/node_modules/three/build/three.module.js';

// import { setupCamera } from './modelPrep/setupCamera';

// Doesnt Work
// import { PerspectiveCamera } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/src/cameras/PerspectiveCamera.js';
// import { PerspectiveCamera } from './node_modules/three/src/cameras/PerspectiveCamera.js';
// import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera.js'

function createCamera() {
    const camera = new PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1, 1000);
        // (35, 1, 0.1, 100)


    camera.position.set(15, 15, 15);

    return camera;
}

export { createCamera };