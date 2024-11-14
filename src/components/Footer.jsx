import React, { useState } from "react";
import { StylesforFooter} from "./styles/style";
export default function Footer({todos, getFilteredTodos, filter, clear, countCompleted, class1}){ 
  const [button2, setButton2] = useState('button3')
  return ( 
    <StylesforFooter>
    <div> {todos.length} item left</div>
      <div className="container">
          <button className={class1} onClick={() => getFilteredTodos("all")}>All</button>
          <button className={class1} onClick={() => getFilteredTodos("active")}>Active</button>
          <button className={class1}  onClick={() => getFilteredTodos("completed")}>Completed</button>
      </div>
      {/* {countCompleted > 0 ? setButton2("button2") : setButton2("button3")} */}
      <button className="button2" onClick={clear}>Clear Completed</button>
    </StylesforFooter>
  );
}
