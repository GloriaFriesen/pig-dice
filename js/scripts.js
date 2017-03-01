//Business Logic
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









//User Logic
$(document).ready(function() {
  $("#playerForm").submit(function(){
    event.preventDefault();

    var player1 = $("input#playerOne").val();
    var player2 = $("input#playerTwo").val();

    var roll = getRoll(1,6);

    var newPlayerOne = new Player (player1, roll)

    var newPlayerTwo = new Player (player2, roll)
    console.log(newPlayerOne);
    console.log(newPlayerTwo);




  });
});
