import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { flashYellow } from '../styles/animations';

export function Cell({
  children,
  onClick,
}: React.PropsWithChildren<{ onClick: () => void }>) {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    setFlash(false);
    const id = requestAnimationFrame(() => setFlash(true));
    return () => cancelAnimationFrame(id);
  }, [children]);

  return (
    <Button
      sx={{
        width: '20px',
        height: '20px',
        minWidth: '20px',
        minHeight: '20px',
        border: '1px solid white',
        animation: flash ? `${flashYellow} 1s linear` : 'none',
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
