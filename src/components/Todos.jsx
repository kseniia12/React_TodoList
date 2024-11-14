import React, { useEffect, useMemo } from "react";
import Todo from "./Todo";

export default function Todos({
  todos,
  filter,
  completedTask,
  deleteTodo,
  checkIsComleted,
  checkTodos,
  checkCountCompletedTasks,
}) {
  const filterTodos = (filter) => {
    let filteredTodos = [];
    switch (filter) {
      case "All":
        filteredTodos = [...todos];
        break;
      case "Completed":
        filteredTodos = todos.filter((todo) => todo.completed);
        break;
      case "Active":
        filteredTodos = todos.filter((todo) => !todo.completed);
        break;
    }
    return filteredTodos;
  };
  useEffect(() => {
    checkIsComleted();
    checkTodos();
    checkCountCompletedTasks();
  }, [todos]);

  const filteredTodos = useMemo(() => filterTodos(filter), [todos, filter]);
  return (
    <ul>
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          completedTask={completedTask}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
