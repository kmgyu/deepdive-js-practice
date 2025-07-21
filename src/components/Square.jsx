export default function Square({ value, onClick }) {
  const baseStyle = "w-16 h-16 text-2xl font-bold border border-gray-300";
  const valueStyle = value === 'X' ? 'text-blue-600' : value === 'O' ? 'text-pink-500' : 'text-gray-400';

  return (
    <button
      className={`${baseStyle} ${valueStyle} hover:bg-gray-100 transition`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}