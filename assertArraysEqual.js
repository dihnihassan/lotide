// const eqArrays = function(arr1, arr2) {
  
//   if(arr1.length !== arr2.length){
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++){
//     if (arr1[i] !== arr2[i]) {
//   return false;
// }
// }
// return true;
// };

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected))  {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



module.exports = assertArraysEqual;