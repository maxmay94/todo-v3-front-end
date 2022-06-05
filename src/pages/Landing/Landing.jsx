import React, {useState, useEffect} from "react"

import { getAllTodos, doTodo, deleteTodo, createTodo, updateTodo } from "../../services/todoService" 

import NewTodo from "../../components/NewTodo/NewTodo"
import Todo from "../../components/Todo/Todo"


const Landing = ({ user }) => {
  let [todos, setTodos] = useState([{}])
  let [newTodo, setNewTodo] = useState('')
  let [newTitle, setNewTitle] = useState('')

  useEffect(() => {
    const fetchData = async() => {
      const data = await getAllTodos()
      setTodos(data)
    }
    fetchData()
  },[])

  const handleDoTodo = async(todoId) => {
    try {
      await doTodo(todoId)
      const data = await getAllTodos()
      setTodos(data)
    } catch(err) {
      throw err
    }
  }

  const handleDeleteTodo = async(todoId) => {
    try {
      await deleteTodo(todoId)
      const data = await getAllTodos()
      setTodos(data)
    } catch(err) {
      throw err
    }
  }

  const handleCreateTodo = async() => {
    try {
      await createTodo(newTodo)
      const data = await getAllTodos()
      setTodos(data)
      setNewTodo('')
    } catch(err) {
      throw err
    }
  }

  const handleUpdateTodo = async(todo, newTitle) => {
    try {
      await(updateTodo(todo, newTitle))
      const data = await getAllTodos()
      setTodos(data)
      setNewTitle('')
    } catch(err) {
      throw err
    }
  }

  return (
    <main className=''>
      <h1 className="font-bold text-center text-3xl mt-5 ">What are we doing today?</h1>
      <NewTodo createTodo={handleCreateTodo} newTodo={newTodo} setNewTodo={setNewTodo} />
      {
        todos &&
        todos?.map((todo, i) => (
          <div key={i}>
            <Todo 
              todo={todo} 
              doTodo={handleDoTodo} 
              deleteTodo={handleDeleteTodo}
              updateTodo={handleUpdateTodo}
              newTitle={newTitle}
              setNewTitle={setNewTitle}
            />
          </div>
        ))
      }
    </main>
  )
}

export default Landing
