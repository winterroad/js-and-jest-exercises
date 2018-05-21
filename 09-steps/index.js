
function steps(height){

    

    for(let row = 0; row < height; row++){
        let line = '';
        for(let col = 0; col < height; col++) {
            if(col <= row) {
                line+=('*');
            } else {
                line += ' ';
            }
            
        }
        console.log(line); 
    }
}


module.exports = steps;