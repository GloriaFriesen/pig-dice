//Business Logic
var rolls = [];
var turns = [];

function Player (firstName, roll, turn, score) {
  this.firstName = firstName,
  this.roll = roll;
  this.turn = turn;
  this.score = score;
}

function getRoll(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Player.prototype.addRoll = function () {
//
//   this.turn += this.roll;
// }





//User Logic
$(document).ready(function() {
  $("#playerForm").submit(function(){
    event.preventDefault();

    var player1 = $("input#playerOne").val();
    var player2 = $("input#playerTwo").val();

    var roll = parseInt(getRoll(1,6));


    turns.push(roll);
    console.log(turns);
    var totalTurn = 0
    turns.forEach(function(turn) {
      totalTurn += turn
    });
    console.log(totalTurn);

    var newPlayerOne = new Player (player1, roll, totalTurn)

    var newPlayerTwo = new Player (player2, roll, totalTurn)
    console.log(newPlayerOne);
    console.log(newPlayerTwo);
  });
});
