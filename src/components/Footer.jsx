import React, { useState } from 'react'
import { FooterSection, FooterButton, Button, Button1 } from "./styles/style";
export default function Footer({ todos, getFilteredTodos, filter, clear, countCompleted }) {
  return (
    <FooterSection>
    <div> {todos.length} item left</div>
    <FooterButton  >
      {filter ==="all" ?  <Button1 onClick={()=>getFilteredTodos('all')}>All</Button1> :  <Button onClick={()=>getFilteredTodos('all')}>All</Button>}
      {filter ==="active" ?  <Button1 onClick={()=>getFilteredTodos('active')}>Active</Button1> : <Button onClick={()=>getFilteredTodos('active')}>Active</Button>}
      {filter ==="completed" ?   <Button1 onClick={()=>getFilteredTodos('completed')}>Completed</Button1>:   <Button onClick={()=>getFilteredTodos('completed')}>Completed</Button>}
    </FooterButton>
    {countCompleted > 0 ? (<Button onClick={clear}>Clear Completed</Button>) : (<Button onClick={clear}></Button>)}
    </FooterSection>
  )
}