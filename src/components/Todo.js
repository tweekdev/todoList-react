import React, { Component } from 'react'

class Todo extends Component {
  state = {
    isInEditMode: false,
  }
  toggleMode = () => {
    this.setState({ isInEditMode: !this.state.isInEditMode })
    console.log('prout')
  }

  handleEditName = (e, todo) => {
    todo.name = e.target.value
    this.props.editTodo(todo)
  }
  handleClick = (e, todo) => {
    todo.id = e.target.value
    this.props.removeTodo(todo)
  }
  render() {
    return (
      <div className='card mt-4'>
        {this.state.isInEditMode ? (
          <div className='mx-2 card-body row justify-content-between text-light'>
            <input
              type='text'
              onChange={e => this.handleEditName(e, this.props.data)}
              className='form-control form-control-sm col-8'
              value={this.props.data.name}
            />
            <button
              type='button'
              onClick={this.toggleMode}
              className='btn btn-dark btn-sm'
            >
              save todo
            </button>
          </div>
        ) : (
          <div
            className='
              mx-2 card-body row justify-content-between text-light'
          >
            <div
              className='col-8'
              onClick={e => this.handleClick(e, this.props.data)}
            >
              {this.props.data.name}
            </div>
            <button
              type='button'
              onClick={this.toggleMode}
              className='btn btn-dark btn-sm'
            >
              edit todo
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Todo
