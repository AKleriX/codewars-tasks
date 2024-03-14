const kangaroo = (kanga1, rate1, kanga2, rate2) => {
  const near = kanga1 < kanga2 ? [kanga1, rate1] : [kanga2, rate2],
    far = kanga1 < kanga2 ? [kanga2, rate2] : [kanga1, rate1];
  return far[1] < near[1] && !((far[0] - near[0]) % (near[1] - far[1]));
};
