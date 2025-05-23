const tasks = [];

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const listTasksDiv = document.querySelector(".listTasks");
const clear_btn = document.getElementById("clearBtn");

let nextTaskId = 0;

function addTask(taskText) {
  const task = {
    task_id: nextTaskId++,
    text: taskText,
    done: false,
  };

  tasks.push(task);
  renderTask(task);
}
function renderTask(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className =
    "flex items-center justify-between bg-gray-50 rounded p-2 shadow-sm";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "mr-3 h-5 w-5 cursor-pointer";
  checkbox.setAttribute("data-task-id", task.task_id);

  const label = document.createElement("label");
  label.textContent = task.text;
  label.className = "flex-grow cursor-pointer select-none";

  const leftDiv = document.createElement("div");
  leftDiv.className = "flex items-center flex-grow";
  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(label);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML =
    '<i class="fa-solid fa-xmark text-red-500 hover:text-red-700"></i>';
  deleteBtn.className = "ml-4";
  deleteBtn.setAttribute("data-task-id", task.task_id);

  taskDiv.appendChild(leftDiv);
  taskDiv.appendChild(deleteBtn);

  taskDiv.setAttribute("data-task-id", task.task_id);

  listTasksDiv.appendChild(taskDiv);

  checkbox.addEventListener("change", doneTask);

  deleteBtn.addEventListener("click", deleteTask);
}

function doneTask(event) {
  const taskId = parseInt(event.target.getAttribute("data-task-id"), 10);
  const task = tasks.find((t) => t.task_id === taskId);
  if (!task) return;
  task.done = event.target.checked;

  const label = event.target.nextElementSibling;
  if (task.done) {
    label.classList.add("line-through", "text-red-600");
  } else {
    label.classList.remove("line-through", "text-red-600");
  }
}

function deleteTask(event) {
  const taskId = parseInt(event.currentTarget.getAttribute("data-task-id"), 10);

  const taskIndex = tasks.findIndex((t) => t.task_id === taskId);
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
  }

  const taskDiv = listTasksDiv.querySelector(`[data-task-id="${taskId}"]`);
  if (taskDiv) {
    taskDiv.remove();
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  addTask(taskText);
  input.value = "";
});
clear_btn.addEventListener("click", () => {
  const remainingTasks = tasks.filter((task) => !task.done);
  tasks
    .filter((task) => task.done)
    .forEach((task) => {
      const taskDiv = listTasksDiv.querySelector(
        `[data-task-id="${task.task_id}"]`
      );
      if (taskDiv) {
        taskDiv.remove();
      }
    });

  tasks.length = 0;
  tasks.push(...remainingTasks);
});