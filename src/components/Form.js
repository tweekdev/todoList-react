import React, { Component } from 'react'

class Form extends Component {
  state = {
    name: '',
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({ name: '' })
  }
  render() {
    return (
      <div>
        <form
          className='row justify-content-around'
          onSubmit={this.handleSubmit}
        >
          <input
            className='col-8 form-control form-control-sm'
            type='text'
            placeholder='add your todos....'
            name='addTodo'
            id='addTodo'
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
          />
          <button type='submit' className='btn btn-sm btn-dark'>
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}

export default Form
