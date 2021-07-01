let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = []; //create a new empty array
let userClickedPattern = [];

var started = false; //keep track of game status
var level = 0;
var num = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").html("Level" + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  //reset the array
  userClickedPattern = [];

  level++;
  $("#level-title").html("Level" + level);
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

$(".btn").click(function () {
  var userChosenColur = $(this).attr("id"); //btn 클래스를 가진 것의 아이디 속성을 변수에 할당한다.
  userClickedPattern.push(userChosenColur);
  playSound(userChosenColur);

  //call func checkAnswer when user ends click
  checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  ///when the last element was matching w/ the answer
  if (checkAnswer === gamePattern) {
    console.log("success");

    ///checking whether also the numbers of items are in sequence
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
        g;
      }, 1000);
    }
  } else {
    console.log("wrong");

    playSound("wrong");

    $(body).addClass("game-over");
    setTimeout(function () {
      $(body).removeClass("game-over");
    }, 200);

    $("#level-title").html("Game Over, Press Any Key to Restart");

    startOver();
  }
}

function startOver() {
  //is it okay to use undefined syntax?
  level = 0;
  gamePattern = [];
  started = false;
}
