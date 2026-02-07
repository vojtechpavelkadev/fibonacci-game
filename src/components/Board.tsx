import { useReducer } from 'react';
import { createBoard, boardReducer } from '../reducers/boardReducer';
import { Box } from '@mui/material';
import { Row } from './Row';
import { BoardContext } from '../context/BoardContext';
import { ResetButton } from './ResetButton';

export function Board() {
  const [board, dispatch] = useReducer(boardReducer, createBoard());

  return (
    <BoardContext.Provider value={dispatch}>
      <ResetButton />
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
