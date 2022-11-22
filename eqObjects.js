const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Function eqObjects (object1, object2)
// const eqObjects = function(object1, object2)
// these are both the same 
// 
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



const student = {name: "Dina", age: "31"};
const student2 = {name: "Dina", age: "31", gender: "F"};
assertEqual(eqObjects(student, student2));
// console.log(eqObjects(student, student2));


const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1",};
// console.log(eqObjects(ab, ba));


const abc = {a: "1'", b: "2", c: "3"};
// eqObjects(ab, abc);
assertEqual(eqObjects(ab, ba), true);
// assertEqual(ab, abc);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc));
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

//compare array lengths Using Object.keys
//for of loop to loop through keys
// compare both objects's value using === 
