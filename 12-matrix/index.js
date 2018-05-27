function matrix(n) {

var spiralmatrix = [];
var min_row = 0;
var min_col = 0;
var max_row = n-1;
var max_col = n-1;

var num = 1;
var max = n*n+1;

for(let i=0; i<n; i++) {
    spiralmatrix.push([]);
}

    while(num<max) {

    for(let i=min_col; i<=max_col; i++) {
        spiralmatrix[min_row][i]=num;
        num++;
    }

    min_row++;


    for(let i=min_row; i<=max_row; i++) {
        spiralmatrix[i][max_col]=num;
        num++;
    }

    max_col--;


    for(let i=max_col; i>=min_col; i--) {
        spiralmatrix[max_row][i]=num;
        num++;
    }

    max_row--;

    for(let i=max_row; i>=min_row; i--) {
        spiralmatrix[i][min_col]=num;
        num++;
    }

    min_col++;
}

return spiralmatrix;
}

//module.exports = matrix;
