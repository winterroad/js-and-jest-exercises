
function capitalize(str) {

    let strArr = str.split(' ');

    strArr.forEach(function(word, index, strArr) {
        strArr[index] = word.charAt(0).toUpperCase() + word.slice(1);
    });

    return strArr.join(' ');  
    
}


/*
function capitalize(str) {

    let capitalized = str[0].toUpperCase();

    for(let i = 1; i < str.length; i++) {
        if(str[i-1] === " ") {
            capitalized += str[i].toUpperCase();
        } else {
            capitalized += str[i];
        }
    }

    return capitalized;
}

*/
module.exports = capitalize;