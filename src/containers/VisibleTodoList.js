import { connect } from 'react-redux'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case SHOW_ACTIVE: 
      return todos.filter(todo => !todo.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


const mapStateToProps = (state, ownProps) => {
  console.log('line 20', ownProps.filter)
  return {
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
    todos: getVisibleTodos(state.todos, ownProps.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList