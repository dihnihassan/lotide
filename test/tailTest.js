const assert = require('chai').assert;
const tail = require('../tail.js');


describe("#tail", () => {
  it("returns Labs for [Yo Yo, Lighthouse, Labs]", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), "Labs");
  });
});



// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);