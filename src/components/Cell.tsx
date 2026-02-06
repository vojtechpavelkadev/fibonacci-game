import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { flashAnimation } from '../styles/animations';

type FlashStateType = false | 'yellow' | 'green';

export function Cell({
  children,
  onClick,
}: React.PropsWithChildren<{ onClick: () => void }>) {
  const [flash, setFlash] = useState<FlashStateType>(false);

  useEffect(() => {
    setFlash(false);
    const id = requestAnimationFrame(() => {
      children ? setFlash('yellow') : setFlash('green');
    });
    return () => cancelAnimationFrame(id);
  }, [children]);

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
      {children || ''}
    </Button>
  );
}
