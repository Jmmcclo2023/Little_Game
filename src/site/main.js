import { World } from './../graphics/World.js';

async function main() {

    const container = document.querySelector('#scene-container');

    const world = new World(container);

    await world.init();

    world.start();

    // This does work
    container.addEventListener("click", () => {
        if (world.getIdleState()) {
            world.stop();
            world.openAnim();
            world.render();
            world.flipIdleState();
        }

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
                if (!world.getIdleState()) {
                    world.start();
                    // call ZoomOut
                    world.flipIdleState();
                }
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