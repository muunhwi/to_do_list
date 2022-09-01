import { Todos } from "./Todos";
import { useRef, useState } from "react";
import { TextField } from "./TextField";
import { Timer } from "./Timer";
import { GoCheck } from "react-icons/go";

const inputFuture = {
  id: "todos",
  name: "todos",
  placeholder: "오늘 할 일을 입력해주세요",
  type: "text",
  require: true,
};

export const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    if (todos.length > 22) {
      alert("더이상 등록할 수 없습니다.");
      return;
    }

    if (value === "") {
      alert("텍스트가 존재하지 않습니다.");
      return;
    }

    setIndex(index + 1);
    setTodos([
      ...todos,
      { id: index, value: value, updated: false, checked: false },
    ]);
    setValue("");
    inputRef.current.focus();
  };

  const onKeyUp = (e) => {
    if (e.keyCode === 13) onClick();
  };

  const onUpdate = (id, value, setValue) => {
    const updatedTodos = todos.filter((todo) => todo.updated === true);

    if (updatedTodos.length > 0) {
      alert("이미 수정 필드가 오픈됨");
      return;
    }

    const todo = todos.map((todo) =>
      todo.id === id ? { id: todo.id, value: todo.value, updated: true } : todo
    );
    setTodos(todo);
    setValue(value);
  };

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="bg-white border rounded shadow-lg p-4 w-80">
        <Timer />
        <div className="flex gap-x-8 mt-2">
          <TextField
            {...inputFuture}
            ref={inputRef}
            onChange={onChange}
            value={value}
            onKeyUp={onKeyUp}
            onClick={onClick}
          />
          <button type="button" onClick={onClick}>
            <GoCheck />
          </button>
        </div>
        <Todos todos={todos} onClick={onUpdate} setTodos={setTodos} />
      </div>
    </div>
  );
};
