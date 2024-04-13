const bitSlice = (image, plane) =>
  image.map((r) => r.map((n) => +n.toString(2).padStart(8, '0')[7 - plane]));
