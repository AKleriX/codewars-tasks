const createTemplate = (template) => (o) =>
  template.replace(/\{\{[^}]+\}\}/g, (p) => o[p.slice(2, -2)] || '');
