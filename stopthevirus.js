var score = 0;
var aWidth;
var aHeight;
var duration;
var counter = 0;

window.addEventListener('load', setGameAreaBounds);

function setGameAreaBounds() {
    aWidth = innerWidth;
    aHeight = innerHeight;
    aWidth -= 22;
    aHeight -= 97;
    document.getElementById('gameArea').style.width = aWidth + 'px';
    document.getElementById('gameArea').style.height = aHeight + 'px';
    document.getElementById('virus').addEventListener('click', detectHit);
    aWidth -= 74;
    aHeight -= 74;
    moveVirus();
}

function splat() {
    var audio = new Audio('sounds/sound01.mp3');
    audio.play();
}

function detectHit() {
    score += 1
    document.getElementById('scorelabel').innerHTML = "Score: " + score;
}

function moveVirus() {
    var x = Math.floor(Math.random() * aWidth);
    var y = Math.floor(Math.random() * aHeight);
    document.getElementById('virus').style.left = x + 'px';
    document.getElementById('virus').style.top = y + 'px';
    if (counter < 10) {
        duration = setTimeout("moveVirus()", 1000);
    } else {
        //game over
        alert("GAME OVER");
        document.getElementById('scorelabel').innerHTML = "Game Over, Your Score is: " + score;
        document.getElementById('virus').removeEventListener('click', detectHit);
        clearTimeout(duration);
    }
    counter++;
}