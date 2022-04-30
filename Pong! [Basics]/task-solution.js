class Pong {
  constructor(maxScore) {
    this.maxScore = maxScore;
    this.currentScore = [0, 0];
    this.currentPlayer = 0;
  }

  play(ballPos, playerPos) {
    if (this.currentScore.includes(this.maxScore)) return 'Game Over!';
    if (ballPos >= playerPos - 3 && ballPos <= playerPos + 3) {
      let str = `Player ${this.currentPlayer ? 2 : 1} has hit the ball!`;
      this.currentPlayer = !this.currentPlayer;
      return str;
    }
    if (++this.currentScore[+!this.currentPlayer] === this.maxScore)
      return `Player ${!this.currentPlayer ? 2 : 1} has won the game!`;
    this.currentPlayer = !this.currentPlayer;
    return `Player ${!this.currentPlayer ? 2 : 1} has missed the ball!`;
  }
}
