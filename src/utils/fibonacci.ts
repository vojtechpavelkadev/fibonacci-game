const FIB_COUNT = 100;
const CONSECUTIVE_COUNT = 5;

const directions: [number, number][] = [
  [1, 0], // right
  [0, 1], // down
  [-1, 0], // left
  [0, -1], // up
  [1, 1], // down right
  [1, -1], // down left
  [-1, 1], // up right
  [-1, -1], // up left
];

const fibonacci: number[] = [0, 1];

for (let i = 2; i < FIB_COUNT; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

const checkMaxOneZeroValue = (values: { value: number }[]) => {
  return values.filter((v) => v.value === 0).length <= 1;
};

const checkValuesNonDecreasing = (values: { value: number }[]) => {
  for (let i = 1; i < values.length; i++) {
    if (values[i].value < values[i - 1].value) {
      return false;
    }
  }

  return true;
};

const checkIsFibonacciLike = (values: { value: number }[]) => {
  return values.every((v) => fibonacci.includes(v.value));
};

const isConsecutiveFibonacci = (values: { value: number }[]) => {
  if (values.length < 3) return false;

  if (!checkMaxOneZeroValue(values)) return false;
  if (!checkValuesNonDecreasing(values)) return false;
  if (!checkIsFibonacciLike(values)) return false;

  for (let i = 0; i < values.length - 2; i++) {
    if (values[i].value + values[i + 1].value !== values[i + 2].value) {
      return false;
    }
  }

  return true;
};
export const findFibonacci = (
  board: { value: number }[][],
  rowIndex: number,
  colIndex: number,
): [number, number][] => {
  if (
    rowIndex < 0 ||
    colIndex < 0 ||
    rowIndex >= board.length ||
    colIndex >= board.length
  ) {
    throw new RangeError(
      `Index out of bounds: row=${rowIndex}, col=${colIndex}`,
    );
  }

  const value = board[rowIndex][colIndex];
  if (value == null) return [];

  const matches: [number, number][] = [];

  for (const [rowDirection, colDirection] of directions) {
    for (let offset = -(CONSECUTIVE_COUNT - 1); offset <= 0; offset++) {
      const slice: { value: number }[] = [];
      const coords: [number, number][] = [];

      for (let i = 0; i < CONSECUTIVE_COUNT; i++) {
        const calculatedRowIndex = rowIndex + rowDirection * (i + offset);
        const calculatedColIndex = colIndex + colDirection * (i + offset);

        if (
          calculatedRowIndex < 0 ||
          calculatedColIndex < 0 ||
          calculatedRowIndex >= board.length ||
          calculatedColIndex >= board[0].length
        ) {
          break;
        }

        const cell = board[calculatedRowIndex][calculatedColIndex];
        if (cell?.value == null) break;

        slice.push(cell);
        coords.push([calculatedRowIndex, calculatedColIndex]);
      }

      if (slice.length < CONSECUTIVE_COUNT) continue;
      if (isConsecutiveFibonacci(slice)) {
        matches.push(...coords);
      }
    }
  }
  return matches;
};

export const resolveFibonacciMatches = (
  board: { value: number }[][],
  clickedRowIndex: number,
  clickedColIndex: number,
) => {
  const toClear = new Set<string>();

  for (
    let iterationIndex = 0;
    iterationIndex < board.length;
    iterationIndex++
  ) {
    const results = [
      ...findFibonacci(board, iterationIndex, clickedColIndex),
      ...findFibonacci(board, clickedRowIndex, iterationIndex),
    ];

    for (const [resultRowIndex, resultColIndex] of results) {
      if (board[resultRowIndex][resultColIndex].value !== 0) {
        toClear.add(`${resultRowIndex},${resultColIndex}`);
      }
    }
  }

  for (const key of toClear) {
    const [clearedRowIndex, clearedColIndex] = key.split(',').map(Number);
    board[clearedRowIndex][clearedColIndex] = { value: 0 };
  }
};
