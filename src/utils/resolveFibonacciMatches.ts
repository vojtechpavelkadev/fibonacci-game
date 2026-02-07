import { findFibonacci } from './fibonacci';

export const resolveFibonacciMatches = (
  board: { value: number }[][],
  rowIndex: number,
  colIndex: number,
) => {
  for (let row = 0; row < board.length; row++) {
    const fibonacciCheckResult = [
      ...findFibonacci(board, row, colIndex),
      ...findFibonacci(board, rowIndex, row),
    ];

    if (fibonacciCheckResult.length > 0) {
      for (const [resultRow, resultCol] of fibonacciCheckResult) {
        if (board[resultRow][resultCol].value === 0) continue;
        board[resultRow][resultCol] = { value: 0 };
      }
    }
  }

  return;
};
