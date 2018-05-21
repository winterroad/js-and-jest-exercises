
function anagrams(stringA, stringB){

    stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

    return clean(stringA) === clean(stringB);
}

function clean(str) {

    return str.split("").sort().join("");

}

/*
function anagrams(stringA, stringB) {

    let charMapA = charMap(stringA);
    let charMapB = charMap(stringB);

    //Lets check lengths to save resources in simple cases.
    if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    } 

    for(let char in charMapA) {

        if(charMapA[char] !== charMapB[char]) {           
            return false;
        } 
    }

    return true;

}

function clean(str) {
    return str.replace(/[^\w]/g, "").toLowerCase();
}

function charMap(str){

    let charMap = {};

    for(let char of clean(str)) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}
*/

module.exports = anagrams;