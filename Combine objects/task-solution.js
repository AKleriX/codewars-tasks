const combine = (...objs) =>
  objs.reduce((r, o) => (Object.keys(o).forEach((p) => (r[p] = (r[p] || 0) + o[p])), r), {});
