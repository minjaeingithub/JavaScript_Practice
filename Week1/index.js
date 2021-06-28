var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image1 = document.getElementsByClassName("img1")[0];
var image2 = document.getElementsByClassName("img2")[0];

//change imgs depending on randomNumber
while (randomNumber1 <= 6) {
  image1.setAttribute("src", randomDiceImage1);
}
while (randomNumber2 <= 6) {
  image2.setAttribute("src", randomDiceImage2);
}

//winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "🎲 Roll the Dice Again!";
}
