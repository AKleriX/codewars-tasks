const match = (job, candidates) =>
  candidates.filter(
    (c) =>
      ((!c.desiresEquity && !job.equityMax) || job.equityMax) &&
      job.locations.some((l) => l === c.currentLocation || c.desiredLocations.includes(l)),
  );
