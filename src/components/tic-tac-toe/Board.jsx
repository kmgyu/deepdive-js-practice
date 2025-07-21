import { useReducer, useMemo, useCallback } from 'react';
import Square from '@components/tic-tac-toe/Square';

const initialState = {
  squares: Array(9).fill(null),
  isXNext: true,
};

function reducer(state, action) {
  switch (action.type) {
    case 'CLICK': {
      const { index } = action;
      const { squares, isXNext } = state;
      if (squares[index] || calculateWinner(squares)) return state;
      const nextSquares = squares.slice();
      nextSquares[index] = isXNext ? 'X' : 'O';
      return {
        squares: nextSquares,
        isXNext: !isXNext,
      };
    }
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Board() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const winner = useMemo(() => calculateWinner(state.squares), [state.squares]);

  const handleClick = useCallback((i) => {
    dispatch({ type: 'CLICK', index: i });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  const status = winner
    ? `승자: ${winner}`
    : `다음 처리: ${state.isXNext ? 'X' : 'O'}`;

  return (
    <div className="space-y-4">
      <div className="text-lg font-medium">{status}</div>
      <div className="grid grid-cols-3 gap-1">
        {state.squares.map((value, i) => (
          <Square key={i} value={value} onClick={() => handleClick(i)} />
        ))}
      </div>
      <button
        onClick={handleReset}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        다시 시작
      </button>
    </div>
  );
}