function maxChar(str) {

    let counts = {};
    let max = 0;
    let maxChar = "";

    for(let char of str) {
        counts[char] = counts[char] + 1 || 1;
    }

    for(let i in counts) {

        if(counts[i] > max) {
            max = counts[i];
            maxChar = i;
        }
    }

    return maxChar;
}

module.exports = maxChar;