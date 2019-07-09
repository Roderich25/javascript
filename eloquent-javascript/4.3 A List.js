/*
4.3 A LIST
 */

function arrayToList(array) {
    let output = null;
    for (i = array.length - 1; i >= 0; i--) {
        output = {"value": array[i], "rest": output};
    }
    return output;
}

function listToArray(list) {
    output = []
    getValue(list);
    return output;

    function getValue(list) {
        output.push(list.value);
        if (list.rest == null) return false;
        getValue(list.rest);
    }
}

function prepend(element, list) {
    return {"value": element, "rest": list};
}

function nth(list, num) {
    return listToArray(list)[num];
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

/*
function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}
*/

