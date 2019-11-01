const coco = {
    0:{imgUrl:"https://i.imgur.com/J7Iw3J0.jpg"},
    1:{imgUrl:"https://i.imgur.com/zCe0nHA.jpg"},
    2:{imgUrl:"https://i.imgur.com/3utOB37.jpg"},
}
const arry = [0,1,2]


//event listeners//
const scoreInput = document.querySelector('h2');
const slotBox = document.querySelector("section");
const spinner = document.querySelector("button");

function shuffle(arry){
    if (gameScore === "Winner!") return;
    var score = "";
    for (var i = 0; i <arry.length; i++) {
        score += "" + `<img src="${coco[arry[spinSlot()]].imgUrl}">`;
    }
    document.getElementById("box").innerHTML = score;
}
function spinSlot() {
    if (gameScore === "Winner!") return;
    return Math.floor(Math.random() * arry.length)
}; console.log("YOOOO");



function scoreBoard(){
    if(("https://i.imgur.com/J7Iw3J0.jpg" === "https://i.imgur.com/J7Iw3J0.jpg")
    ||("https://i.imgur.com/zCe0nHA.jpg" === "https://i.imgur.com/zCe0nHA.jpg")
    ||( "https://i.imgur.com/3utOB37.jpg" === "https://i.imgur.com/3utOB37.jpg")){
       return gameScore = (gameScore + 100);
} else if ("https://i.imgur.com/J7Iw3J0.jpg" === "https://i.imgur.com/J7Iw3J0.jpg" && "https://i.imgur.com/J7Iw3J0.jpg"
    ||"https://i.imgur.com/zCe0nHA.jpg" === "https://i.imgur.com/zCe0nHA.jpg" && "https://i.imgur.com/zCe0nHA.jpg"
    ||"https://i.imgur.com/3utOB37.jpg"=== "https://i.imgur.com/3utOB37.jpg" && "https://i.imgur.com/3utOB37.jpg"){
        gameScore = (gameScore + 200);
    } 
    else if (time === 0 && score < 600) {
        return "Better luck next time !";
    }
        return gameScore;
}