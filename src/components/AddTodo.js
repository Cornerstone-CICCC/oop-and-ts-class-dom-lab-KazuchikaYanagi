import { Component } from "../common/Component.js";

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const addElement = document.createElement("div");
    addElement.className = "add-todo";
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `;

    addElement.querySelector("#todo-add-btn").addEventListener("click", () => {
      const inputValue = document.querySelector("#todo-input").value;
      if (inputValue.trim() !== "") {
      }
      this.props.todoContext.addTodos(inputValue);
      document.querySelector("#todo-input").value = "";
    });

    return addElement;
  }

  mount() {}
}
