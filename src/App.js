import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoLists:[
        {id:1,content:'第一个todolist',status:'completed',delete:false}
      ],
      newTodo: '请输入你的todoList'
    }
  }
  render() {
    let todos = this.state.todoLists.map((item,index) => {
      return (
      <li className="todo-item">
        <TodoItem item = {item}/>
      </li>
      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ToDoList</h1>
        </header>
        <TodoInput content={this.state.newTodo}/>
       <ol className="todo-list">
         {todos}
       </ol>
      </div>
    );
  }
}

export default App;
