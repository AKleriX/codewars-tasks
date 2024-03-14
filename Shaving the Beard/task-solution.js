const trim = (x) =>
  x.map((a, i) =>
    i < x.length - 1
      ? a.map((h) => (h === 'J' ? '|' : h))
      : Array.from({ length: a.length }, (_) => '...'),
  );
