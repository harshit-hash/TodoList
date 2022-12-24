import React, { useState, useContext } from "react";
import Content from "../Content";
import Header from "../Header";
import TodoList from "../TodoList";
import './style.css'
import {todoData} from '../API/ContextApi'
import { useEffect } from "react";




function Container(){
    const [todo, settodo]=useState(
        ()=>{
            let saveddata=JSON.parse(localStorage.getItem('todo'));
            if(saveddata!=null){
                return saveddata
            }
            else{
                return ['Study','code']
            }
        }
    )

       const handleData=data=>{
            settodo([...todo,data])
            
            }
        const deleteData=(index)=>{
            let newdata= todo.filter((data,ind)=>ind!==index)
            settodo(newdata)
        }
        useEffect(()=>{
            localStorage.setItem('todo',JSON.stringify(todo))
        },[todo])


    return(
        <div className="container">
           
            <div className="todo">
                <Header/>
                <TodoList click={handleData}/>
                <Content list={todo} deleteData={deleteData}/>
            </div>
           
                
            
        </div>
    )
}
export default Container;