function indexOf(head, value) {
  let place = head,
    idx = 0;
  while (place && place.data !== value) {
    place = place.next;
    idx++;
  }
  return place && place.data === value ? idx : -1;
}
