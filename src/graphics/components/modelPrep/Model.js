import { AnimationMixer } from '/node_modules/three/src/animation/AnimationMixer.js';
import * as TWEEN from '/node_modules/@tweenjs/tween.js/dist/tween.esm.js';

let model;
let mixer;
let tweenList = [];
let clipList = [];

class Model {

    constructor (name, data, state) {
        this.name = name;
        this.data = data;
        this.state = state;

        // call init method here if applicable

        model = this.data.scene;
        mixer = new AnimationMixer(model);
    }

    setupAnimationClips() {
        for (const clip of this.data.animations) {
            let action = mixer.clipAction(clip);
            clipList.push(action);
        }
    }

    createTween(target, paraObj) {
        let prop = paraObj.property;
        let end = paraObj.endValue;
        let dur = paraObj.duration;

        let tweenProps = {};
        tweenProps[prop] = end;

        let newTween = new TWEEN.Tween(model[target])
            .to(tweenProps, dur)

        tweenList.push(newTween);
    }

    getModel() {
        return this.data.scene;
    }

    getState() {
        return this.state;
    }

    setState(newState) {
        this.state = newState;
    }

    getTween(number) {
        return tweenList[number];
    }

    updateAllTweens() {
        TWEEN.update();
    }

    startTween(number) {
        tweenList[number].start();
        // console.log(tweenList[number])
        // console.log('here!');
    }

    stopTween(number) {
        tweenList[number].stop();
    }
}

export {
    Model,
}