let sec = 59;
let hit = 0;
let score = 0;
let gameActive = true; // This will track if the game is still active

function makeBubble() {
    var a = document.querySelector('.pbtm');
    let storage = '';
    for (let i = 0; i < 112; i++) {
        storage += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    a.innerHTML = storage;
}

function timer() {
    let interval = setInterval(function () {
        document.querySelector('#timer').innerHTML = sec;
        sec--;
        if (sec == -1) {
            clearInterval(interval);  // Stop the interval
            gameActive = false; // Set gameActive to false when the timer ends
        }
    }, 1000);
}

function getNewHit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector('#hit').innerHTML = hit;
}

function increaseScore() {
    if (gameActive) { // Only increase score if the game is still active
        score += 10;
        document.querySelector('#scores').innerHTML = String(score);
        getNewHit();
        makeBubble();
    }
}

document.querySelector('.pbtm').addEventListener('click', function (details) {
    if (!gameActive) return; // If the game is no longer active, do nothing
    let clicked_button = details.target.innerHTML;
    if (clicked_button == hit) {
        increaseScore();
    }
});

getNewHit();
makeBubble();
timer(); // This should always be down
