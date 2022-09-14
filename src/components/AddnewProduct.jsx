import React, { useState } from 'react'

const AddnewProduct = () => {
    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    const [size,setSize] = useState(0)
    const [color,setColor] = useState('')

    const handleSubmit = () =>{
        console.log(name,price,size,color);
    }
    return (
        <div className='right'>

        <fieldset>
            <legend>Personalia:</legend>

            <div className="input__product">
                <label htmlFor="">Name:</label>
                <input type="text" value={name}  onChange={ (e)=> setName(e.target.value) } />
            </div>

            <div className="input__product">
                <label htmlFor="">Price:</label>
                <input type="text"  value={price}  onChange={ (e)=> setPrice(e.target.value) }/>
            </div>

            <div className="input__product">
                <label htmlFor="">Size:</label>
                <input type="text" value={size}  onChange={ (e)=> setSize(e.target.value) } />
            </div>

            <div className="input__product">
                <label htmlFor="">Color:</label>
                <input type="text"  value={color}  onChange={ (e)=> setColor(e.target.value) } />
            </div>

            <div>
                <button onClick={()=>handleSubmit()}>submit</button>
            </div>
        </fieldset>

        

        </div>
    )
}

export default AddnewProduct