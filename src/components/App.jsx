import { useState } from "react";
import Todos from "./Todos";
import Footer from "./Footer";
import uuid from "react-uuid";
import { StyleForAllProject } from "./styles/style";
import GlobalStyles from "./styles/reset";

export default function Inputform() {
  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState("All");
  const [todos, setTodos] = useState([]);
  const [completed] = useState(false);
  const [countCompleted, setCountCompleted] = useState("button-clear-task");
  const [classNameIcon, setClassNameIcon] = useState("no-activ-icon ");
  const [classButtonAll, setclassButtonAll] = useState("button-not-active");
  const [classButtonActive, setclassButtonActive] =
    useState("button-not-active");
  const [classButtonCompleted, setclassButtonCompleted] =
    useState("button-not-active");
  const [countCompletedTasks, setCountCompletedTasks] = useState(0);

  function markAllAsCompleted() {
    const completedTodos = todos.map((todo) => {
      return { ...todo, completed: !todo.completed };
    });
    setTodos(completedTodos);
  }

  function completedTask(id) {
    const completedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(completedTodos);
    checkCountCompletedTasks();
  }

  function deleteTodo(id) {
    const completedTodos = todos.filter(
      (todo) => todo.id != id,
      todo.completed === true
    );
    setTodos(completedTodos);
  }

  function handleSendInput(e) {
    e.preventDefault();
    setTodos([...todos, { id: uuid(), text: todo, completed: completed }]);
    checkTodos();
    setTodo("");
  }

  function checkCountCompletedTasks() {
    let t = todos.filter((todo) => todo.completed === false);
    setCountCompletedTasks(t.length);
  }

  function changeFilter(newFilter) {
    switch (newFilter) {
      case "All":
        setclassButtonAll("button-activ");
        setclassButtonActive("button-not-active");
        setclassButtonCompleted("button-not-active");
        break;
      case "Active":
        setclassButtonAll("button-not-active");
        setclassButtonActive("button-activ");
        setclassButtonCompleted("button-not-active");
        break;
      case "Completed":
        setclassButtonAll("button-not-active");
        setclassButtonActive("button-not-active");
        setclassButtonCompleted("button-activ");
        break;
    }
    setFilter(newFilter);
  }

  function deleteCompletedTasks() {
    setTodos(todos.filter((todo) => todo.completed === false));
    checkTodos();
  }

  function checkIsComleted() {
    if (
      todos.some((todo) => {
        return todo.completed === true;
      })
    ) {
      setCountCompleted("button-not-active");
    } else {
      setCountCompleted("button-clear-task");
    }
  }

  function checkTodos() {
    if (todos.length > 0) {
      setClassNameIcon("activ-icon");
    } else {
      setClassNameIcon("no-activ-icon ");
    }
  }

  return (
    <>
      <GlobalStyles />

      <StyleForAllProject>
        <h1 className="title">todos</h1>
        <div className="inp">
          <div className={classNameIcon} onClick={markAllAsCompleted}></div>
          <form onSubmit={handleSendInput}>
            <input
              className="input"
              type="text"
              placeholder="What needs to be done?"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </form>
        </div>

        <Todos
          todos={todos}
          filter={filter}
          completedTask={completedTask}
          deleteTodo={deleteTodo}
          checkIsComleted={checkIsComleted}
          checkTodos={checkTodos}
          checkCountCompletedTasks={checkCountCompletedTasks}
        />

        {todos.length > 0 && (
          <Footer
            todos={todos}
            getFilteredTodos={changeFilter}
            filter={filter}
            deleteCompletedTasks={deleteCompletedTasks}
            countCompleted={countCompleted}
            classButtonAll={classButtonAll}
            classButtonActive={classButtonActive}
            classButtonCompleted={classButtonCompleted}
            countCompletedTasks={countCompletedTasks}
          />
        )}
      </StyleForAllProject>
    </>
  );
}
