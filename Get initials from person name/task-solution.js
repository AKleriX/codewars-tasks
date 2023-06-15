const toInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0] + '.')
    .join(' ');
