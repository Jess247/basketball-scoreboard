const homeScoreText = document.querySelector('.home-score');
const guestScoreText = document.querySelector('.guest-score');
const addOneBtnHome = document.querySelector('.plus-one-h');
const addTwoBtnHome = document.querySelector('.plus-two-h');
const addThreeBtnHome = document.querySelector('.plus-three-h');
const addOneBtnGuest = document.querySelector('.plus-one-g');
const addTwoBtnGuest = document.querySelector('.plus-two-g');
const addThreeBtnGuest = document.querySelector('.plus-three-g');

let homeScore = 0;
let guestScore = 0;

addOneBtnHome.addEventListener('click', addOneHome);
addTwoBtnHome.addEventListener('click', addTwoHome);
addThreeBtnHome.addEventListener('click', addThreeHome);
addOneBtnGuest.addEventListener('click', addOneGuest);
addTwoBtnGuest.addEventListener('click', addTwoGuest);
addThreeBtnGuest.addEventListener('click', addThreeGuest);

function addOneGuest() {
    guestScore++;
    guestScoreText.textContent = guestScore;
}

function addTwoGuest() {
    guestScore += 2;
    guestScoreText.textContent = guestScore;
}

function addThreeGuest() {
    guestScore += 3;
    guestScoreText.textContent = guestScore;
}


function addOneHome() {
    homeScore++;
    homeScoreText.textContent = homeScore;
}

function addTwoHome() {
    homeScore += 2;
    homeScoreText.textContent = homeScore;
}

function addThreeHome() {
    homeScore += 3;
    homeScoreText.textContent = homeScore;
}
