// src/components/MoveList.jsx
export default function MoveList({ history, currentMove, jumpTo }) {
  return (
    <ol className="list-disc list-inside space-y-1 text-sm text-gray-200">
      {history.map((_, move) => {
        const description = move > 0 ? `Go to move #${move}` : 'Go to game start';
        const isCurrent = move === currentMove;

        return (
          <li key={move}>
            <button
              onClick={() => jumpTo(move)}
              className={`text-sm px-2 py-1 transition-colors ${
                isCurrent
                  ? 'text-yellow-400 font-semibold underline'
                  : 'text-blue-400 hover:text-blue-200 hover:underline'
              }`}
            >
              {description}
            </button>
          </li>
        );
      })}
    </ol>
  );
}
