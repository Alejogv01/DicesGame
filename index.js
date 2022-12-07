var randomNumber1 = 1;
var randomNumber2 = 1;
document.querySelector(".dice-player1").setAttribute("src", `dice${randomNumber1}.png`);
document.querySelector(".dice-player2").setAttribute("src", `dice${randomNumber2}.png`);

function playDice() {
    document.querySelector("h1").innerHTML = "Refresh!";
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);
    document.querySelector(".dice-player1").setAttribute("src", `dice${randomNumber1}.png`);
    document.querySelector(".dice-player2").setAttribute("src", `dice${randomNumber2}.png`);

    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber1 > randomNumber2) {

        document.querySelector("h1").innerHTML = "Player 1 Wins";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    }
}


document.querySelector(".play").addEventListener("click", playDice)