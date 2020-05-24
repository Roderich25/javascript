/*
 5.3 EVERYTHING
 */
function every(array, test) {
  return array.reduce((a, c) => a && test(c), true);
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true
