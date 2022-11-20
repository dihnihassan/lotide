const takeUntil = function (array, dontKeep) {
  console.log("This is everything we are looking at: ", array);
  
  const thingsToKeep = [];
  for (let value of array) {
    // console.log("Let's take a look at value", value);
    if (dontKeep(value)) {
      // console.log("We dont want that one");
      // console.log("What we found", thingsToKeep);
      return thingsToKeep;
    }
    // console.log("Add to list");
    thingsToKeep.push(value);
    // console.log("Lists so far", thingsToKeep);
    // console.log('-------');
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);




const eqArrays = function(arr1, arr2) {
  
  if(arr1.length !== arr2.length){
    return false;
  }
  for (let i = 0; i <= arr1.length; i++){
    if (arr1[i] !== arr2[i]) {
  return false;
}
}
return true;
}



const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual(results1, [1, 2, 5, 7, 2]); 
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"])