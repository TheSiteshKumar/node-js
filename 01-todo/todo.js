const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "todo.json");

function loadTasks() {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    console.log("Error: ", e.message);
    return [];
  }
}

function saveTasks(tasks) {
  try {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
    console.log("Tasks saved successfully!");
  } catch (e) {
    console.log("Error: ", e.message);
  }
}

const addTasks = (task) => {
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);
};

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.task}`);
  });
};

const deleteTask = (taskNumber) => {
    const tasks = loadTasks();
    const taskIndex = parseInt(taskNumber) - 1;
    if (taskIndex < 0 || taskIndex >= tasks.length) {
        console.log("Invalid task number!");
        return;
    }
    const deletedTask = tasks[taskIndex];
    tasks.splice(taskIndex, 1);
    saveTasks(tasks);
    console.log(`Task "${deletedTask.task}" deleted!`);
}

const updateTask = (taskNumber, newTask) => {
    const tasks = loadTasks();
    const taskIndex = parseInt(taskNumber) - 1;
    if (taskIndex < 0 || taskIndex >= tasks.length) {
        console.log("Invalid task number!");
        return;
    }
    const oldTask = tasks[taskIndex].task;
    tasks[taskIndex].task = newTask;
    saveTasks(tasks);
    console.log(`Task updated from "${oldTask}" to "${newTask}"`);
}



const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTasks(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "delete") {
  deleteTask(argument);
} else if (command === "update") {
  const taskNumber = argument;
  const newTask = process.argv[4];
  if (!taskNumber || !newTask) {
    console.log("Usage: node todo.js update <task_number> <new_task>");
    return;
  }
  updateTask(taskNumber, newTask);
} else {
  console.log("Available commands:");
  console.log("  add <task>           - Add a new task");
  console.log("  list                 - List all tasks");
  console.log("  delete <task_number> - Delete a task by number");
  console.log("  update <task_number> <new_task> - Update a task");
}
