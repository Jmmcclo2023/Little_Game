// import { GLTFLoader } from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';
// import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';
import { GLTFLoader } from "../../../../vendor/three/examples/jsm/loaders/GLTFLoader.js";
import { setupModel } from "./setupModel.js";

async function loadModels() {
    const loader = new GLTFLoader();

    // List glb files here
    const [ tvHeadData ] = await Promise.all([
        // loader.loadAsync('/assets/models/file.glb'),
        
        // Line Art doesn't work
        // loader.loadAsync('/assets/models/TV_HEAD_Basic_Line_Art_Basic_Color.glb'),
        
        // Toon shader material doesnt work
        // loader.loadAsync('/assets/models/TV_HEAD_GREASE_PENCIL_METHOD.glb'),
        
        // Chunky Border Doesn't Work
        // loader.loadAsync('/assets/models/TV_HEAD_WireFrame_Outline_Chunky_Border_Basic_Color.glb'),

        // Basic Color Works
        // loader.loadAsync('/assets/models/TV_HEAD_No_Outline_Basic_Color.glb'),
        
        // Applied Line Art Doesn't Work
        // loader.loadAsync('/assets/models/Testing_Applying_LineArt.glb'),

        // Applied Wireframe works
        // loader.loadAsync('/assets/models/Testing_Applying_Wireframe.glb'),

        // The Camera is included 
        // (Camera is not connected Threejs's camera)
        // loader.loadAsync('/assets/models/Testing_Include_Camera.glb'),

        // Need to test include camera & removing chunky bordor
        // Doesn't Work
        // loader.loadAsync('/assets/models/RemoveBorderEverythingChecked.glb'),

        // Includes the Light as well 
        // (The line art still doesnt work though)
        // loader.loadAsync('/assets/models/Testing_Include_AllData.glb'),

        // Doesn't Work
        // loader.loadAsync('/assets/models/Testing_Wireframe.glb'),

        // Flamingo
        // loader.loadAsync('/assets/models/Flamingo.glb'),

        // Model with Animation Clips Included
        loader.loadAsync('/assets/models/Head_with_Animations.glb'),
    ]);

    // const tvHead = setupModel(tvHeadData);
    // tvHead.position.set(x,y,z);

    const tvHead = setupModel(tvHeadData);

    return {
        tvHead,
        // flamingo,
    };
}

export { loadModels };