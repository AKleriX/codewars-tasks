class RankCalculator {
  static GetRankings(pointsByClimber) {
    return pointsByClimber
      .map(({ name, points }) => ({
        name,
        points: points
          .sort((a, b) => b - a)
          .slice(0, 6)
          .reduce((sum, score) => sum + score, 0),
      }))
      .sort((a, b) => b.points - a.points);
  }
}
