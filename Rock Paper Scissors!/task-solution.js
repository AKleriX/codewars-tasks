const rps = (p1, p2) => p1 === p2 ? 'Draw!' : `Player ${/scissorspaper|paperrock|rockscissors/i.test(p1+p2) ? 1 : 2} won!`;