import { createContext, useContext } from 'react';

export const BoardContext = createContext<React.Dispatch<{
  type: 'CELL_CLICK' | 'RESET';
  colIndex: number;
  rowIndex: number;
}> | null>(null);

export const useBoardDispatch = () => {
  const ctx = useContext(BoardContext);
  if (!ctx) throw new Error('useBoardDispatch must be used within provider');
  return ctx;
};
