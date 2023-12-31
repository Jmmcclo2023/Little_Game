// import { MathUtils } from "/node_modules/three/src/math/MathUtils.js";

// List of Animations for Object

// Print Objects Position
function objPos (obj) {
    console.log(obj.position);
}

function objRot (obj) {
    console.log(obj.rotation.y);

    let rad = MathUtils.degToRad(-90);
    // console.log(rad);

    obj.rotateY(rad);
    console.log(obj.rotation.y);

    // console.log(cam)
    let c = cam.position;

    // obj.lookAt(c.x - 400, c.y-5, c.z);
    // console.log(obj.rotation);

    // camera.position.setZ(30);
    // camera.position.set(x, y, z);
}

// Idle Rotation
// - Maybe doesn't need a function, since goes back to loop
// - To stop rotation, maybe stop World loop (World.stop)
//      then call World.render to animate only when needed
//      When done, start loop again with World.start


// Zoom InS
// - Maybe move the position of the camera
// - Pass in the world object
// Maybe us zoom factor? (Default is 1)
function zoomIn (obj, vec) {
    obj.getWorldDirection(vec);
    // console.log(vec);
    // console.log(obj.rotation);
    // console.log(MathUtils.radToDeg(obj.rotation.y));
    // console.log(MathUtils.radToDeg(vec.x));
    // console.log(vec.x);

    obj.lookAt(-1, 0, 0);

    obj.getWorldDirection(vec);
    // console.log(vec);
    // console.log(MathUtils.radToDeg(vec.x));
    // console.log(vec.x);
    // console.log(vec);
    // console.log(obj.rotation);
    // console.log(MathUtils.radToDeg(obj.rotation.y));
}

// Zoom Out
// - Maybe move the position of the camera
function zoomOut (camera) {

}


// Open Pokedex
// - Plays animation from glb file

// Close Pokedex
// - Plays animation from glb file

export {
    zoomIn,
}