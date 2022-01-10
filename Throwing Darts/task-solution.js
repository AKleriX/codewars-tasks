function scoreThrows(radii){
    let score = radii.reduce((points, r) => {
      if (r >= 5 && r <= 10)
        points += 5;
      if (r < 5) points += 10;
      return points;
    }, 0);
    return radii.every((r) => r < 5) && radii.length > 0 ? 100 + score : score;
  }