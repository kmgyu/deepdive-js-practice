import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
<div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center space-y-4">
  <p className="text-lg text-gray-800 font-medium">현재 숫자: <span className="text-blue-600">{count}</span></p>
  <button
    onClick={() => setCount(count + 1)}
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
  >
    증가
  </button>
</div>

  );
}

