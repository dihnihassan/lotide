// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
// const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let newArray = arr.slice(arr.length - 1);
  return newArray;
};
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);  

module.exports = tail;