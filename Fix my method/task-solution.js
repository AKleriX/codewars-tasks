function myFunction() {
  return {
    objProperty: 'string',
    objMethod: function () {
      return this.objProperty;
    },
  };
}
