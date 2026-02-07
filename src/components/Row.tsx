import { Box } from '@mui/material';
import React from 'react';
import { Cell } from './Cell';

export const Row = React.memo(function Row({
  row,
  rowIndex,
}: {
  row: { value: number }[];
  rowIndex: number;
}) {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'row', gap: '4px' }}
      key={`row-${rowIndex}`}
    >
      {row.map((cell, colIndex) => (
        <Cell
          colIndex={colIndex}
          rowIndex={rowIndex}
          key={`cell-${colIndex}-${rowIndex}`}
          cell={cell}
        />
      ))}
    </Box>
  );
});
