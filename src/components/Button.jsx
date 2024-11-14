import React from "react";
export default function Button({ className, getFilteredTodos, filter }) {
  return (
    <button className={className} onClick={() => getFilteredTodos(filter)}>
      {filter}
    </button>
  );
}
