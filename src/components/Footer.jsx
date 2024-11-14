import React, { useState } from "react";
import { StylesforFooter } from "./styles/style";
import Button from "./Button";
export default function Footer({
  getFilteredTodos,
  deleteCompletedTasks,
  countCompleted,
  classButtonAll,
  classButtonActive,
  classButtonCompleted,
  countCompletedTasks
}) {
  const [buttonAll] = useState("All");
  const [buttonActive] = useState("Active");
  const [buttonCompleted] = useState("Completed");
  return (
    <StylesforFooter>
      <div> {countCompletedTasks} item left</div>
      <div className="edit-button">
        <Button
          className={classButtonAll}
          getFilteredTodos={getFilteredTodos}
          filter={buttonAll}
        />
        <Button
          className={classButtonActive}
          getFilteredTodos={getFilteredTodos}
          filter={buttonActive}
        />
        <Button
          className={classButtonCompleted}
          getFilteredTodos={getFilteredTodos}
          filter={buttonCompleted}
        />
      </div>
      <button className={countCompleted} onClick={deleteCompletedTasks}>
        Clear Completed
      </button>
    </StylesforFooter>
  );
}
