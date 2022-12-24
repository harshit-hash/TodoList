import React,{createContext, useState} from 'react'

export let todoData=createContext()

function ContextApi({children}) {
    const[data,setdata]=useState('')
  return (
    <todoData.Provider >
        {children}
    </todoData.Provider>
  )
}

export default ContextApi