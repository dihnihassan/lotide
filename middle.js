const eqArrays = function(arr1, arr2) {
  
  if(arr1.length !== arr2.length){
    return false;
  }
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]) {
  return false;
}
}
return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected))  {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function (array) {
  // for (let value of array) {
  //  console.log(value);
  if(array.length <= 2){
    return [];
  }
  if(array.length % 2 !== 0){
    const pos = array.length / 2; 
      const flooredPos = Math.floor(pos)
      return array[flooredPos];
    }
if (array.length % 2 === 0){
  const pos1 = array.length / 2;
  const pos2 = pos1 - 1;
  const value1 = array[pos1];
  const value2 = array[pos2];
  return [value2, value1];
}
};

// console.log(middle([1]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(middle([1, 2, 3, 4, 5]), 3);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

// middle([1, 2, 3]);
// middle([1, 2, 3, 4, 5]);






// For loop to loop through array 
// .sort???