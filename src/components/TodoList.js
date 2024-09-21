import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.updateTodos = this.updateTodos.bind(this);
    this.props.todoContext.subscribe(this.updateTodos);
    this.todosListElement = null;
  }

  updateTodos(todos) {
    console.log("todolist", todos);
    this.todosListElement.innerHTML = "";
    this.state.todos = todos;
    this.state.todos.forEach((todo) => {
      this.todosListElement.appendChild(
        new TodoItem({ todo, todoContext: this.props.todoContext }).render()
      );
    });
  }

  render() {
    const todoElement = document.createElement("div");
    todoElement.className = "todo-list";
    todoElement.innerHTML = `
      <ul></ul>
    `;

    this.todosListElement = todoElement.querySelector("ul");
    return todoElement;
  }
}
