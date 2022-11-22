const assert = require('chai').assert;
const tail = require('../tail.js');



describe("#tail", () => {
  it(`returns labs from "["Yo Yo", "Lighthouse", "Labs"]"`, () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Labs"]);
  });
  // it("returns '5' for ['5']", () => {
  //   assert.strictEqual(head(['5']), '5');
  // });

});





// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);