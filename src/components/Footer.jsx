import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { StylesforFooter } from "./styles/style";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteAllCompletedTask } from "./store/todoSlice";
export default function Footer() {
  const [buttonState, setButtonState] = useState(false)
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector(state => state.filters.filter);
  const dispatch = useDispatch();
  const [classButtonAll, setclassButtonAll] = useState("button-not-active");
  const [classButton, setclassButton] = useState("button-clear-task");
  const [countCompletedTasks, setCountCompletedTasks] = useState(0);
  
  // function countTodos() {
  //   if (todos.length > 0) {
  //     setclassButtonClear("button-not-active");
  //     setCountCompletedTasks(countCompletedTasks + 1);
  //   } else {
  //     setclassButtonClear("button-clear-task");
  //   }
  // }
  // useEffect(() => {
  //   countTodos();
  // }, [todos]);
  
  function checkButtonState(){
    console.log(buttonState)
    setclassButtonAll("button-activ")
    setButtonState(true)
    if (buttonState === true){
      setclassButtonAll("button-activ")
    } else{
      setclassButtonAll("button-not-active")
    }
  }

  
  return (
    <StylesforFooter>
      <div> {countCompletedTasks} item left</div>
      <div className="edit-button">
        <Button className1={classButtonAll} isAcctive = {filter === 'All'} filter={'All'} onClick={checkButtonState}/>
        <Button className1={classButtonAll}  isAcctive = {filter === 'Completed'} filter={'Completed'} onClick={checkButtonState}/>
        <Button className1={classButtonAll} isAcctive = {filter === 'Active'} filter={'Active'} onClick={checkButtonState}/>
      </div>
      <button
        // className={classButtonClear}
        onClick={() => dispatch(deleteAllCompletedTask())}>
        Clear Completed
      </button>
    </StylesforFooter>
  );
}
