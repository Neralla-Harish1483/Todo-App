
import { useEffect, useState } from "react"
import classes from './styles.module.css'
import TodoList from "./components/toto-item"
import TodoDetails from "./components/todo-details"
import { Skeleton } from "@mui/material"

function App() {
  const [todoList,settodoList] = useState([])
  const [loading,setloading] = useState(false)
  const [error,setError] = useState(null)
  const [todoDetails,settodoDetails] = useState(null)
  const [openDialog,setopenDialog] = useState(false)

  async function fetchListofTodo(){
   try{
    setloading(true)
    const apiResponse =  await fetch('https://dummyjson.com/todos')
    const result = await apiResponse.json()
    console.log(result);
    if(result?.todos && result?.todos?.length>0){
      settodoList(result?.todos)
      setloading(false)
      setError('')
    }
    else{
      settodoList([])
      setloading(false)
    }
   }
   catch(e){
    setError('Some Thing went Wrong')
   }
    
  }

  async function fetchDetailsofCurrentTodo(getCurrentTodoId){
    console.log(getCurrentTodoId);
    try{
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`)
      const details = await apiResponse.json()
      console.log(details);
      if(details){
        settodoDetails(details)
        setopenDialog(true)
      }
      else{
        settodoDetails(null)
        setopenDialog(false)
      }

    }
    catch(e){
      console.log(error);
      
    }
    
  }

  useEffect(
    ()=>{
      fetchListofTodo()

    },[]
  )

  if(loading){
    return <Skeleton variant="rectangulat" width={650} height={650}/>
  }


  return (
    <div className={classes.mainWrapper}>
      <h4 className={classes.headerTitle}>Task #2 - Todo App Using Material UI</h4>
      <div className={classes.todoListWrapper}>
        {
        todoList && todoList.length ? todoList.map(item=><TodoList key={item.id} todo={item} fetchDetailsofCurrentTodo={fetchDetailsofCurrentTodo}/>):null
       }
      </div>

      <TodoDetails openDialog={openDialog} todoDetails={todoDetails} setopenDialog={setopenDialog} settodoDetails={settodoDetails}/>
    </div>

  )
}

export default App
