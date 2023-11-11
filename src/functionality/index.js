import * as ThreeStuff from '/src/graphics/ThreeStuff.js';


// Character State

const charState = {
    movingLeft: false,
    movingRight: false,
    jumping: false,
    hit: false,
}


// 


// Keyboard Input Stuff

const docBody = document.querySelector('body');

docBody.addEventListener('keydown', (e) => {
    getAction(e.key);
})

docBody.removeEventListener('keydown', (e) => {
    getAction(e.key);
});

let getAction = (input) => {
    switch(input) {

        // Jump
        case 'x':
            if (charState.jumping) {
                // Do nothing
            } else {
                charState.jumping = true;
                console.log('Jump\n');
                ThreeStuff.charMesh.position.y += 10;
                setTimeout(() => {
                    ThreeStuff.charMesh.position.y -= 10;
                    charState.jumping = false;
                }, 1000);
            }
            break;

        // Move Right
        case 'ArrowRight':
            if (charState.movingRight) {
                // Do nothing
            } else {
                // charState.movingLeft = false;
                charState.movingRight = true;
                console.log('Move Right\n');
                setTimeout(() => {
                    charState.movingRight = false;
                }, 2000);
            }
            break;

        // Move Left
        case 'ArrowLeft':
            if (charState.movingLeft) {
                // Do nothing
            } else {
                // charState.movingRight = false;
                charState.movingLeft = true;
                console.log('Move Left\n');
                setTimeout(() => {
                    charState.movingLeft = false;
                }, 2000);
            }
            break;

        // Other Keys
        default:
            // console.log(input);
            break;
    }
}


// Magic Number Labels
/*
    ACTION_DELAY
    JUMP_HEIGHT
    MOVEMENT_SPEED

*/

