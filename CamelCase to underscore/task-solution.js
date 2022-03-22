const toUnderScore = (name) => {
  let underscoreName = '';
  for (let i = 1; i < name.length; i++)
    if (
      (/[A-Z]/.test(name[i]) && /[a-z]|\d/i.test(name[i - 1])) ||
      (/\d/.test(name[i]) && /[a-z]/i.test(name[i - 1]))
    )
      underscoreName += `_${name[i]}`;
    else underscoreName += name[i];
  return name ? name[0] + underscoreName : '';
};
