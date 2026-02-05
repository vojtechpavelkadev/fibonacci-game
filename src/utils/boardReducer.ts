const SIZE = 50;

type BoardStateType = { value: number }[][];

export function createBoard() {
  return Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, () => ({
      value: 0,
    })),
  );
}

export function boardReducer(
  state: BoardStateType,
  action: { type: 'CELL_CLICK' | 'RESET'; x: number; y: number },
) {
  switch (action.type) {
    case 'CELL_CLICK': {
      const { x, y } = action;

      return state.map((row, ry) =>
        row.map((cell, rx) =>
          rx === x || ry === y ? { ...cell, value: cell.value + 1 } : cell,
        ),
      );
    }

    case 'RESET':
      return createBoard();

    default:
      return state;
  }
}
