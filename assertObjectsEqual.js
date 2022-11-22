const eqObjects = function(object1, object2) {
  
  let obj1Key = Object.keys(object1);
  let obj2Key = Object.keys(object2);
  
    if (obj1Key.length !== obj2Key.length) {
      return false;
    }
    for (let i = 0; i < obj1Key.length; i++){
      if (Array.isArray(object1[obj1Key[i]])) {
        return true;
      }
      //   // how to compare loop through and compare each index 
      // }
      if (object1[obj1Key[i]] !== object2[obj1Key[i]]) {
        return false;
      }
    }
    return true;
  }; 
  



const assertObjectsEqual = function(actual, expected) {
  
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected))  {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const ab = {a: '1', b: 2};
const ba = {b: 2, a: '1'};
assertObjectsEqual(ab, ba);

