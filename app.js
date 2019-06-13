const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
//empty variable
let lasthole;
let timeUp = false;
let score = 0;

// Generates random time
function randomTime (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}//Generates random hole
function randomHole(holes) {
 const idx = Math.floor(Math.random() * holes.length);
 const hole = holes[idx];
 if (hole === lasthole){
     console.log("same one")
    return randomHole(holes);
}
lastHole = hole;
return hole;
 }
 //sets time and hole the mole will pop up
function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    console.log(time, hole)
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) peep()

    }, time);
}
//resets everything to zero ready to start a new game.
function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000)
}

function bonk(e) {
    score++;
    console.log(e);
    this.classList.remove("up");
    this.classList.style.visibility = "hidden";
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
