var character = 
    document.getElementById("character");

var obstacle = 
    document.getElementById("obstacle");

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate")
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}


var checkDead = setInterval(function() {
    var characterTop =
        parseInt(window.getComputedStyle(character).
        getPropertyValue("top"));

    var obstacleLeft =
        parseInt(window.getComputedStyle(obstacle).
        getPropertyValue("left"));

    if (obstacleLeft < 20 && obstacleLeft > 0 &&
        characterTop >= 130) {
            obstacle.style.animation = "none";
            obstacle.style.display = "none";
            // alert("game over");
        }
}, 10);