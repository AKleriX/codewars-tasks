const getNiceNames = (people) => checker(people, true);

const getNaughtyNames = (people) => checker(people, false);

const checker = (people, isNice) => people.filter((p) => p.wasNice === isNice).map((p) => p.name);
