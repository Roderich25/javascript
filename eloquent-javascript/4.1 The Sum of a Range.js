/*
4.1 THE SUM OF A RANGE
 */

function range(start, end, step = 1) {
    let output = [];
    if (step > 0) {
        for (i = start; i <= end; i = i + step) output.push(i);
    } else {
        for (i = start; i >= end; i = i + step) output.push(i);
    }
    return output;
}

function sum(array) {
    let output = 0;
    for (let num of array) {
        output += num;
    }
    return output;
}


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55