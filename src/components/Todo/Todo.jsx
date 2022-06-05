import React from "react";

const Todo = ({todo, doTodo, deleteTodo}) => {

  const background = todo.completed ?
    'bg-gray-500 hover:bg-gray-600 flex p-1 my-5 mx-auto w-2/3 rounded drop-shadow-xl'
    : 'bg-blue-500 hover:bg-blue-600 flex p-1 my-5 mx-auto w-2/3 rounded drop-shadow-xl'

  const decoration = todo.completed ? 'line-through font-bold' : 'font-bold'

  return (
    <div className="w-full">
      <div className={background}>
        <button onClick={() => doTodo(todo._id)}>
          <div className="flex">
            <h1 className=""><p className={decoration}>{todo.title}</p></h1>
          </div>
        </button>

        <div className="flex">
          <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 rounded p-1">
            edit
          </button>

          <button 
            className="flex-1 bg-red-500 hover:bg-red-600 rounded p-1"
            onClick={() => deleteTodo(todo._id)}
          >
            delete
          </button>
        </div>

      </div>
    </div>
  )
}

export default Todo