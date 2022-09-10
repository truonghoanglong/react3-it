import React, { useState } from 'react'

const TodoList = () => {
    const [state,setState] = useState('')
    const handleSubmit = (e,msg) => {
        console.log("🚀 ~ file: TodoList.jsx ~ line 5 ~ TodoList ~ state", state)
        
    }
    return (
        <div>
            <input type="text" value={state} onChange={(e)=>setState(e.target.value)}/>
            <button type="button" onClick={ (e) => handleSubmit(e,'hoanglong') }>SUBMIT</button>
        </div>
    )
}

export default TodoList