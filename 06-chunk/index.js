
function chunk(arr, num) {

let chunked = [];
let tempChunk = [];
let counter = 0;

for(let element of arr) {

    if(tempChunk.length < num){
        tempChunk.push(element);
    }

    if(tempChunk.length === num) {
        chunked.push(tempChunk);
        tempChunk = [];
    }

    counter++;

    if(counter === arr.length && tempChunk.length > 0) {
        chunked.push(tempChunk); 
    }
}

return chunked;
}

/* 
// Chunk with slice:

function chunk(array, size) {

        let chunked = [];
        
        for(let i=0; i < array.length; i+size) {
            chunked.push(array.slice(i, i+size));
        }
    return chunked;
}
*/

module.exports = chunk;