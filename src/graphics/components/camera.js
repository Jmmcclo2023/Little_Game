import { PerspectiveCamera } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/';

function createCamera() {
    const camera = new PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1, 1000);
        // (35, 1, 0.1, 100)


    camera.position.set(5, 5, 5);

    return camera;
}

export { createCamera };