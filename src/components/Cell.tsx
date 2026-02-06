import { Button } from '@mui/material';
import React, { useCallback } from 'react';
import { flashAnimation } from '../styles/animations';

export const Cell = React.memo(function Cell({
  cell,
  dispatch,
  colIndex,
  rowIndex,
}: {
  cell: { value: number };
  dispatch: React.Dispatch<{
    type: 'CELL_CLICK' | 'RESET';
    colIndex: number;
    rowIndex: number;
  }>;
  colIndex: number;
  rowIndex: number;
}) {
  const flash = cell.value ? 'yellow' : 'green';

  const onClick = useCallback(() => {
    dispatch({ type: 'CELL_CLICK', colIndex, rowIndex });
  }, [dispatch, colIndex, rowIndex]);

  return (
    <Button
      sx={{
        width: '1.5rem',
        height: '1.5rem',
        minWidth: '20px',
        minHeight: '20px',
        border: '1px solid white',
        animation: flash ? `${flashAnimation(flash)} 1s linear` : 'none',
        backgroundColor: 'black',
        color: 'red',
      }}
      onClick={onClick}
    >
      {cell.value || ''}
    </Button>
  );
});
