const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    // console.log(sentence[i]);
    if (results[sentence[i]]) {
      results[sentence[i]] += 1
    } else {
      results[sentence[i]] = 1
    }
  }
  console.log(results);
}

letterPositions("lighthouse in the house");
// console.log("hello");

//  loops?
// print out as object 



const eqArrays = function (arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertArraysEqual(letterPositions("hello"), [1]);
