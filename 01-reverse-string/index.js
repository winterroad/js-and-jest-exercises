
// Reversing with reverse-method

function reverseString(str) {

   return str.split("").reverse().join("");

}

/* Reversing string without reverse-method

function reverseString(str) {

    let arr = str.split("");
    let reversed = "";

    for(let char of str){
        reversed = char + reversed;
    }

    return reversed;
}

*/

/* Reversing with reduce

function reverseString(str) {

   return str.split("").reduce((reversed, char) => char + reversed, '');

}

*/

/* Reversing with reduce without arrow functions 

function reverseString(str) {

   return str.split("").reduce(function (reversed, char) {
    return char + reversed;
   }, '');

}

*/

module.exports = reverseString;