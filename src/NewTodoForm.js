import React, { Component } from "react"
import { v4 as uuid } from "uuid"

class NewTodoForm extends Component {
  state = {
    todo: "",
  }
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.createTodo({ ...this.state, id: uuid(), completed: false})
    this.setState({
      todo: "",
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="todo">New Todo</label>
          <input
            type="text"
            name="todo"
            id="todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />
        </div>
        <button>Add</button>
      </form>
    )
  }
}
export default NewTodoForm
