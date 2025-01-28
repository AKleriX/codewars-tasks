const vaccineList = (age, status, month) => {
  const vaccinations = {
      fiveInOne: ['8 weeks', '12 weeks', '16 weeks'],
      pneumococcal: ['8 weeks', '16 weeks'],
      rotavirus: ['8 weeks', '12 weeks'],
      meningitisB: ['8 weeks', '16 weeks', '12 months'],
      hibMenC: ['12 months'],
      measlesMumpsRubella: ['12 months', '40 months'],
      fluVaccine: ['september', 'october', 'november'],
      preSchoolBooster: ['40 months'],
    },
    vaccineList = new Set();

  for (const [vaccine, schedule] of Object.entries(vaccinations)) {
    if (schedule.includes(age) || schedule.includes(status)) vaccineList.add(vaccine);
    if (vaccine === 'fluVaccine' && schedule.includes(month)) vaccineList.add('offer fluVaccine');
  }

  return Array.from(vaccineList).sort();
};
