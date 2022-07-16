function fill_gaps(timesheet) {
  let currentSheet = [...timesheet];
  for (let i = 0; i < currentSheet.length; i++)
    if (currentSheet[i] === null && i > 0 && i < currentSheet.length - 1) {
      let lastProject = currentSheet[i - 1],
        j = i + 1;
      for (; currentSheet[j] === null && j < currentSheet.length; j++);
      if (lastProject === currentSheet[j]) currentSheet[i] = lastProject;
    }
  return currentSheet;
}
