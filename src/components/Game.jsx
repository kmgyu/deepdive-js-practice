import { useReducer } from 'react';
import  Board  from './Board';
import calculateWinner from '../utils/calculateWinner.js';
// import useLocalStorage from './useLocalStorage';

const initialState = {
  history: [Array(9).fill(null)],
  currentMove: 0,
  xIsNext: true,
};

function gameReducer(state, action) {
  switch (action.type) {
    case 'play': {
      const nextHistory = [...state.history.slice(0, state.currentMove + 1), action.nextSquares];
      return {
        history: nextHistory,
        currentMove: nextHistory.length - 1,
        xIsNext: !state.xIsNext,
      };
    }
    case 'jump': {
      return {
        ...state,
        currentMove: action.move,
        xIsNext: action.move % 2 === 0,
      };
    }
    default:
      return state;
  }
}

export default function Game() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const { history, currentMove, xIsNext } = state;
  const currentSquares = history[currentMove];

  const winner = calculateWinner(currentSquares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const moves = history.map((squares, move) => {
    const desc = move > 0 ? `Go to move #${move}` : 'Go to game start';
    const isCurrent = move === currentMove;

    return (
        <li key={move}>
          <button
            onClick={() => dispatch({ type: 'jump', move })}
            className={`px-2 py-1 rounded border mb-1 text-sm
              ${isCurrent ? 'bg-blue-500 text-white font-bold' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'}`}
          >
            {isCurrent ? `👉 ${desc}` : desc}
          </button>
        </li>
      );
  });

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-2xl font-bold">틱택토 게임</h1>
      <div>{status}</div>
      <Board squares={currentSquares} onPlay={(nextSquares) => dispatch({ type: 'play', nextSquares })} />
      <ol>{moves}</ol>
    </div>
  );
}