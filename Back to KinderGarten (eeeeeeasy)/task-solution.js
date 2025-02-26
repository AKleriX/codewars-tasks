const parseKidList = (csv) =>
  csv.split('\n').map((line) => {
    let [name, dob, gender] = line.split(','),
      [d, m, y] = dob.split('/');
    return {
      name: name.toUpperCase(),
      gender: gender.toUpperCase(),
      dob: `${d.padStart(2, '0')}/${m.padStart(2, '0')}/${y}`,
    };
  });

const sortByNames = (kids) =>
  kids.sort((a, b) => a.name.localeCompare(b.name)).map((k) => `${k.name} (${k.gender}) ${k.dob}`);
