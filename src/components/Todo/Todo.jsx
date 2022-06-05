import React from "react";

const Todo = ({todo, doTodo}) => {

  const background = todo.completed ?
    'bg-gray-500 hover:bg-gray-600 flex p-1 my-5 mx-auto w-2/3 rounded drop-shadow-xl'
    : 'bg-blue-500 hover:bg-blue-600 flex p-1 my-5 mx-auto w-2/3 rounded drop-shadow-xl'

  const decoration = todo.completed ? 'line-through text-center font-bold' : ' text-center font-bold'

  return (
    <div className={background}>

      <button onClick={() => doTodo(todo._id)}>
        <div className="flex">
          <h1 className="text-center"><p className={decoration}>{todo.title}</p></h1>
        </div>
      </button>

      <div className="flex">

        <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 rounded p-1">
          Edit Todo
        </button>

        <button className="flex-1 bg-red-500 hover:bg-red-600 rounded p-1">
          Delete Todo
        </button>

      </div>

    </div>
  )
}

export default Todo