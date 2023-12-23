import { World } from './../graphics/World.js';

async function main() {

    const container = document.querySelector('#scene-container');

    const world = new World(container);

    await world.init();

    world.start();

    // This does work
    container.addEventListener("click", () => {

        if (world.getObjState() == 'idle') {
            world.setState('zoomIn');
            // console.log(world.getObjState());
            // world.getObj().position.set(-9, -6, 5);
            // world.getObj().translateOnAxis(world.makeVector(-9,-6,5), 0.5);
            // console.log(world.getObj().rotation.y);
        }
        

        // if (world.getIdleState()) {
        //     world.stop();
        //     world.openAnim();
        //     world.render();
        //     world.flipIdleState();
        // }

        /*
        else {
            world.start();
            // call ZoomIn
            world.flipIdleState();
        }
        */

    })

    // This is also prob where to call the world.render function

    
    window.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "Escape":
                if (world.getObjState() == 'paused') {
                    world.setState('zoomOut')
                    world.start();
                }

                // if (world.getObjState() != 'idle') {
                //     world.setState('idle');
                // }

                
                break;
            default:
                return;
        }
    })
    

    // container.removeEventListener("click", );
}

main().catch((err) => {
    console.error(err);
});