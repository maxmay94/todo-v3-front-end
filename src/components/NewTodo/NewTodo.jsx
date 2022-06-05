import React, { useState } from "react"

const NewTodo = (props) => {
  return (
    <div className="bg-gray-200 mx-auto rounded w-2/3">
      <input 
        className="w-full rounded" 
        type="text" 
        placeholder="TODO: "
        onChange={(e) => props.setNewTodo(e.target.value)}
      />

      <button 
        className="bg-green-700 hover:bg-green-800 w-full rounded"
        onClick={() => props.createTodo(props.newTodo)}
      >
        Add To-do
      </button>

    </div>
  )
}

export default NewTodo