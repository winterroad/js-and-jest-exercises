
function reverseInt(n) {
    let str = n.toString();
    return parseInt(str.split("").reverse().join("")) * Math.sign(n);
}

module.exports = reverseInt;