function potatoes(p0, w0, p1) {
  let matterKg = (w0 / 100) * (100 - p0),
    matterDryPr = 100 - p1;
  return Math.trunc(matterKg + (matterKg / matterDryPr) * p1);
}
