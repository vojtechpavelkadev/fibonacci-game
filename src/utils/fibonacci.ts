const FIB_COUNT = 100;
const CONSECUTIVE_COUNT = 5;

const fibonacci: number[] = [0, 1];

for (let i = 2; i < FIB_COUNT; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

const isConsecutiveFibonacci = (values: { value: number }[]) => {
  if (values.length < 2) return false;

  if (values[0].value !== 0 || values[1].value !== 1) return false;

  for (let i = 2; i < values.length; i++) {
    if (values[i].value !== values[i - 1].value + values[i - 2].value) {
      return false;
    }
  }

  return true;
};

const findHorizontalSequences = (
  board: { value: number }[][],
  rowIndex: number,
  colIndex: number,
): [number, number][] => {
  const row = board[rowIndex];
  const horizontalMatches: [number, number][] = [];

  const rowStart = Math.max(0, colIndex - (CONSECUTIVE_COUNT - 1));
  const rowEnd = Math.min(row.length - CONSECUTIVE_COUNT, colIndex);

  for (let start = rowStart; start <= rowEnd; start++) {
    const slice = row.slice(start, start + CONSECUTIVE_COUNT);

    if (slice.some((v) => v == null)) continue;
    if (!isConsecutiveFibonacci(slice)) continue;

    for (let i = 0; i < CONSECUTIVE_COUNT; i++) {
      horizontalMatches.push([rowIndex, start + i]);
    }
  }

  return horizontalMatches;
};

const findVerticalSequences = (
  board: { value: number }[][],
  rowIndex: number,
  colIndex: number,
): [number, number][] => {
  const colStart = Math.max(0, rowIndex - (CONSECUTIVE_COUNT - 1));
  const colEnd = Math.min(board.length - CONSECUTIVE_COUNT, rowIndex);
  const verticalMatches: [number, number][] = [];

  for (let start = colStart; start <= colEnd; start++) {
    const slice: { value: number }[] = [];

    for (let i = 0; i < CONSECUTIVE_COUNT; i++) {
      slice.push(board[start + i][colIndex]);
    }

    if (slice.some((v) => v == null)) continue;
    if (!isConsecutiveFibonacci(slice)) continue;

    for (let i = 0; i < CONSECUTIVE_COUNT; i++) {
      verticalMatches.push([start + i, colIndex]);
    }
  }

  return verticalMatches;
};

export const findFibonacci = (
  board: { value: number }[][],
  rowIndex: number,
  colIndex: number,
): [number, number][] => {
  const value = board[rowIndex][colIndex];
  if (value == null) return [];

  return [
    ...findHorizontalSequences(board, rowIndex, colIndex),
    ...findVerticalSequences(board, rowIndex, colIndex),
  ];
};
