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

let isIdle = true;
let targetObj;

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
        const { tvHead } = await loadModels();
        targetObj = tvHead;

        // Works, but no line art
        // const { tvCamera } = await loadCamera();
        // scene.add(tvCamera);

        // Also Works, still no line art
        // camera = await loadCamera();

        // controls.target.copy(tvHead.position);

        // scene.add(flamingo);
        scene.add(tvHead);

        tvHead.position.set(0, 0, 0);

        // Works
        loop.updatables.push(tvHead);
        tvHead.tick = () => {
            tvHead.rotation.y += 0.01;
        }

        // Pretty Good (maybe 17?)
        // camera.position.set(15, 15, 15);
        camera.position.set(0, 5, 20);
    }

    render() {
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }

    /*
    get camera() {
        return camera;
    }
    */

    getCamera() {
        return camera;
    }

    getIdleState() {
        return isIdle;
    }

    flipIdleState() {
        isIdle = !isIdle;
    }

    openAnim() {
        let a = new Vector3();

        zoomIn(targetObj, a);

        // console.log(a);
    }
}

export { World };
