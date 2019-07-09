/*
4.2 REVERSING AN ARRAY
 */

function reverseArray(array) {
    let output = [];
    for (let element of array) {
        output.unshift(element)
    }
    return output;
}

function reverseArrayInPlace(array) {
    for (i = 0; i < Math.floor(array.length / 2); i++) {
        old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    /*temp = reverseArray(array);
    for(i=0; i<array.length; i++){
    array.shift();
    array.push(temp[i]);
    }*/
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]