const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const countLetters = function (string) {

  const counter = {};
  for (let letter of string) {
    // console.log(letter);
    if (counter[letter]) {
      counter[letter] += 1
    } else {
      counter[letter] = 1;
    }
  }
  console.log(counter);
}



countLetters("lighthouse labs");

// a for of loop is needed 
