const hasPermission = (db, cat) => {
  let allowAll = db.includes('*_allow'),
    denyAll = db.includes('*_deny'),
    allowSpecific = db.includes(`${cat}_allow`),
    denySpecific = db.includes(`${cat}_deny`);
  if (denySpecific) return false;

  if (allowSpecific) return true;

  if (allowAll && !denyAll) return true;
  return false;
};
