/*
4.4 DEEP COMPARISON
 */
function deepEqual(a, b) {
    if ((typeof a == "object" && a != null) && (typeof b == "object" && b != null)) {
        for (let el of Object.keys(a)) {
            if (deepEqual(a[el], b[el])) continue;
            else return false;
        }
        return true;
    } else {
        return a === b;
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {object: 2, here: {is: "an"}}));
// → true