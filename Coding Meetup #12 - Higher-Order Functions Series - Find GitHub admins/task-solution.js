function findAdmin(list, lang) {
  return list.filter((data) => data.language === lang && data.githubAdmin === 'yes');
}
