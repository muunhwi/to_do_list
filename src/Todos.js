import React, { useState } from "react";
import { FaHammer } from "react-icons/fa";
import { GoTrashcan, GoCheck } from "react-icons/go";
import { TextField } from "./TextField";

const inputFuture = {
  id: "todos",
  name: "todos",
  placeholder: "오늘 할 일을 수정해주세요",
  type: "text",
  require: true,
};

export const Todos = ({ todos, onClick, setTodos }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onUpdate = (id) => {
    const todo = todos.map((todo) =>
      todo.id === id
        ? { ...todo, id: todo.id, value: value, updated: false }
        : todo
    );
    setTodos(todo);
  };

  const onKeyUp = (e, id) => {
    if (e.keyCode === 13) onUpdate(id);
  };

  const onDelete = (id) => {
    const todo = todos.filter((todo) => todo.id !== id);
    setTodos(todo);
  };

  const checkBoxOnChange = (checked, id) => {
    const todo = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: checked } : todo
    );
    setTodos(todo);
  };

  return (
    <ul className="mt-2">
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.updated ? (
            <div className="flex items-center gap-x-2 mt-2">
              <input
                type="checkbox"
                id={`check-${todo.id}`}
                value={todo.checked}
                onChange={(e) => checkBoxOnChange(e.target.checked, todo.id)}
              />
              <TextField
                {...inputFuture}
                value={value}
                onKeyUp={(e) => onKeyUp(e, todo.id)}
                onChange={(e) => onChange(e, todo.value)}
              />
              <button type="button" onClick={() => onUpdate(todo.id)}>
                <GoCheck />
              </button>
              <button type="button" onClick={() => onDelete(todo.id)}>
                <GoTrashcan />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-x-2 mt-2 border-b-2 border-indigo-300">
              <input
                type="checkbox"
                id={`check-${todo.id}`}
                value={todo.checked}
                onChange={(e) => checkBoxOnChange(e.target.checked, todo.id)}
              />
              <label
                htmlFor={`check-${todo.id}`}
                className={todo.checked ? "line-through" : ""}
              >
                {todo.value}
              </label>
              <button
                type="button"
                onClick={() => onClick(todo.id, todo.value, setValue)}
              >
                <FaHammer />
              </button>
              <button type="button" onClick={() => onDelete(todo.id)}>
                <GoTrashcan />
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
