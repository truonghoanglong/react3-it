import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const TodoList = () => {
    const [name,setName] = useState('')

    const [todo,setTodo] = useState([
        {id:1, todo: "watchingTV"},
        {id:2, todo: "Coding"},
        {id:3, todo: "Play Soccer"},
    ])
    
    const handleSubmit = () => {
        let addTodo = {
            id: uuidv4(),
            todo: name
        }
        setTodo([...todo,addTodo])
        setName('')
    }

    const handleDeleteToto = (e,id) =>{
        e.preventDefault();
        let cloneTodo = todo;
        cloneTodo = cloneTodo.filter((item)=> item.id !== id)
        setTodo(cloneTodo)
    }
    return (
        <form>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <button type="button" onClick={ (e) => handleSubmit() }>SUBMIT</button>
            <br />
            -----------------------
            <br />
            {
                todo && todo.length > 0 &&
                todo.map((item)=>{
                    return(
                        <div key={item.id}>
                            {item.todo} <button onClick={(e) => handleDeleteToto(e,item.id)}>X</button>
                        </div>
                    )
                })
            }
        </form>
    )
}

export default TodoList