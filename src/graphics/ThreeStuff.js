import * as THREE from 'three/build/three.module.js';
// https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js

// import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';

// https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js

import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';



// SET UP
// Need a scene, a camera, and a rendere

// Scene
const scene = new THREE.Scene();

// Perspective Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1, 1000
)

// Move camera position along Z axis
camera.position.setZ(30);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
});

// Set pixel ratio to window device's pixel ratio
renderer.setPixelRatio(window.devicePixelRatio);

// Set render size to window size
renderer.setSize(window.innerWidth, window.innerHeight);


// GLTF Loader Stuff
const loader = new GLTFLoader();


loader.load( 
    './GroundAttempt1.gltf', function (gltf) {
        // scene.add (gltf.asset)
        
    }, 
    undefined, 
    function (error) {
        console.error(error);
});


// ADDING AN OBJECT
// Need Geometry, Material, & Mesh


// Geometry List
const charGeometry = new THREE.BoxGeometry(5,5,5);
// const groundGeometry = new THREE.
// const planet1Geometry = new THREE.SphereGeometry(5, 5, 5);
// const planet2Geometry = new THREE.SphereGeometry(10, 10, 10);
// const mountainGeometry = new THREE.


// Material
// const material = new THREE.MeshBasicMaterial( {color: 0xFF65FF } );
const material = new THREE.MeshStandardMaterial( {color: 0xFF34FF } );

// Mesh List
const charMesh = new THREE.Mesh(charGeometry, material);
// const groundMesh = new THREE.Mesh(groundGeometry, material);
// const planet1Mesh = new THREE.Mesh(planet1Geometry, material);
// const planet2Mesh = new THREE.Mesh(planet2Geometry, material);
// const mountainMesh = new THREE.Mesh(mountainGeometry, material);


// Add Stuff to Scene
scene.add(charMesh);

// const controls = new OrbitControls(camera, renderer.domElement);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0x00ffff);
scene.add(pointLight, ambientLight);


// Export List
export {charMesh}


// Rerender page on resize
onresize = (e) => {
    // works but causes big white flash 
    window.location = window.location;
}


// Recursive Function to Render Scene
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );

    // Rotates the mesh
    // mesh.rotation.x += 0.01;

    // controls.update();
}


animate();
