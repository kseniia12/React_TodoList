import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { TodoList } from "./styles/style";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "./store/todoSlice";
import { useSelector } from "react-redux";
export default function Todo({ id, todo, completedTask }) {
  const [mouseOver, setMouseOver] = useState(false);
  const [strikethroughText, setStrikethroughText] = useState(
    "not-strikethrough-text"
  );
  const [styleCompletedTask, setStyleCompletedTask] =
    useState("unfulfilled-task");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const completeTask = (id) => {
    dispatch(completeTodo(id));
  };

  const deleteTask = (id) => {
    dispatch(deleteTodo(id));
  };
  function checkCompletedTask() {
    if (completedTask === true) {
      setStrikethroughText("strikethrough-text");
      setStyleCompletedTask("completed-task");
    } else {
      setStrikethroughText("not-strikethrough-text");
      setStyleCompletedTask("unfulfilled-task");
    }
  }
  useEffect(() => {
    checkCompletedTask();
  }, [todos]);
  return (
    <TodoList
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <div className={strikethroughText}>
        <div
          className={styleCompletedTask}
          onClick={() => completeTask(id)}
        ></div>
        <div key={id}>{todo}</div>
      </div>

      {mouseOver && (
        <FontAwesomeIcon icon={faTimes} onClick={() => deleteTask(id)} />
      )}
    </TodoList>
  );
}
