import { useState } from 'react';
import Board from './Borad';
import MoveHistory from './MoveHistory';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

return (
  <div className="flex flex-col lg:flex-row items-start gap-8">
    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
    <div>
      <h2 className="mb-2 font-medium text-white">Move History</h2>
      <MoveHistory history={history} currentMove={currentMove} jumpTo={jumpTo} />
    </div>
  </div>
);
}