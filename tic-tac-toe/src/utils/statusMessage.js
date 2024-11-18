import { foundWinner } from "./gameLogin";

export function getStatusMessage(array, n, isNext) {
  const winnerMessage = foundWinner(array, n);
  console.log(winnerMessage.length);
  const winner = "someone";
  if (winner) {
    return `Player ${winner} wins!!`;
  }
  if (array.includes(null) === false) {
    return `The game ended in a draw`;
  }

  return `Player ${isNext ? "X" : "O"} turn to play`;
}
