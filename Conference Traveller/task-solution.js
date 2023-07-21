const conferencePicker = (citiesVisited, citiesOffered) => {
  const citiesSuitable = citiesOffered.filter((c) => !citiesVisited.includes(c));
  return citiesSuitable.length ? citiesSuitable[0] : 'No worthwhile conferences this year!';
};
