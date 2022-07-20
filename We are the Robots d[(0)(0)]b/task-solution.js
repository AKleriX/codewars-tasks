function countRobots(a) {
  let counter = [0, 0];
  for (let i = 0; i < a.length; i++)
    if (/automatik/i.test(a[i]))
      counter[0] += (
        a[i].match(
          /[a-z][|};&#\[\]\/><()*]{2}0[|};&#\[\]\/><()*]{2}0[|};&#\[\]\/><()*]{2}[a-z]/gi,
        ) || []
      ).length;
    else if (/mechanik/i.test(a[i]))
      counter[1] += (
        a[i].match(
          /[a-z][|};&#\[\]\/><()*]{2}0[|};&#\[\]\/><()*]{2}0[|};&#\[\]\/><()*]{2}[a-z]/gi,
        ) || []
      ).length;
  return [`${counter[0]} robots functioning automatik`, `${counter[1]} robots dancing mechanik`];
}
