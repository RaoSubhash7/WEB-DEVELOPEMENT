import { useEffect,useState } from 'react'
import  {TodoProvider} from './context/TodoContext'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])     

  const addTodo = (todo) =>{
    setTodo((prev) => [{id: Data.now(),...todo}, ...prev])
  }

  const updateTodo = (id, todo) =>{
    set ((prev) => prev.map((prevTodo) => (
      prevTodo.id === id ? todo : prevTodo
    )))
  }
  const deleteTodo = () => {
    setTodo ((prev) => prev.filter((each) => each.id !==id ))
  }

  const toggleComplete =(todo) => {
    set ((prev) => prev.map ((prevTodo) => prevTodo.id === id ? 
    {...prevTodo, completeD: prevTodo.Completed}
    : prevTodo))
  }


useEffect(() =>{
JSON.parse(localStorage.getItem("todos"))
if(!todos && todos.length > 0){
  setTodos(todos)
}
},[])


useEffect(() =>{
  localStorage.getItem("todos", JSON.stringify())
},[todos])
  return (
  <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete  }}>
<div className='bg-[#172842] min-h-screen py-8'>
  <div className='w-full max-w-zxl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
    <h1 className='text-2xl font-bold text-center mb-8 mt-2'>
      Manage Your Todos
    </h1>
    <div className='mb-4'>
      {/*Todo gors from her*/}
    </div>
    <div
    className='flex flex-wrap gap-y-3'>
      {/* {loop and Add Todoitem Here} */}

    </div>
  </div>
</div>
  </TodoProvider>
  )
}

export default App
