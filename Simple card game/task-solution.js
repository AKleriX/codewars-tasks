function winner(deckSteve, deckJosh) {
  const grades = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'],
        score = deckSteve.reduce((s, c, i) => { 
          if (grades.indexOf(c) > grades.indexOf(deckJosh[i])) s[0]++;  
          else if (grades.indexOf(c) < grades.indexOf(deckJosh[i])) s[1]++;
          return s;
        }, [0, 0]);
  return score[0] !== score[1] ? 
    `${score[0] > score[1] ? 'Steve' : 'Josh'} wins ${score[0] > score[1] ? score[0] : score[1]} \
to ${score[0] < score[1] ? score[0] : score[1]}` 
    : 'Tie';
}