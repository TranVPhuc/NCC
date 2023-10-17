const a = [1, 3, 4, 2, 7, 9, 10, 6, 8];
const b = [1, 3, 9, 11, 5, 7, 13];

function duplicateValue(a, b) {
  const c = [];
  b.forEach((value) => {
    if (a.includes(value)) {
      c.push(value);
    }
  });
  return c.sort();
}

console.log(duplicateValue(a, b));
