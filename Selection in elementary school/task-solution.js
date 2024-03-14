const schoolSelection = (array) =>
  array
    .filter((a) => a > 4 && a < 10)
    .reduce(
      (o, a) => (
        (o[
          a === 5
            ? 'Kindergarten'
            : a === 6
            ? '1st grade'
            : a === 7
            ? '2nd grade'
            : a === 8
            ? '3rd grade'
            : '4th grade'
        ] += 1),
        o
      ),
      { Kindergarten: 0, '1st grade': 0, '2nd grade': 0, '3rd grade': 0, '4th grade': 0 },
    );
