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
        <div>
          <form onSubmit={this.handleUpdate}>
            <input type="text" value={this.state.todo} name="todo" onChange={this.handleChange}/>
            <button>Confirm</button>
          </form>
        </div>
      )
    } else {
      return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p className={this.props.completed ? "completed" : ""} onClick={this.toggleClass}>{this.props.todo}</p>
          <button onClick={this.toggleForm}>edit</button>
          <button onClick={this.props.delete}>delete</button>
        </div>
      )
    }
  }
}
export default Todo
