export const INIT_STATE = 'INIT_STATE'
export const RESET_STATE = 'RESET_STATE'
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SHOW_ALL = 'all'
export const SHOW_ACTIVE = 'active'
export const SHOW_COMPLETED = 'completed'


/*export const initState = () => {
  return {
    type: INIT_STATE,
    todos: JSON.parse(localStorage.getItem('routeTodo')) || []
  }
}
*/

export const resetState = (payload = []) => {
  return {
    type: RESET_STATE,
    todos: payload
  }
}

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter)=> {
  return {
    type: setVisibilityFilter,
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}
