import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './App.css';
import 'normalize.css';

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
        <i class="iconfont">&#xe63b;</i>
      </li>
      )
    })

    return (
      <div className="App">
        <h1 className="App-title">My TodoList</h1>
        <div className="ipt-wrap">
          <TodoInput content={this.state.newTodo} />
          <button className="add-btn">
            <i class="iconfont">&#xe63b;</i>
          </button>
        </div>
        <div className="list-wrap">
          <ol className="todo-list">
            {todos}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
