var wins = 0;
var losses = 0;
var ties = 0;

var computerOptions = ["R", "P", "S"];

// START OF THE GAME -----------------------------------------------------------------------

startGame();
function startGame() {
  var userInput = prompt("Enter R, P, S:");
  var useResult = userInput.toUpperCase();
  if (computerOptions.includes(useResult)) {
    random(useResult);
  } else {
    alert("That was an invalid entry. Please type R, P, S and try again");
    startGame();
  }
}

// COMPUTER CHOOSES LETTER -----------------------------------------------------------------------

function random(useResult) {
  var num = Math.floor(Math.random() * 3);
  alert("The computer chose " + computerOptions[num]);
  if (computerOptions[num] !== useResult) {
    computerAnswer = computerOptions[num];
    comparison(computerAnswer, useResult);
  }
  if (computerOptions[num] === useResult) {
    alert("It's a tie!");
    ties++;
    displayStats();
  }
}

// LOSE OR WIN COMPARISON -----------------------------------------------------------------------

function comparison(computerAnswer, useResult) {
  if (
    (computerAnswer == "R" && useResult == "P") ||
    (computerAnswer == "S" && useResult == "R") ||
    (computerAnswer == "P" && useResult == "S")
  ) {
    alert("You won!");
    wins++;
    displayStats();
  } else if (
    (computerAnswer == "P" && useResult == "R") ||
    (computerAnswer == "R" && useResult == "S") ||
    (computerAnswer == "S" && useResult == "P")
  ) {
    alert("You lost!");
    losses++;
    displayStats();
  }
}

// DISPLAYS STATS AFTER USER INPUT -----------------------------------------------------------------------

function displayStats() {
  var msg =
    "Stats: \nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties;
  alert(msg);
  playAgain();
}

// ASKS USER TO PLAY AGAIN -----------------------------------------------------------------------

function playAgain() {
  if (confirm("Would you like to play again?") == true) {
    startGame();
  } else {
    finalStats();
  }
}

// DISPLAYS FINAL STATS -----------------------------------------------------------------------

function finalStats() {
  var msg =
    "Final Stats: \nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties;
  alert(msg);
}
