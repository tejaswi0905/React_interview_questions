// const arr = [null, null, null, null, null, null, null, null, null];

export function getRows(arr, n) {
  let rows = [];
  for (let i = 0; i < arr.length; i += n) {
    let row = [];
    for (let j = i; j < i + n; j++) {
      row.push(j);
    }
    rows.push(row);
  }
  return rows;
}

// console.log(getRows(arr, 3));

export function getCols(arr, n) {
  let cols = [];
  for (let i = 0; i < n; i++) {
    let col = [];
    let j = i;
    while (j < arr.length) {
      col.push(j);
      j += n;
    }
    cols.push(col);
  }
  return cols;
}

export function getDiagonals(arr, n) {
  const matrix = getRows(arr, n);
  let diagonals = [];
  let diagonalPositive = [];
  let diagonalNegative = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        diagonalPositive.push(matrix[i][j]);
      }
      if (i + j === n - 1) {
        diagonalNegative.push(matrix[i][j]);
      }
    }
  }
  diagonals.push(diagonalPositive);
  diagonals.push(diagonalNegative);
  return diagonals;
}
