const whosOnline = (friends) => {
  return friends.reduce((data, f) => {
    if (f.status === 'offline') {
      if (!data['offline']) data['offline'] = [];
      data['offline'].push(f.username);
    } else {
      if (f.lastActivity <= 10) {
        if (!data['online']) data['online'] = [];
        data['online'].push(f.username);
      } else {
        if (!data['away']) data['away'] = [];
        data['away'].push(f.username);
      }
    }
    return data;
  }, {});
};
