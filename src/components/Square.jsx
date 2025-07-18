export default function Square({ value, onSquareClick }) {
  return (
    <button
        className="square w-20 h-20 border border-gray-500 text-2xl font-bold flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
        onClick={onSquareClick}>
      {value}
    </button>
  );
}