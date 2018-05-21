function capitalize(str) {

    let strArr = str.split(' ');

    strArr.forEach(function(word, index, strArr) {
        strArr[index] = word.charAt(0).toUpperCase() + word.slice(1);
    });

    return strArr.join(' ');  
    
}

module.exports = capitalize;