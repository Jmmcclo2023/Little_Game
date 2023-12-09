// import { GLTFLoader } from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';
// import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';
import { GLTFLoader } from "../../../../vendor/three/examples/jsm/loaders/GLTFLoader.js";
import { setupCamera } from "./setupCamera.js";

async function loadCamera() {
    const loader = new GLTFLoader();

    // List glb files here
    const [ cameraData ] = await Promise.all([
        // The Camera is included 
        // (Camera is not connected Threejs's camera)
        loader.loadAsync('/assets/models/RemoveBorderEverythingChecked.glb'),
    ]);

    const tvCamera = setupCamera(cameraData);
    // tvHead.position.set(x,y,z);

    console.log(tvCamera);
    // const flamingo = setupModel(flamingoData);

    return {
        tvCamera,
    };
}

export { loadCamera };