function sortByLanguage(list) {
  return [...list].sort((a, b) =>
    a.language === b.language
      ? a.firstName.localeCompare(b.firstName)
      : a.language.localeCompare(b.language),
  );
}
