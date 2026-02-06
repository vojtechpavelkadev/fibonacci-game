import { resolveFibonacciMatches } from './resolveFibonacciMatches';

const SIZE = 50;

type BoardStateType = number[][];

export function createBoard() {
  return Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, () => 0),
  );
}

export function boardReducer(
  state: BoardStateType,
  action: { type: 'CELL_CLICK' | 'RESET'; colIndex: number; rowIndex: number },
) {
  switch (action.type) {
    case 'CELL_CLICK': {
      const { colIndex, rowIndex } = action;

      const newBoard = state.map((boardRow, boardRowIndex) => {
        return boardRow.map((cellValue, boardColIndex) =>
          boardColIndex === colIndex || boardRowIndex === rowIndex
            ? cellValue + 1
            : cellValue,
        );
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
