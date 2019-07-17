import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './components/Form'
import TodoList from './components/TodoList'

class App extends Component {
  state = {
    todos: [],
  }

  //   addTodo = todo => {
  //     let oldTodos = this.state.todos
  //     todo.id = Date.now()
  //     let newTodos = [...oldTodos, todo]
  //     this.setState({ todos: newTodos })
  //   }
  //   addTodo = todo => {
  //     this.props.addTodo(todo)
  //   }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center mt-3 mb-5'>TodoList React/Redux</h1>
        <Form addTodo={this.props.addTodo} />
        <TodoList
          editTodo={this.props.editTodo}
          removeTodo={this.props.removeTodo}
          todos={this.props.todos}
        />
      </div>
    )
  }
}

const editTodoActionConstructor = todo => {
  return {
    type: 'EDIT_TODO',
    payload: todo,
  }
}
const removeTodoActionConstructor = todo => {
  return {
    type: 'REMOVE_TODO',
    payload: todo,
  }
}

const addTodoActionCreator = todo => {
  return {
    type: 'ADD_TODO',
    payload: todo,
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => {
      dispatch(addTodoActionCreator(todo))
    },
    editTodo: todo => {
      dispatch(editTodoActionConstructor(todo))
    },
    removeTodo: todo => {
      dispatch(removeTodoActionConstructor(todo))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
