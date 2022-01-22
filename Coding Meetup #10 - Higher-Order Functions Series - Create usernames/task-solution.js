const addUsername = (list) => {
  let date = new Date();
  return list.map(data => ({...data, 
                            username: data.firstName.toLowerCase() + data.lastName[0].toLowerCase() + (date.getFullYear() - data.age)}));
};