import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, action){
            state.todos.push({
                id: uuid(), 
                text: action.payload, 
                completed: false, 
            })
            

        },
        completeTodo(state, action){
            const id = action.payload;
            const index = state.todos.findIndex(todo => todo.id === id);
            if (index === -1) { 
                return
            } 
            state.todos[index].completed = !state.todos[index].completed;
        },
        deleteTodo(state, action){
            const id = action.payload;
            state.todos = state.todos.filter((todo) => todo.id != id);
        },
        markAllTasksCompleted(state, action){
            for (let i = 0; i < state.todos.length; i++){
                state.todos[i].completed = !state.todos[i].completed
            }
            
        },
        deleteAllCompletedTask(state, action){
            state.todos = state.todos.filter((todo) => todo.completed === false);
        }
    }
})

export const {addTodo, completeTodo, deleteTodo, markAllTasksCompleted, deleteAllCompletedTask} = todoSlice.actions

export default todoSlice.reducer