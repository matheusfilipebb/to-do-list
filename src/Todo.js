import React, { Component } from "react"
import "./Todo.css"

class Todo extends Component {
  state = {
    isEditing: false, todo: this.props.todo
  }
  toggleClass = () => {
    this.props.complition(this.props.id)
  }
  toggleForm = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }
  handleUpdate = (evt) => {
    evt.preventDefault()
    //take new todo data and pass up to parent
    this.props.update(this.props.id,this.state.todo)
    this.toggleForm()
  }
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  render() {
    if (this.state.isEditing) {
      return (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input type="text" value={this.state.todo} name="todo" onChange={this.handleChange}/>
            <button>Confirm</button>
          </form>
        </div>
      )
    } else {
      return (
        <div className="Todo">
          <li className={this.props.completed ? "Todo-task completed" : "Todo-task"} onClick={this.toggleClass}>{this.props.todo}</li>
          <div className="Todo-buttons">            
          <button onClick={this.toggleForm}><i class="bi-pencil-fill"></i></button>
          <button onClick={this.props.delete}><i class="bi-trash-fill"></i></button>
          </div> 
        </div>
      )
    }
  }
}
export default Todo
