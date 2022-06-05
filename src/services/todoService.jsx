import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/todos`

export const getAllTodos = async() => {
  try {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    console.log(data)
    return data
  } catch(err) {
    throw err
  }
}

export const createTodo = async() => {
  try {

  } catch(err) {
    throw err
  }
}

export const deleteTodo = async(id) => {
  try {

  } catch(err) {
    throw err
  }
}

export const doTodo = async(id) => {
  try {
    await fetch(`${BASE_URL}/done`, {
      method: 'PATCH',
    })
  } catch(err) {
    throw err
  }
}

export const updateTodo = async(id, todo) => {
  try {

  } catch(err) {
    throw err
  }
}