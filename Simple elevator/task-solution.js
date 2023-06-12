function goto(level = -1, button = '-1') {
  if (
    typeof level !== 'number' ||
    typeof button !== 'string' ||
    !/^[0-3]$/.test(level.toString()) ||
    !/^[0-3]$/.test(button)
  )
    return 0;
  return level > +button ? -level + +button : +button - level;
}
