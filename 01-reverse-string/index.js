
function reverseString(str) {

    let arr = str.split("");
    let reversed = "";

    for(let char of str){
        reversed = char + reversed;
    }

    return reversed;
}


module.exports = reverseString;