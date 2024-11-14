import React, { useEffect, useMemo } from "react";
import Todo from "./Todo";

export default function Todos({
  todos,
  filter,
  completedTask,
  deleteTodo,
  checkIsComleted,
}) {
  const filterTodos = (filter) => {
    let filteredTodos = [];
    switch (filter) {
      case "all":
        filteredTodos = [...todos];
        break;
      case "completed":
        filteredTodos = todos.filter((todo) => todo.completed);
        break;
      case "active":
        filteredTodos = todos.filter((todo) => !todo.completed);
        break;
    }
    return filteredTodos;
  };
  useEffect(() => {
    checkIsComleted();
  }, [todos]);

  const filteredTodos = useMemo(() => filterTodos(filter), [todos, filter]);
  return (
    <ul>
      {filteredTodos.map((todo) => (
        <Todo key={todo.id}
          todo={todo}
          completedTask={completedTask}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
