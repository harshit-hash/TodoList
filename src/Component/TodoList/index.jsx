import React, { useState } from 'react'
import ContextApi from '../API/ContextApi'
import './style.css'

function TodoList(props) {
    // const [inputData,setinputData]=useState('')
    const handleSubmit=(e)=>{
      e.preventDefault();
      const {target} = e;
      // if(target.inputTask.value!==''){
        props.click(target.inputTask.value)
        console.log(target.inputTask.value);
      // }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Add A Todo' name='inputTask' />
        <button type='submit'>ADD</button>
    </form>
  )
}

export default TodoList