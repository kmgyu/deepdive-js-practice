import { useEffect, useRef, useState } from "react";

export function FocusInput() {
    // 버튼 클릭 시 Input 창 자동 포커스 해주고 싶은 경우
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus(); // DOM 직접 접근
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>입력창에 포커스</button>
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
    <div>
      <p>현재 값: {count}</p>
      <p>이전 값: {prevCountRef.current ?? "없음"}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
