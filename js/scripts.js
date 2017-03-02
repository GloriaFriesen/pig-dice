//Business Logic
function Player (firstName) {
  this.firstName = firstName;
  this.playerTurn = true;
  this.roll = 0;
  this.turn = 0;
  this.score = 0;
}

Player.prototype.switchTurnTrue = function() {
  this.playerTurn = true;
}

Player.prototype.switchTurnFalse = function() {
  this.playerTurn = false;
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

Player.prototype.checkWinner = function() {
  if (this.score >= 100) {
    alert("You've Won!");
  }
}

//User Logic
$(document).ready(function() {
  $("#playerForm").submit(function(){
    event.preventDefault();

    var firstName1 = $("input#playerOne").val();
    var newPlayerOne = new Player (firstName1);
    var firstName2 = $("input#playerTwo").val();
    var newPlayerTwo = new Player (firstName2);

    newPlayerTwo.playerTurn = false;

  $("#rollButton").click(function() {
    if (newPlayerOne.playerTurn === true && newPlayerTwo.playerTurn === false) {
        newPlayerOne.getRoll();
        $("#playerOneRoll").html("<h4>Current Roll " + newPlayerOne.roll + "</h4>");
      if (newPlayerOne.roll <= 1){
        newPlayerOne.roll1();
        $("#playerOneTurn").html("<h4>You've Rolled a One. End of Turn.</h4>");
        newPlayerOne.switchTurnFalse();
        newPlayerTwo.switchTurnTrue();
      } else if (newPlayerOne.roll > 1) {
        newPlayerOne.addRoll();
        $("#playerOneTurn").html("<h4>Current Turn " + newPlayerOne.turn + "</h4>");
      }
    }

    if (newPlayerTwo.playerTurn === true && newPlayerOne.playerTurn === false) {
      newPlayerTwo.getRoll();
      $("#playerTwoRoll").html("<h4>Current Roll " + newPlayerTwo.roll + "</h4>");
      if (newPlayerTwo.roll <= 1) {
        newPlayerTwo.roll1();
        $("#playerTwoTurn").html("<h4>You've Rolled a One. End of Turn.</h4>");
        newPlayerOne.switchTurnTrue();
        newPlayerTwo.switchTurnFalse();
      } else if (newPlayerTwo.roll > 1) {
        newPlayerTwo.addRoll();
        $("#playerTwoTurn").html("<h4>Current Turn " + newPlayerTwo.turn + "</h4>");
      }
    }
    console.log(newPlayerOne)
    console.log(newPlayerTwo)
  });

  $("#holdButton").click(function() {
    if (newPlayerOne.playerTurn === true && newPlayerTwo.playerTurn === false) {
      newPlayerOne.addTurn();
      $("#playerOneScore").html("<h4>Score " + newPlayerOne.score + "</h4>");
      newPlayerOne.switchTurnFalse();
      newPlayerTwo.switchTurnTrue();
      newPlayerOne.checkWinner();
    } else if (newPlayerTwo.playerTurn === true && newPlayerOne.playerTurn === false) {
      newPlayerTwo.addTurn();
      $("#playerTwoScore").html("<h4>Score " + newPlayerTwo.score + "</h4>");
      newPlayerTwo.switchTurnFalse();
      newPlayerOne.switchTurnTrue();
      newPlayerTwo.checkWinner();
    }
    // newPlayer.addTurn();
    // newPlayerOne.switchTurn();
    // newPlayer.checkWinner();
    // console.log(newPlayerOne)
    // console.log(newPlayerTwo)
  });
});
});
