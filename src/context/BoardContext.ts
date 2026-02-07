import { createContext, useContext } from 'react';
import type { BoardActionType } from '../reducers/boardReducer';

export const BoardContext =
  createContext<React.Dispatch<BoardActionType> | null>(null);

export const useBoardDispatch = () => {
  const ctx = useContext(BoardContext);
  if (!ctx) throw new Error('useBoardDispatch must be used within provider');
  return ctx;
};
