export function flyBy(lamps: string, drone: string): string {
  return (
    'o'.repeat(drone.length > lamps.length ? lamps.length : drone.length) +
    'x'.repeat(lamps.length - drone.length < 0 ? 0 : lamps.length - drone.length)
  );
}
