function likeOrDislike(buttons) {
  return buttons.reduce((s, b) => (b === s ? 'Nothing' : b), 'Nothing');
}
