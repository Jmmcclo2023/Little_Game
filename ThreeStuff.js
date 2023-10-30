import * as THREE from './node_modules/three/build/three.module.js';

// Testing to see if the EC2 Deploy works
// Testing Again
// Third times the charm :/
// Fourth, Fifth, Idk at this point
// :/

// SET UP
// Need a scene, a camera, and a renderer

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

// renderer.render(scene, camera);


// ADDING AN OBJECT
// Need Geometry, Material, & Mesh

// Geometry
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 )

// Material
// const material = new THREE.MeshBasicMaterial( {color: 0xFF65FF } );
const material = new THREE.MeshStandardMaterial( {color: 0xFFFFFF } );

// Mesh
const mesh = new THREE.Mesh(geometry, material)

// Add mesh to scene
scene.add(mesh);


const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);


const ambientLight = new THREE.AmbientLight(0x00ffff);
scene.add(pointLight, ambientLight);


const pointLightHelper = new THREE.PointLightHelper(pointLight);
scene.add(pointLightHelper);


// Recursive Function to Render Scene
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );

    // Rotates the mesh
    mesh.rotation.x += 0.01;
}


animate();
