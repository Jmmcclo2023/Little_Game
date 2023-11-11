/*
This file is for stuff/code that's currently 
not being used but don't want to throw away
right now


LITTLE GAME JS
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


LITTLE GAME CSS
#game {
    width: 500px;
    height: 200px;
    border: 1px solid black;
    position: fixed;
    top: 0px;
    left: 0px;
}

#character {
    width: 20px;
    height: 50px;
    background-color: crimson;
    position: relative;
    top: 150px;
}

#obstacle {
    width: 20px;
    height: 20px;
    background-color: coral;
    position: relative;
    top: 130px;
    left: 480px;
    animation: obstacle 2s infinite linear;
}

.animate {
    animation: jump 500ms; 
}

@keyframes obstacle {
    0% {left: 480px;}
    100% {left: -40px;}
}

@keyframes jump {
    0% {top: 150px;}
    30% {top: 100px;}
    70% {top: 100px;}
    100% {top: 150px;}
}

LITTLE GAME HTML
        <!-- <div id="game">
            <div id="character"></div>
            <div id="obstacle"></div>
        </div> -->


*/