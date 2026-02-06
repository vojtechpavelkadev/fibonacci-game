import { useReducer } from 'react';
import { createBoard, boardReducer } from '../reducers/boardReducer.ts';
import { Box } from '@mui/material';
import { Row } from './Row';

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
        <Row
          key={`row-${rowIndex}`}
          row={row}
          rowIndex={rowIndex}
          dispatch={dispatch}
        />
      ))}
    </Box>
  );
}
