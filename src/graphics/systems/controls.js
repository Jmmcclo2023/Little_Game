// import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
// import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls.js';
// import * as THREE from '/node_modules/three/build/three.module.js';
// import { OrbitControls } from '/three/examples/jsm/controls/OrbitControls';

import { OrbitControls } from '../../../vendor/three/examples/jsm/controls/OrbitControls.js';


function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);

    controls.enableDamping = true;

    controls.tick = () => controls.update();

    return controls;
}

export { createControls };