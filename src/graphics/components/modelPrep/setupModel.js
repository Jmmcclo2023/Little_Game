import { AnimationMixer } from '/node_modules/three/src/animation/AnimationMixer.js';

function setupModel(data) {
    // let model = data.scene.children[0];
    const model = data.scene;

    // Doesn't work
    // const model = data;
    


    // Doesnt Work
    // model += data.scene.children[1];

    // console.log(data);
    // console.log(data.scene.children);
    // console.log(typeof(data.scene.children));
    // console.log(data.scene.children.length);
    // console.log(typeof(model));
    // console.log(model);
    // console.log(data.scene.children[3]);

    /*
    for (let i = 0; i < data.scene.children.length; i++) {
        console.log(i);
        console.log(data.scene.children[i]);

    }
    */

    // const clip = data.animations[0];

    // const mixer = new AnimationMixer(model);
    // const action = mixer.clipAction(clip);
    // action.play();

    // model.tick = (delta) => mixer.update(delta);

    return model;
}

export { setupModel };