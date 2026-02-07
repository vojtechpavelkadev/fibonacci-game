import { describe, it, expect } from 'vitest';
import { findFibonacci } from './fibonacci';

const createMockBoardEmpty = (): { value: number }[][] =>
  Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => ({ value: 0 })),
  );

export const mockBoardFromNumbers = (
  values: number[][],
): { value: number }[][] => values.map((row) => row.map((v) => ({ value: v })));

const boardSetup = [
  [0, 0, 2, 3, 4, 5],
  [0, 1, 1, 2, 3, 4],
  [0, 1, 2, 1, 4, 5],
  [0, 2, 2, 3, 2, 5],
  [0, 3, 2, 3, 4, 3],
  [0, 1, 2, 3, 4, 5],
];

describe('Empty board fibonacci test', () => {
  it('[0,0] should return 0', () => {
    expect(findFibonacci(createMockBoardEmpty(), 0, 0).length).toBe(0);
  });

  it('[9,9] should return 0', () => {
    expect(findFibonacci(createMockBoardEmpty(), 9, 9).length).toBe(0);
  });

  it('throws RangeError for out-of-bounds rowIndex or colIndex', () => {
    expect(() => {
      findFibonacci(createMockBoardEmpty(), 10, 0);
    }).toThrow(RangeError);
  });
});

describe('Filled board fibonacci test', () => {
  it('[0,0] should return 0', () => {
    expect(findFibonacci(mockBoardFromNumbers(boardSetup), 0, 0).length).toBe(
      0,
    );
  });

  it('[1,0] should return 1', () => {
    expect(findFibonacci(mockBoardFromNumbers(boardSetup), 1, 0).length).toBe(
      5,
    );
  });

  it('[0,1] should return 10', () => {
    expect(findFibonacci(mockBoardFromNumbers(boardSetup), 0, 1).length).toBe(
      10,
    );
  });
});
