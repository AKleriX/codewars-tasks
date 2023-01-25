function wallpaper(l, w, h) {
  let rolls = Math.ceil(((l * 2 + w * 2) * h * 1.15) / 5.2);
  return numbers[l * w * h ? rolls : 0];
}
