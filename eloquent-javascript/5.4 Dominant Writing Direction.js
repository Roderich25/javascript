/*
 5.4 DOMINANT WRITING DIRECTION
*/
const { SCRIPTS } = require("./data");
//console.log(SCRIPTS);

function getCharDirection(char) {
  let c = char.codePointAt(0);
  let script = SCRIPTS.filter((s) =>
    s.ranges.some(([a, b]) => c >= a && c < b)
  )[0];
  return script ? script.direction : "none";
}

function mode(array) {
  let counts = [];
  for (let element of array) {
    let index = counts.findIndex((a) => a.element == element);
    if (index == -1) {
      counts.push({ element, count: 1 });
    } else {
      counts[index].count++;
    }
  }
  return counts.reduce((a, c) => (c.count > a.count ? c : a)).element;
}

function dominantDirection(text) {
  textArray = text.split("");
  return mode(textArray.map((c) => getCharDirection(c)));
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
