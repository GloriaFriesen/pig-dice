//Business Logic
var rolls = [];
var turns = [];
var scores = [];
var finalScore = [];

function Player (firstName) {
  this.firstName = firstName;
  this.roll = 0;
  this.turn = 0;
  this.score = 0;
}

Player.prototype.getRoll = function() {
  this.roll = Math.floor(Math.random() * 6) + 1;
}

Player.prototype.addRoll = function () {
  this.turn += this.roll;
}

Player.prototype.addTurn = function () {
  this.score += this.turn;
  this.turn = 0;
}

Player.prototype.roll1 = function () {
  this.turn = 0;
}

var totalScore = 0

//User Logic
$(document).ready(function() {
  $("#playerForm").submit(function(){
    event.preventDefault();

    var player1 = $("input#playerOne").val();
    var newPlayerOne = new Player (player1);

  $("#rollButton").click(function() {
    newPlayerOne.getRoll();

    if (newPlayerOne.roll <= 1){
      newPlayerOne.roll1();
      console.log("Rolled a 1")
    } else if (newPlayerOne.roll > 1) {
      newPlayerOne.addRoll();
    }
    console.log(newPlayerOne)
  });
  $("#holdButton").click(function() {
    newPlayerOne.addTurn();
    console.log("Hold")
    console.log(newPlayerOne)
  });

  });

});
// Work in progres
  //   var totalTurn = 0
  //
  //   if (roll <= 1) {
  //     totalTurn = 0;
  //     turns = [];
  //   } else if (roll > 1) {
  //     turns.push(roll);
  //     turns.forEach(function(turn) {
  //     totalTurn += turn
  //     });
  //   }
  //
  //   $("#holdButton").click(function(){
  //     $(this).data('clicked', true);
  //     turns = [];
  //     scores = [];
  //     scores.push(totalTurn);
  //     scores.forEach(function(score) {
  //     totalScore += score
  //     finalScore.push(totalScore);
  //     });
  //   });
  //   console.log(scores);
  //   console.log(turns);
  //   console.log(totalTurn);
  //   console.log(totalScore);
  //   console.log(finalScore);
  //
  //   var newPlayerOne = new Player (player1, roll, totalTurn, totalScore)
  //
  //   var newPlayerTwo = new Player (player2, roll, totalTurn, totalScore)
  //   console.log(newPlayerOne);
  //   console.log(newPlayerTwo);
  // });
