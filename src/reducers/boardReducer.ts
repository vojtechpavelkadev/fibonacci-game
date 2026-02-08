import { resolveFibonacciMatches } from '../utils/fibonacci';

const SIZE = 50;

export type BoardStateType = { value: number }[][];
export type BoardActionType = {
  type: 'CELL_CLICK' | 'RESET';
  colIndex?: number;
  rowIndex?: number;
};

export function createBoard() {
  return Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, () => ({ value: 0 })),
  );
}

export function boardReducer(state: BoardStateType, action: BoardActionType) {
  switch (action.type) {
    case 'CELL_CLICK': {
      const { rowIndex, colIndex } = action;

      if (rowIndex === undefined || colIndex === undefined) {
        return state;
      }

      const newBoard = state.map((row, r) => {
        if (r === rowIndex) {
          return row.map((cell) => ({
            value: cell.value + 1,
          }));
        }

        const cell = row[colIndex];
        if (!cell) return row;

        const newRow = [...row];
        newRow[colIndex] = {
          value: cell.value + 1,
        };

        return newRow;
      });

      resolveFibonacciMatches(newBoard, rowIndex, colIndex);

      return newBoard;
    }

    case 'RESET':
      return createBoard();

    default:
      return state;
  }
}
