function displayValue(value) {
  const hours = (value / 60) | 0,
    days = (hours / 24) | 0,
    weeks = (days / 7) | 0,
    months = (weeks / 4) | 0;
  return `${months ? getCorrectVal(months, ' month') : ''}${
    weeks % 4 ? getCorrectVal(weeks % 4, ' week') : ''
  }${days % 7 ? getCorrectVal(days % 7, ' day') : ''}${
    hours % 24 ? getCorrectVal(hours % 24, ' hour') : ''
  }${value % 60 ? getCorrectVal(value % 60, ' minute') : ''}`.trim();
}

const getCorrectVal = (v, n) => v + n + (v === 1 ? ' ' : 's ');
