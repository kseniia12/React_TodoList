import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import selectTodosByFilter from "./store/reselect";

export default function Todos() {
  const todos = useSelector(selectTodosByFilter);
  return (
    <div>
      {todos.map((todo) => (
        <Todo id={todo.id} todo={todo.text} completedTask={todo.completed} />
      ))}
    </div>
  );
}
