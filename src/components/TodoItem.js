import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    // this.handleAddTodos = this.handleAddTodos.bind(this);
    console.log(props);
    // this.handleCompleteTodos = this.handleCompleteTodos.bind(this);
    this.handleDeleteTodos = this.handleDeleteTodos.bind(this);
  }

  handleCompleteTodos(id) {
    this.props.todoContext.updateTodos(id);
  }

  handleDeleteTodos(id) {
    this.props.todoContext.deleteTodos(id);
  }

  render() {
    const todoElement = document.createElement("li");
    todoElement.classList.add(
      `${this.props.todo.boolean ? "completed" : "not-completed"}`,
      "todo-item"
    );
    // todoElement.innerHTML = "";
    todoElement.innerHTML = `
      <span>${this.props.todo.todo}</span>
      <div>
        <button class="complete_btn">${
          this.props.todo.boolean ? "Mark Complete" : "Mark Incomplete"
        }</button>
        <button class="delete_btn">Delete</button>
      </div>
    `;

    todoElement.querySelector(".complete_btn").addEventListener("click", () => {
      this.handleCompleteTodos(this.props.todo.id);
    });

    todoElement
      .querySelector(".delete_btn")
      .addEventListener("click", () =>
        this.handleDeleteTodos(this.props.todo.id)
      );

    return todoElement;
  }
}
