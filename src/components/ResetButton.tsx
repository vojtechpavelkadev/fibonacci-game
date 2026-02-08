import { Button } from '@mui/material';
import { useBoardDispatch } from '../context/BoardContext';

export const ResetButton = () => {
  const dispatch = useBoardDispatch();

  return (
    <Button
      onClick={() => dispatch({ type: 'RESET' })}
      variant="contained"
      sx={{
        marginBottom: '2rem',
      }}
    >
      Reset
    </Button>
  );
};
