const array = [1, 2, 3, 4];

const coco = {
    1: {
        imgUrl: "https://i.imgur.com/Jk3pGZU.jpg"
    },
    2: {
        imgUrl: 'https://i.imgur.com/ELv8xT1.jpg'
    },
    3: {
        imgUrl: 'https://i.imgur.com/bmJNfFE.jpg'
    },
    4: {
        imgUrl: "https://i.imgur.com/J7Iw3J0.jpg"
    }

};


var gameScore = 0;
let scores, winner;
document.getElementById("reset").addEventListener("click", resetGame);
const scoreInput = document.querySelector('h2');
const slotBox = document.querySelector(' div');
const spinner = document.querySelector("button").addEventListener('click', handleClick);



function shuffle(array) {
    if (gameScore === "Winner!") return;
    var x = "";
    for (var i = 0; i < array.length; i++) {
        x += "" + `<img src="${coco[array[spinSlot()]].imgUrl}">`;
    }
    document.getElementById("slot").innerHTML = x;
};

function spinSlot() {
    if (gameScore === "Winner!") return;
    return Math.floor(Math.random() * array.length)
};


function handleClick(evt) {
    if (gameScore === "Winner!") return;
    scoreBoard()
    coins()
    render();
}



function scoreBoard() {
    if (("https://i.imgur.com/Jk3pGZU.jpg" === "https://i.imgur.com/Jk3pGZU.jpg") || ('https://i.imgur.com/J7Iw3J0.jpg' === 'https://i.imgur.com/J7Iw3J0.jpg') || ('https://i.imgur.com/bmJNfFE.jpg' === 'https://i.imgur.com/bmJNfFE.jpg')||('https://i.imgur.com/ELv8xT1.jpg' === 'https://i.imgur.com/ELv8xT1.jpg')) {
        return gameScore = (gameScore + 50);
    } else if ("https://i.imgur.com/Jk3pGZU.jpg" === "https://i.imgur.com/Jk3pGZU.jpg" && "https://i.imgur.com/Jk3pGZU.jpg" || 'https://i.imgur.com/ELv8xT1.jpg' === 'https://i.imgur.com/ELv8xT1.jpg' && 'https://i.imgur.com/ELv8xT1.jpg' || 'https://i.imgur.com/bmJNfFE.jpg' === 'https://i.imgur.com/bmJNfFE.jpg' && 'https://i.imgur.com/bmJNfFE.jpg') {
        gameScore = gameScore + 200;
    }
    
    return gameScore;

}

function coins() {
    if (gameScore >= 1000) { gameScore = "Winner!" };
}

function render() {
   
    scoreInput.textContent = gameScore

}

function resetGame(evt) {
    window.location.reload();
  }