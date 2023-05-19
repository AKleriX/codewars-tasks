const killcount = (counselors, jason) => counselors.filter((c) => c[1] < jason).map((c) => c[0]);
