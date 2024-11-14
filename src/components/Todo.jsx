import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Li } from "./styles/style";

export default function Todo({ todo, completedTask, deleteTodo }) {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <Li
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      {todo.completed == true ? (
        <div className="intut1">
          <div className="crug1" onClick={() => completedTask(todo.id)}></div>
          <div key={todo.id}>{todo.text}</div>
        </div>
      ) : (
        <div className="input2">
          <div className="crug" onClick={() => completedTask(todo.id)}></div>
          <div key={todo.id}>{todo.text}</div>
        </div>
      )}
      {mouseOver && (
        <FontAwesomeIcon icon={faTimes} onClick={() => deleteTodo(todo.id)} />
      )}
    </Li>
  );
}
