"use strict";
//make a function for sum sequence of numbers with chaining

const sum = function (a) {
  return function result(b) {
    if (b === undefined) {
      return a;
    }
    a += b;
    return result;
  };
};

const result = sum(5)(3)(8)(12)();
console.log(result);
