function findEmployeesRole(name) {
  const [firstName, lastName] = name.split(' ');
  for (let i = 0; i < employees.length; i++)
    if (employees[i].firstName === firstName && employees[i].lastName === lastName)
      return employees[i].role;
  return 'Does not work here!';
}
