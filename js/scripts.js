//Business Logic
var rolls = [];
var turns = [];
var scores = [];

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
    var totalTurn = 0

    $("#holdButton").click(function(){
      $(this).data('clicked', true);
      turns = [];
    });

    if (roll <= 1) {
      totalTurn = 0;
    } else if (roll > 1) {
      turns.push(roll);
      turns.forEach(function(turn) {
      totalTurn += turn
      });
      if ($('#holdButton').data('clicked')) {
        scores.push(totalTurn);
      }
    }

    console.log(turns);
    console.log(totalTurn);

    var newPlayerOne = new Player (player1, roll, totalTurn)

    var newPlayerTwo = new Player (player2, roll, totalTurn)
    console.log(newPlayerOne);
    console.log(newPlayerTwo);
  });
});
