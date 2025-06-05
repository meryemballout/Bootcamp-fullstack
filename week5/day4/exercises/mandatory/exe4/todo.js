

export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ description: task, completed: false });
  }

  markTaskComplete(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
    } else {
      console.log("Invalid task index");
    }
  }

  listTasks() {
    console.log("📋 Todo List:");
    this.tasks.forEach((task, idx) => {
      const status = task.completed ? "✅" : "❌";
      console.log(`${idx + 1}. ${status} ${task.description}`);
    });
  }
}
