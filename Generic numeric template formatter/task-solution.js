function numericFormatter(template, num = '1234567890'){
  let counter = 0;
  return template.replace(/[a-z]/gi, () => num[counter++ % num.length]);
}