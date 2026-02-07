import { findFibonacci } from './fibonacci';

export const resolveFibonacciMatches = (
  board: { value: number }[][],
  rowIndex: number,
  colIndex: number,
) => {
  const toClear = new Set<string>();

  for (let index = 0; index < board.length; index++) {
    const results = [
      ...findFibonacci(board, index, colIndex),
      ...findFibonacci(board, rowIndex, index),
    ];

    for (const [r, c] of results) {
      if (board[r][c].value !== 0) {
        toClear.add(`${r},${c}`);
      }
    }
  }

  for (const key of toClear) {
    const [r, c] = key.split(',').map(Number);
    board[r][c] = { value: 0 };
  }
};
