function Archiver() {
  var temperature = null;
  var archive = [];    
  Object.defineProperty(this, 'temperature', {
    set: function(t) {
      temperature = t;
      archive.push({date: new Date(), val: t});
    },
    get: function() {return temperature;}
  });  
  this.getArchive = function() {return archive;};
}