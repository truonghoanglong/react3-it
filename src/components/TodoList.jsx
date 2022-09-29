import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



const TodoList = () => {
    
    const getlocalItems = () => {
        const list = localStorage.getItem('list');
        if(list){
            return JSON.parse(localStorage.getItem('list'));
        }else{
            return [];
        }
    }

    const [name,setName] = useState('') //inputData

    const [todo,setTodo] = useState(getlocalItems())
    
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

    //remove local

    const removeAll = () =>{
        setTodo([])
    }

    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(todo))
    },[todo])


    return (
        <div className='left'>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <span type="button" onClick={ (e) => handleSubmit() }>SUBMIT</span>
            <br />
            -----------------------
            <br />
            {
                todo && todo.length > 0 &&
                todo?.map((item)=>{
                    return(
                        <div key={item.id}>
                            {item.todo} <span onClick={(e) => handleDeleteToto(e,item.id)}>X</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoList