export type SensorLog = ['Distance:', number, 'Meters', string];
export type SensorLogs = SensorLog[];
export const sensorAnalysis = (sensorData: SensorLogs): [number, number] => {
  const mean: number = sensorData.reduce((s, d) => s + d[1], 0) / sensorData.length,
    sum: number = sensorData.reduce((s, d) => s + (d[1] - mean) ** 2, 0);
  return [+mean.toFixed(4), +Math.sqrt((1 / (sensorData.length - 1)) * sum).toFixed(4)];
};
