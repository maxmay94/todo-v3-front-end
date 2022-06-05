import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Todo = ({todo, doTodo, deleteTodo, updateTodo, newTitle, setNewTitle}) => {

  const background = todo.completed ?
  'bg-gray-500 hover:bg-gray-600 p-4 mx-10 my-5 rounded drop-shadow-lg' 
  : 'bg-blue-500 hover:bg-blue-600 p-4 mx-10 my-5 rounded drop-shadow-lg'

  const decoration = todo.completed ? 'line-through font-bold' : 'font-bold'

  return (
    <div className={background}>
      <button 
        className="w-full h-full  mb-5"
        onClick={() => doTodo(todo._id)}
      >
        <div className="flex">
          <p className={decoration}>{todo.title}</p>
        </div>
      </button>

      {/* --------------------------------------------------------------------- */}

      <div className="flex">
        <Popup trigger={
          <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 rounded mx-5 p-1">
            edit
          </button>
        }>
          <div className="bg-gray-200 mx-auto rounded w-2/3">
          <input 
            className="w-full rounded" 
            type="text" 
            value={newTitle}
            placeholder="TODO:"
            onChange={(e) => setNewTitle(e.target.value)}
          />

            <button 
              className="bg-green-700 hover:bg-green-800 w-full rounded"
              onClick={() => updateTodo(todo._id, newTitle)}
            >
              save change
            </button>
          </div>
        </Popup>

        {/* --------------------------------------------------------------------- */}

        <button 
          className="flex-1 bg-red-500 hover:bg-red-600 rounded mx-5 p-1"
          onClick={() => deleteTodo(todo._id)}
        >
          delete
        </button>
      </div>

    </div>
  )
}

export default Todo