const itinerary = (travel) =>
  travel
    .map((d, i, t) => (!t[i + 1] || d.out !== t[i + 1].in ? d.in + '-' + d.out : d.in))
    .join('-');
