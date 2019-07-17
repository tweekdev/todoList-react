import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import App from './App'
import './index.css'
import * as serviceWorker from './serviceWorker'

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      action.payload.id = Date.now()
      const newState = [...state, action.payload]
      return newState
    case 'EDIT_TODO':
      const todoId = action.payload.id
      return state.map(todo => {
        if (todo.id !== todoId) {
          return todo
        }
        return action.payload
      })
    case 'REMOVE_TODO':
      const filteredTodo = state.filter(todo => todo.id !== action.payload.id)
      return filteredTodo
    default:
      return state
  }
}

const store = createStore(
  combineReducers({ todos: todosReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
