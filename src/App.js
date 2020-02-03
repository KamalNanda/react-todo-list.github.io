import React, { Component } from 'react'
import uuid from 'uuid'
import "bootstrap/dist/css/bootstrap.min.css"
import TodoInput from './Component/TodoInput';
import TodoList from './Component/TodoList'
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <TodoInput/>
          <TodoList/>
        </div>
      </div>
    )
  }
}
