import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: uuid(),
        text: action.payload,
        completed: false,
      });
    },
    completeTodo(state, action) {
      const id = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index === -1) {
        return;
      }
      state.todos[index].completed = !state.todos[index].completed;
    },
    deleteTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
    markAllTasksCompleted(state, action) {
      const allCompleted = state.todos.every((todo) => todo.completed);
      for (let i = 0; i < state.todos.length; i++) {
        state.todos[i].completed = !allCompleted;
      }
    },
    deleteAllCompletedTask(state, action) {
      state.todos = state.todos.filter((todo) => todo.completed === false);
    },
    editTodo(state, action) {
      const id = action.payload.id;
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index === -1) {
        return;
      }
      state.todos[index].text = action.payload.valueInputField;
    },
  },
});

export const {
  addTodo,
  completeTodo,
  deleteTodo,
  markAllTasksCompleted,
  deleteAllCompletedTask,
  editTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
