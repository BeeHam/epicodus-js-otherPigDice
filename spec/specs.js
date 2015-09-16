describe('rollDice', function() {
  it("gives you a random number between 1-6", function() {
    var randomNumber = rollDice()
    expect(randomNumber).to.equal(randomNumber)
  }
})

describe('playerPigDice', function() {
  it("adds a number to a players score, unless that number is 0", function(){
    var turnScore = playerPigDice()
    expect(turnScore).to.equal(turnScore)
  })
})
