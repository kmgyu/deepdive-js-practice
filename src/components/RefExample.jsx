import { useEffect, useRef, useState } from "react";

export function FocusInput() {
    // 버튼 클릭 시 Input 창 자동 포커스 해주고 싶은 경우
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus(); // DOM 직접 접근
  };

  return (
<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-4">
  <input
    ref={inputRef}
    type="text"
    placeholder="여기에 입력하세요"
    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button
    onClick={handleClick}
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
  >
    입력창에 포커스
  </button>
</div>

  );
}

export function CountTracker() {
    // 이전 렌더링 시의 값을 기억하고, 현재 값과 비교하고 싶은 경우.
    // ex: 이전 카운트 값은 얼마였는가?
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(); // 이전 값을 저장할 공간

  useEffect(() => {
    prevCountRef.current = count; // 매 렌더링 후 현재 값을 저장
  }, [count]);

  return (
<div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-4 text-center">
  <div className="text-lg text-gray-800 font-semibold">
    현재 값: <span className="text-blue-600">{count}</span>
  </div>
  <div className="text-md text-gray-600">
    이전 값:{" "}
    <span className={prevCountRef.current != null ? "text-purple-600" : "text-gray-400 italic"}>
      {prevCountRef.current ?? "없음"}
    </span>
  </div>
  <button
    onClick={() => setCount(count + 1)}
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
  >
    +1
  </button>
</div>

  );
}
