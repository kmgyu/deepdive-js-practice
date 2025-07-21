import { useReducer } from "react";

const initialState = [];

// 할 일을 입력하면 목록에 추가되고, 완료 체크를 토글하는 기능을 구현해야 하는 경우.
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { text: action.text, done: false }];
    case "TOGGLE":
      return state.map((item, i) =>
        i === action.index ? { ...item, done: !item.done } : item
      );
    default:
      return state;
  }
}

export function TodoList() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const handleAdd = () => {
    const text = prompt("할 일을 입력하세요");
    if (text) dispatch({ type: "ADD", text });
  };

  return (
<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-4">
  <button
    onClick={handleAdd}
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
  >
    추가
  </button>

  <ul className="space-y-2">
    {todos.map((todo, i) => (
      <li
        key={i}
        onClick={() => dispatch({ type: "TOGGLE", index: i })}
        className={`cursor-pointer px-4 py-2 rounded border ${
          todo.done
            ? "bg-gray-200 text-gray-500 line-through"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        } transition`}
      >
        {todo.text}
      </li>
    ))}
  </ul>
</div>

  );
}
