import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Li, Crug, Crug1, InputСircle, InputСircle1} from "./styles/style";

export default function Todo({todo, completedTask, deleteTodo, }) {
  const [mouseOver, setMouseOver] = useState(false)
  return (
    <Li 
    onMouseEnter={()=>setMouseOver(true)}
    onMouseLeave={()=>setMouseOver(false)}
    >
 {todo.completed == true ? 
            <InputСircle1>
           <Crug1 onClick={()=>completedTask(todo.id)}></Crug1> 
              <div key={todo.id}>
                    {todo.text}
               </div>
               </InputСircle1> :    <InputСircle>
           <Crug onClick={()=>completedTask(todo.id)}></Crug> 
              <div key={todo.id}>
                    {todo.text}
               </div>
               </InputСircle> 
}
               {mouseOver && (
                <FontAwesomeIcon icon={faTimes} onClick={()=>deleteTodo(todo.id)}/> 
               )}
    </Li>
  )
}