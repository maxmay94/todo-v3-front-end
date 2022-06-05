import React, {useState, useEffect} from "react"

import { getAllTodos, doTodo } from "../../services/todoService" 

import NewTodo from "../../components/NewTodo/NewTodo"
import Todo from "../../components/Todo/Todo"


const Landing = ({ user }) => {
  let [todos, setTodos] = useState([{}])

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

  return (
    <main className=''>
      <NewTodo />

      {
        todos &&
        todos?.map((todo, i) => (
          <div key={i}>
            <Todo todo={todo} doTodo={handleDoTodo}/>
          </div>
        ))
      }
    </main>
  )
}

export default Landing
