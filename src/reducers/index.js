import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
    todos,
    visibilityFilter
  }
)
// This is completely equivalenty to:
/*const todoApp = (state = {}, action) => {
  return { 
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}*/
export default todoApp