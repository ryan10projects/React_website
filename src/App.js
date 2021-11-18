import { Component } from "react";
import Todos  from './Todos'
import AddForm from "./AddForm";
class App extends Component{
  state = {
  todos: [
      {id:1, content: 'study react'},
      {id:2, content: 'study more react'}

  ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo=> {
      return todo.id !==id
    });
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos,todo]
    this.setState({
      todos
    })
  }
    render(){
          return (
            <div className="todos container">
              <h1 className="center blue-text">Todo's</h1>
              <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
              <AddForm addTodo={this.addTodo}/></div>
          );
    }
}

export default App;
