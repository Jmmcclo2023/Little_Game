import { Clock } from '/node_modules/three/build/three.module.js';

const clock = new Clock();

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updatables = [];
    }

    start(state) {
        this.renderer.setAnimationLoop(() => {

            this.tick(state);

            this.renderer.render(this.scene, this.camera);
        });
    }

    stop(state) {
        this.renderer.setAnimationLoop(null);
    }

    tick(state) {
        const delta = clock.getDelta();

        for (const object of this.updatables) {
            object.tick(state, delta);
        }
    }
}

export { Loop };