// input: names - unsorted strings
// output: case-agnostic sort
sortme = function( names ) {
    return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  }