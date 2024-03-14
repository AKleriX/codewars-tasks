const sensorAnalysis = (sensor_data) => {
  const mean = sensor_data.reduce((s, d) => s + d[1], 0) / sensor_data.length,
    sum = sensor_data.reduce((s, d) => s + (d[1] - mean) ** 2, 0);
  return [+mean.toFixed(4), +Math.sqrt((1 / (sensor_data.length - 1)) * sum).toFixed(4)];
};
