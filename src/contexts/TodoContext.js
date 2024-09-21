export class TodoContext {
  static idCounter = 0;

  constructor() {
    this.todos = [];
    this.listeners = [];
  }

  addTodos(todo) {
    this.todos.push({
      id: TodoContext.idCounter++,
      todo,
      boolean: false,
    });
    console.log(this.todos);
    this.notifyListeners();
  }

  getTodo() {
    return this.todos;
  }

  subscribe(listener) {
    this.listeners.push(listener);
    console.log(listener);
  }

  updateTodos(id) {
    this.todos.find((el) => {
      if (el.id === id) return (el.boolean = !el.boolean);
    });
    console.log(id);
    this.notifyListeners();
  }

  deleteTodos(id) {
    this.todos = this.todos.filter((el) => el.id !== id);
    console.log(id);
    this.notifyListeners();
  }

  notifyListeners() {
    console.log(this.listeners);
    this.listeners.forEach((listener) => listener(this.todos));

    // added
    // this.listeners.forEach((listener) => listener()
  }
}
