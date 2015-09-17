var rollDice = function() {
  var randomNumber = Math.round(Math.random() * 5 + 1)
  return randomNumber
}

var playerOneScore = 0
var playerTwoScore = 0
var turnScore = 0
var counter = 0
var scoreToWin = 100

var rollPigDice = function() {
  var diceRoll = rollDice()
  if (diceRoll === 1) {
    turnScore = 0
    counter += 1
  }
  else {
    turnScore += diceRoll
  }
  return turnScore
}


var addPlayerOneScore = function() {
  playerOneScore += turnScore
  if (playerOneScore >= scoreToWin) {
    confirm("YOU FUUUUUUCKING WON IT BRAH # 1! Click OK to play again.");
    document.location.reload(true);
  }
  turnScore = 0
}


var addPlayerTwoScore = function() {
  playerTwoScore +=turnScore
  if (playerTwoScore >= scoreToWin) {
    confirm("YOU FUUUUUUCKING WON IT BRAH # 2! Click OK to play again.");
    document.location.reload(true);
  }
  turnScore = 0
}


$(document).ready(function() {
  $("button#roll-dice").click(function() {
    var newScore = rollPigDice()
    $(".scores h3#turn-score").text(newScore)
    // $(".scores h2#dice-roll").text(diceRoll)
    if (counter % 2 !== 0 && newScore === 0) {
      $("h2#whose-turn").text("Player 2 is on a roll!")
    } else if (counter % 2 === 0 && newScore === 0){
      $("h2#whose-turn").text("Player 1 is on a roll!")
    }
  })

  $("h2#whose-turn").text("Player 1 is on a roll!")
   $("button#end-turn").click(function() {
     counter += 1
     if (counter % 2 !== 0) {
       addPlayerOneScore()
       $("h2#whose-turn").text("Player 2 is on a roll!")
       $(".scores h4#player1-total-score").text("Player 1 total score: " + playerOneScore)
     } else {
       addPlayerTwoScore()
       $("h2#whose-turn").text("Player 1 is on a roll!")
       $(".scores h4#player2-total-score").text("Player 2 total score: " + playerTwoScore)
     }
   })

})
// counter % 2 === 0 && <-this goes with this -> newScore === 0
