import { Button } from '@mui/material';
import { useBoardDispatch } from '../context/BoardContext';

export const ResetButton = () => {
  const dispatch = useBoardDispatch();

  return (
    <Button
      onClick={() => dispatch({ type: 'RESET', colIndex: 0, rowIndex: 0 })}
      variant="contained"
      sx={{
        marginBottom: '2rem',
      }}
    >
      Reset
    </Button>
  );
};
