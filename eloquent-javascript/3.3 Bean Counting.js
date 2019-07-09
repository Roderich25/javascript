/*
3.3 BEAN COUNTING
 */

function countBs(string) {
    return countChar(string, 'B');
}

function countChar(string, match) {
    len = string.length;
    start = 0;
    letter = "";
    while (start < len) {
        if (string[start] == match) letter += string[start];
        start++;
    }
    return letter.length;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4