var wins = 0;
var losses = 0;
var ties = 0;

// var computerOptions = ["R", "P", "S"];

// startGame();

// function startGame() {
//   var userInput = prompt("Enter R, P, S:");
//   var useResult = userInput.toUpperCase();
//   if (computerOptions.includes(useResult)) {
//     random(useResult);
//   } else {
//     alert("That was an invalid entry. Please type R, P, S and try again");
//     startGame();
//   }
// }

// function random(useResult) {
//   var num = Math.floor(Math.random() * 3);
//   alert("The computer chose " + computerOptions[num]);
//   if (computerOptions[num] === useResult) {
//     alert("It's a tie!");
//     ties++;
//     displayStats();
//   }
// }
displayStats()
function displayStats() {
    var msg = "Stats: \nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties ;
  alert(msg);
}
