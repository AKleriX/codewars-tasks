const checkExam = (array1, array2) => {
    let score = 0;
    array1.forEach((ans, i) => {
      switch (array2[i]){
          case ans:
            score += 4;
            break;
          case '': 
            break;
          default:
            score -= 1;
            break;
      }
    });
    return score < 0 ? 0 : score;
  }