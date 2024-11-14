import { useState } from "react";
import Todos from "./Todos";
import Footer from "./Footer";
import uuid from "react-uuid";
import {
  Title,
  Container,
  Input,
  CombiningInputAndIcon1,
  FontAwesome,
} from "./styles/style";
import GlobalStyles from "./styles/reset";

export default function Inputform() {
  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [countCompleted, setCountCompleted] = useState(false);
  const [inputClock, setInputClock] = useState(0);

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
  }

  function deleteTodo(id) {
    const completedTodos = todos.filter((todo) => todo.id != id);
    setTodos(completedTodos);
  }

  function handleSendInput(e) {
    e.preventDefault();
    setTodos([...todos, { id: uuid(), text: todo, completed: completed }]);
    setTodo("");
  }

  function changeFinter(newFilter) {
    setFilter(newFilter);
  }

  function clear() {
    setTodos(todos.filter((todo) => todo.completed === false));
  }

  function checkIsComleted() {
    const t = todos.some((todo) => {
      return todo.completed === true;
    });
    setCountCompleted(t);
  }
  return (
    <>
      <GlobalStyles />
      <Container>
        <Title>todos</Title>
        <CombiningInputAndIcon1>
          {todos.length != 0 ? (
            <FontAwesome onClick={markAllAsCompleted}></FontAwesome>
          ) : (
            ""
          )}
          <form onSubmit={handleSendInput}>
            <Input
              type="text"
              placeholder="What needs to be done?"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </form>
        </CombiningInputAndIcon1>
        <Todos
          todos={todos}
          filter={filter}
          completedTask={completedTask}
          deleteTodo={deleteTodo}
          checkIsComleted={checkIsComleted}
        />
        {todos.length != 0 ? (
          <Footer
            todos={todos}
            getFilteredTodos={changeFinter}
            filter={filter}
            clear={clear}
            countCompleted={countCompleted}
          />
        ) : (
          ""
        )}
      </Container>
    </>
  );
}