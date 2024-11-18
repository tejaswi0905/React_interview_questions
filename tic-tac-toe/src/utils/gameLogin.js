import { getCols, getDiagonals, getRows } from "./matrixDivide";

export const foundWinner = (array, n) => {
  const rows = getRows(array, n);
  const cols = getCols(array, n);
  const diags = getDiagonals(array, n);

  const winningCombinations = [...rows, ...cols, ...diags];

  const isWinnerArray = (subArray, indexes) => {
    const firstValue = subArray[indexes[0]];
    if (firstValue === null) {
      return false;
    }

    for (let i = 1; i < indexes.length; i++) {
      const currentIndex = indexes[i];
      const currentValue = subArray[currentIndex];

      if (currentValue === null || currentValue !== firstValue) {
        return false;
      }
    }
    console.log("I reached the end");
    return true;
  };

  let answer;
  for (let i = 0; i < winningCombinations.length; i++) {
    answer = isWinnerArray(array, winningCombinations[i]);
    if (answer === true) {
      return array[winningCombinations[i][0]];
    }
  }
  return null;
};
