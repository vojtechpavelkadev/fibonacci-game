import { keyframes } from '@mui/material';

export const flashAnimation = (color: string) => keyframes`
  from {
    background-color: transparent;
  }
  50% {
    background-color: ${color};
  }
  to {
    background-color: transparent;
  }
`;
