const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const countLetters = function(string){
  
  const counter = 0;
  for (let letter of string){
console.log(letter);
  }

}
countLetters("LightHouse Labs");

// a for of loop is needed 
