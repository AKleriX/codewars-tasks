function zipvalidate(postcode) {
  return /^(1|2|3|4|6)\d{5}$/.test(postcode);
}
