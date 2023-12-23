import { AnimationMixer } from '/node_modules/three/src/animation/AnimationMixer.js';
import { MathUtils } from "/node_modules/three/src/math/MathUtils.js";
import * as TWEEN from '/node_modules/@tweenjs/tween.js/dist/tween.esm.js';
import { Model } from './Model.js';

function setupModel(data) {

    // Create Model class objects
    const tvModel = new Model('tvModel', data, 'idle');

    // Create Model class objects' Animation Clips
    tvModel.setupAnimationClips();

    // Create all Model class objects' respective Tweens
    tvModel.createTween(
        'rotation', 
        { property: 'y', endValue: (Math.PI * 2), duration: 5000 }
    )

    // Create all Model class objects' tick methods
    tvModel.getModel().tick = (delta) => {

        switch (tvModel.getState()) {
            case 'idle':
                tvModel.startTween(0);
                tvModel.updateAllTweens();
                break;

            case 'zoomIn':

                break;

            case 'pokeOpen':
                break;

            case 'pokeClose':
                break;
            
            case 'zoomOut':
                break;

            case 'pause':
                break;

            default:
                break;
        }
    }

    return tvModel;
}

export { setupModel };




/*
    tvHead.tick = (delta) => {
        let curAng = Math.trunc(MathUtils.radToDeg(tvHead.rotation.y));

        switch (objState) {
            case 'idle':
                if (curAng >= 360) {
                    tvHead.rotation.y = 0;
                    // Has a small jitter but does its job
                    // For now
                }

                // tvHead.rotation.y += 0.01;
                tvHead.rotation.y += MathUtils.degToRad(0.5);

                break;

            // Only works at turn degree of 1 
            case 'zoomIn':

                // Handles Rotation
                // Only works at turn degree of 1 
                if ((curAng != 270) && (curAng != -90)) {
                    if ((curAng > 90) && (curAng < 270)) {
                        tvHead.rotation.y += MathUtils.degToRad(1);
                    } else {
                        tvHead.rotation.y += MathUtils.degToRad(-1);
                    }
                }
                
                // Handles Movement
                // (Only works if translates by 0.1 or 1)
                else if ((tvHead.position.x != 5) &&
                    (tvHead.position.y != -6) &&
                    (tvHead.position.z != 9)) {
                    
                    tvHead.translateOnAxis(this.makeVector(5, -6, 9), 0.1);
                    // console.log(tvHead.position);
                    // Not zoomed in
                    // zoom in
                }
                
                // Pauses Loop
                else {
                    this.setState('paused');
                    // stop()
                }
                break;

            case 'paused':
                this.stop();
                // console.log('paused');
                break;

            case 'zoomOut':
                if ((tvHead.position.x != 0) &&
                    (tvHead.position.y != 0) &&
                    (tvHead.position.z != 0)) {
    
                    tvHead.translateOnAxis(this.makeVector(-5, 6, -9), 0.25);
                }
                else {
                    // Rotates faster after restarting loop for some reason?
                    this.setState('idle');
                }
                break;
            default:
                break;
        }

    }
*/


/*
 console.log(data);

    const model = data.scene;

    // One-To-One ratio of animation clip to animation action
    const clipOne = data.animations[0];
    const clipTwo = data.animations[1];

    // One-To-One ratio of Animation Mixer to model
    const mixer = new AnimationMixer(model);

    const actionOne = mixer.clipAction(clipOne);
    const actionTwo = mixer.clipAction(clipTwo);

    actionOne.play();
    actionTwo.play();

    let type = 'rotation';
    
    // Handles Rotation
    let rotTween = new TWEEN.Tween(model[type]);
    // let rotTween = new TWEEN.Tween(model);
    let startRot = 0;
    let endRot = (Math.PI * 2);
    let duration = 5000;
    rotTween.to({ y: endRot }, duration);
    

    // Need to somehow combine the 2 tick methods

    // mixer.update(delta);

    model.tick = (state, delta) => {

        switch (state) {
            case 'idle':
                // Has a jitter, but works for now
                // Need to add delta somehow
                rotTween.start();
               
                TWEEN.update();
                break;

            case 'zoomIn':
                console.log("reached");
                rotTween.stop();
                TWEEN.update();
                break;

            case 'pokeOpen':
                break;

            case 'pokeClose':
                break;
            
            case 'zoomOut':
                break;

            case 'pause':
                break;

            default:
                break;
        }

    }
*/

