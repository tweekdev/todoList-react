import React from 'react'
import Todo from './Todo'
const TodoList = props => {
  return (
    <div>
      <h3 className='mt-5 text-center'>Your Todos</h3>
      <div>
        {props.todos.length == 0 ? (
          <p className='text-center'>You have no todos....</p>
        ) : (
          props.todos.map(todo => (
            <Todo
              removeTodo={props.removeTodo}
              editTodo={props.editTodo}
              key={todo.id}
              data={todo}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default TodoList
