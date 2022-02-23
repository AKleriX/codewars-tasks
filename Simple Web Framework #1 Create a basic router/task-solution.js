const Router = function(){
    this.ways = {};
    this.bind = function(way, method, req) {
      if (!this.ways.hasOwnProperty(way)) this.ways[way] = {};
      this.ways[way][method] = req;
    }
    this.runRequest = function(way, method){
      if (this.ways.hasOwnProperty(way) && this.ways[way].hasOwnProperty(method))
        return this.ways[way][method]();
      return 'Error 404: Not Found';
    }
  }