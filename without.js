const without = function (source, itemsToRemove) {
  const results = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(i)) {
      results.push(i);
    }
  }
  return results;
};

let results = without([1, 2, 3, 4], [2, 4]);
console.log(results);
