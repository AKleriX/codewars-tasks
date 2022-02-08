function SnakesLadders() {
  this.ways = {
    2: 38,
    7: 14,
    8: 31,
    15: 26,
    16: 6,
    21: 42,
    28: 84,
    36: 44,
    46: 25,
    49: 11,
    51: 67,
    62: 19,
    64: 60,
    71: 91,
    74: 53,
    78: 98,
    87: 94,
    89: 68,
    92: 88,
    95: 75,
    99: 80
  };
  this.currentPlayer = 0;
  this.playersPositions = [0, 0];
};

SnakesLadders.prototype.play = function(die1, die2) {
  let player = this.currentPlayer;
  if (this.playersPositions.includes(100)) return `Game over!`;
  
  this.playersPositions[this.currentPlayer] += (die1 + die2);
  
  if (this.playersPositions[this.currentPlayer] > 100) 
    this.playersPositions[this.currentPlayer] = 200 - this.playersPositions[this.currentPlayer];
  
  if (this.ways.hasOwnProperty(this.playersPositions[this.currentPlayer]))
    this.playersPositions[this.currentPlayer] = this.ways[this.playersPositions[this.currentPlayer]];
    
  if (this.playersPositions[this.currentPlayer] === 100) return `Player ${player + 1} Wins!`;  
  
  if (die1 !== die2) this.currentPlayer = this.currentPlayer ? 0 : 1;
  
  return `Player ${player + 1} is on square ${this.playersPositions[player]}`;
}