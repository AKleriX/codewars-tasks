export class Pong {
  maxScore: number;
  currentScore: number[];
  currentPlayer: number;

  constructor(_maxScore: number) {
    this.maxScore = _maxScore;
    this.currentScore = [0, 0];
    this.currentPlayer = 0;
  }

  play(ballPos: number, playerPos: number): string {
    if (this.currentScore.indexOf(this.maxScore) > -1) return 'Game Over!';
    if (ballPos >= playerPos - 3 && ballPos <= playerPos + 3) {
      let str = `Player ${this.currentPlayer ? 2 : 1} has hit the ball!`;
      this.currentPlayer = +!this.currentPlayer;
      return str;
    }
    if (++this.currentScore[+!this.currentPlayer] === this.maxScore)
      return `Player ${!this.currentPlayer ? 2 : 1} has won the game!`;
    this.currentPlayer = +!this.currentPlayer;
    return `Player ${!this.currentPlayer ? 2 : 1} has missed the ball!`;
  }
}
