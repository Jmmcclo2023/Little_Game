import { loadModels } from './components/modelPrep/loadModels.js';
import { loadCamera } from './components/modelPrep/loadCamera.js';

import { createCamera } from "./components/camera.js";
import { createLights } from "./components/lights.js";
import { createScene } from "./components/scene.js";

import { createControls } from "./systems/controls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

import { zoomIn } from "./systems/animations.js";
import { Vector3 } from "/node_modules/three/src/math/Vector3.js";




let camera;
let controls;
let renderer;
let scene;
let loop;

let targetObj;
let objState = 'idle';
let modelList = [];

// Maybe a global array to hold 
//  all objects created in a scene? 

class World {
    constructor(container) {
        camera = createCamera();

        // Doesn't Work
        // camera = await loadCamera();

        renderer = createRenderer();
        scene = createScene();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        // controls = createControls(camera, renderer.domElement);

        const { ambientLight, mainLight } = createLights();

        // loop.updatables.push(controls);
        scene.add(ambientLight, mainLight);

        const resizer = new Resizer(container, camera, renderer);
    }

    async init() {

        // Create any models using loadModels
        const { tvHead } = await loadModels();
        modelList.push(tvHead);
        targetObj = tvHead;

        scene.add(tvHead.getModel());

        tvHead.getModel().position.set(0, 0, 0);

        loop.updatables.push(tvHead.getModel());

        camera.position.set(0, 5, 20);
    }

    render() {
        renderer.render(scene, camera);
    }

    start() {
        loop.start(objState);
    }

    stop() {
        loop.stop();
    }

    getObj() {
        return targetObj;
    }

    getObjState() {
        return objState;
    }

    setState(state) {
        objState = state;
        // loop.changeState(state);
    }

    openAnim() {
        let a = new Vector3();

        zoomIn(targetObj, a);

        // console.log(a);
    }

    makeVector(x, y, z) {
        return new Vector3(x, y, z);
    }
}

export { World };
