function roastLegacy(workloads) {
  const points = {
    cobol: 1000,
    nonobject: 500,
    monolithic: 500,
    fax: 100,
    modem: 100,
    thickclient: 50,
    tape: 50,
    floppy: 50,
    oldschoolit: 50,
  };
  let problemsCounter = (
      workloads.match(/slow!|expensive!|manual!|down!|hostage!|security!/gi) || []
    ).length,
    vals =
      workloads.match(
        /COBOL|nonobject|monolithic|fax|modem|thickclient|tape|floppy|oldschoolIT/gi,
      ) || [],
    counter = vals.reduce((s, w) => s + points[w.toLowerCase()], 0);
  return problemsCounter === 0 && counter === 0
    ? `These guys are already DevOps and in the Cloud and the business is happy!`
    : `Burn baby burn disco inferno ${counter} points earned in this roasting and ${problemsCounter} complaints resolved!`;
}
