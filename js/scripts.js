//Business Logic
function Player (firstName, roll, turn, score) {
  this.firstName = firstName,
  this.roll = roll;
  this.turn = turn;
  this.score = score;
}

function getRandomIntInclusive(min, max) {
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

    var newPlayerOne = new Player (player1)

    var newPlayerTwo = new Player (player2)
    // console.log(newPlayerOne);
    // console.log(newPlayerTwo);
    console.log(getRandomIntInclusive(1, 6));


  });
});
