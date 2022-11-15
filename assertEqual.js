const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log("✅✅✅" + "Assertion Passed");
  } else {
    return console.log("🛑🛑🛑" + "Assertion Failed");
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1,);