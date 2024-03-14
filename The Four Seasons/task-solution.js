const fourSeasons = (d) =>
  d < 80 || (d > 354 && d < 366)
    ? 'Winter Season'
    : d < 172
    ? 'Spring Season'
    : d < 264
    ? 'Summer Season'
    : d < 355
    ? 'Autumn Season'
    : 'The year flew by!';
