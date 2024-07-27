const distribute = (nodes, workload) => {
  return Array.from({ length: nodes }, (_, i) =>
    Array.from(
      { length: Math.floor(workload / nodes) + (i < workload % nodes ? 1 : 0) },
      (_, j) => j + i * Math.floor(workload / nodes) + Math.min(i, workload % nodes),
    ),
  );
};
