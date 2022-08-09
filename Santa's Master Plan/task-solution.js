const getAttendees = (peopleInvited, responses) => {
  return peopleInvited.filter((name) => {
    for (let i = 0; i < responses.length; i++)
      if (responses[i].name === name) return responses[i].response === 'accepted';
    return true;
  });
};
