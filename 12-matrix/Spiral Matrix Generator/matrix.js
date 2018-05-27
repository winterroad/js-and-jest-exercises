/* ---------------- CONTROLLER ------------------------- */
const MATRIX = document.getElementById("matrix");
const FRAGMENT = document.createDocumentFragment();
const SIZEPICKER = document.getElementById("matrixSize");
let size;
let array;
//TODO: FORM TO GET THE n FROM
//FIXME:
SIZEPICKER.addEventListener('submit', function (e) {
  e.preventDefault();
  size = document.getElementById("input_size").value;
  array = createSpiralMatrix(size);
  createTable(size);
});

//TODO: "FORM" TO GET COLOR + EVENT LISTENER + COLOR TABLE


/* ------------------ MODEL ------------------------ */
//TODO: Create Spiral function instead of the array
/* CREATE A SPIRAL MATRIX */
function createSpiralMatrix(n){
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


/* --------------------  VIEW ----------------------*/

/* CREATE A TABLE */
function createTable(size) {

  MATRIX.innerHTML = "";
/* Create as many rows as the height */
    for (let r = 0; r < size; r++) {
      const new_row = document.createElement("tr");
      FRAGMENT.appendChild(new_row);

/* Create as many columns as there is width. Add columns to rows.*/
    for (let c = 0; c < size; c++) {
      const new_col = document.createElement("td");
      new_col.innerHTML = array[r][c];
      new_row.appendChild(new_col);
      }
    }

  MATRIX.appendChild(FRAGMENT);
}

/* COLOR THE TABLE */
function colorMe(color){

}
