import { useReducer } from 'react';
import { createBoard, boardReducer } from '../utils/boardReducer';
import { Box } from '@mui/material';
import { Cell } from './Cell';

export function Board() {
  const [board, dispatch] = useReducer(boardReducer, createBoard());

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        gap: '4px',
      }}
    >
      {board.map((row, rowIndex) => (
        <Box
          sx={{ display: 'flex', flexDirection: 'row', gap: '4px' }}
          key={`row-${rowIndex}`}
        >
          {row.map((value, colIndex) => (
            <Cell
              onClick={() =>
                dispatch({ type: 'CELL_CLICK', colIndex, rowIndex })
              }
              key={`cell-${colIndex}-${rowIndex}-${value}`}
            >
              {value}
            </Cell>
          ))}
        </Box>
      ))}
    </Box>
  );
}
