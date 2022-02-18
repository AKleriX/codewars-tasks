function camelize(str){
  return str.replace(/[^a-z0-9]/gi, ' ').trim().split(/\s+/)
         .map(word => word.length ? word[0].toUpperCase() + word.slice(1).toLowerCase() : '').join('');
}