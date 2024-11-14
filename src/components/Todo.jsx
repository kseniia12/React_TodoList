import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { TodoList } from "./styles/style";

export default function Todo({ todo, completedTask, deleteTodo }) {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <TodoList
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      {todo.completed == true ? (
        <div className="strikethrough-text">
          <div className="completed-task" onClick={() => completedTask(todo.id)}></div>
          <div key={todo.id}>{todo.text}</div>
        </div>
      ) : (
        <div className="not-strikethrough-text">
          <div className="unfulfilled-task" onClick={() => completedTask(todo.id)}></div>
          <div key={todo.id}>{todo.text}</div>
        </div>
      )}
      {mouseOver && (
        <FontAwesomeIcon icon={faTimes} onClick={() => deleteTodo(todo.id)} />
      )}
    </TodoList>
  );
}
