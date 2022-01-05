/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
 var Harshad = ( function() {
    'use strict';
  
    return {
      /**
       * Returns true when the given number is a valid Harshad number.
       *
       * @param {Number} number The given number
       * @returns {Boolean}
       * @function Harshad.isValid
       */
      isValid: function( number ) {
        let sumDigit = 0,
            cutNum = number;
        while (cutNum > 0){
          sumDigit += cutNum % 10;
          cutNum = Math.trunc(cutNum / 10);
        }
        return (number % sumDigit) === 0; 
      },
      /**
       * Gets the next Harshad number after the given number.
       *
       * @param {Number} number The given number
       * @returns {Number}
       * @function Harshad.getNext
       */
      getNext: function( number ) {
        return this.isValid(number + 1) ? number + 1 : this.getNext(number + 1);
      },
      /**
       * Returns the suite of Harshad numbers, starting after a given number.
       *
       * @param {Number} count The number of elements to return
       * @param {Number} start The number after which the serie should start;
       *  defaults to 0
       * @returns {Array}
       * @function Harshad.getSerie
       */
      getSerie: function( count, start = 0) {
        let harshSeries = [],
            currentNum = start;
        for (let i = 1; i <= count; i++){
          currentNum = this.getNext(currentNum);
          harshSeries.push(currentNum);
        }
        return harshSeries;
      }
    };
  
  } () );