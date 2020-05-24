/*
 5.2 YOUR OWN LOOP
*/
function loop(value, test, update, fun) {
  let i = value;
  while (test(i)) {
    fun(i);
    i = update(i);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1
