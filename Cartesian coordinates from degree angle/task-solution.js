const coordinates = (degrees, radius) => [
  +(radius * Math.cos(degrees * (Math.PI / 180))).toFixed(10),
  +(radius * Math.sin(degrees * (Math.PI / 180))).toFixed(10),
];
