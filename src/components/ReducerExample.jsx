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
    <div>
      <button onClick={handleAdd}>추가</button>
      <ul>
        {todos.map((todo, i) => (
          <li
            key={i}
            onClick={() => dispatch({ type: "TOGGLE", index: i })}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
