import React from 'react'
import GlobalStyles from "./styles/reset";
import { StyleForAllProject } from "./styles/style";
import { useSelector } from "react-redux";
import Input from "./Input";
import Todos from "./Todos";
import Footer from "./Footer";
export default function App() {
  const todos = useSelector(state => state.todos.todos)
  return (
    <>
    <GlobalStyles />
    <StyleForAllProject>
     <Input/>
      <Todos/>
      
     {todos.length > 0 && (<Footer/>)}  
    </StyleForAllProject>
  </>
  )
}
