import React, { Component } from "react"
import NewTodoForm from "./NewTodoForm"
import Todo from "./Todo"
import "./TodoList.css"

class TodoList extends Component {
  state = {
    todos: [],
  }
  //Edit To-do
  update = (todoId, todoUpdateValue) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, todo: todoUpdateValue }
        }
        return todo
      }),
    })
  }
  //Marca o To-do como concluido
  toggleComplition = (todoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      }),
    })
  }
  //Delete To-do
  delete(todoId) {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== todoId) })
  }
  //Add To-do
  create = (newTodo) => {
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        todo={todo.todo}
        id={todo.id}
        key={todo.id}
        completed={todo.completed}
        delete={() => this.delete(todo.id)}
        update={this.update}
        complition={this.toggleComplition}
      />
    ))
    return (
      <div className="TodoList">
        <h1>To-do List<span>Lista de tarefas feita com React</span></h1>
        <ul>{todos}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    )
  }
}
export default TodoList
