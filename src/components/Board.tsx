import { useReducer } from 'react';
import { createBoard, boardReducer } from '../reducers/boardReducer.ts';
import { Box } from '@mui/material';
import { Row } from './Row';
import { BoardContext } from '../context/BoardContext';

export function Board() {
  const [board, dispatch] = useReducer(boardReducer, createBoard());

  return (
    <BoardContext.Provider value={dispatch}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          color: 'white',
          gap: '4px',
        }}
      >
        {board.map((row, rowIndex) => (
          <Row key={`row-${rowIndex}`} row={row} rowIndex={rowIndex} />
        ))}
      </Box>
    </BoardContext.Provider>
  );
}
