function calculate1RM(w, r) {
  const epleyRM = w * (1 + r / 30),
    mcGlothinRM = (100 * w) / (101.3 - 2.67123 * r),
    lombardiRM = w * r ** 0.1;
  return r === 0 ? 0 : r === 1 ? w : Math.round(Math.max(epleyRM, mcGlothinRM, lombardiRM));
}
