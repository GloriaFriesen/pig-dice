//Business Logic
function Player (firstName, roll, turn, score) {
  this.firstName = firstName,
  this.roll = roll;
  this.turn = turn;
  this.score = score;
}









//User Logic
$(document).ready(function() {
  $("#playerForm").submit(function(){
    event.preventDefault();

    var player1 = $("input#playerOne").val();
    var player2 = $("input#playerTwo").val();

    var newPlayerOne = new Player (player1)

    var newPlayerTwo = new Player (player2)
    alert(newPlayerOne.firstName);
    console.log(newPlayerOne);
    console.log(newPlayerTwo);


  });
});
