let input = document.querySelector("input");
let addBtn = document.querySelector(".add");
let ul = document.querySelector(".ul");
let footer = document.querySelector(".footer1");
let clearAllBtn = document.querySelector(".clear-all");

let tasks = []; // array of objects: { id, text, completed }

// ---------- LocalStorage helpers ----------
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const raw = localStorage.getItem("tasks");
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) tasks = parsed;
  } catch (err) {
    console.error("Could not parse tasks from localStorage:", err);
    tasks = [];
  }
}

// ---------- DOM creation / render ----------
function createTaskElement(task) {
  const li = document.createElement("li");
  li.dataset.id = task.id;

  // Task container
  let taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");

  // Checkbox
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  checkbox.checked = !!task.completed;

  // Checkbox behavior / update model
  checkbox.addEventListener("change", function () {
    // update the task object in tasks array
    const idx = tasks.findIndex((t) => t.id === task.id);
    if (idx > -1) {
      tasks[idx].completed = checkbox.checked;
      saveTasks();
      // visual update
      if (checkbox.checked) {
        taskContainer.style.textDecoration = "line-through";
        taskContainer.style.color = "gray";
      } else {
        taskContainer.style.textDecoration = "none";
        taskContainer.style.color = "black";
      }
      updateFooter();
    }
  });

  // Task text
  let taskText = document.createTextNode(task.text);

  // set initial visual for completed
  if (task.completed) {
    taskContainer.style.textDecoration = "line-through";
    taskContainer.style.color = "gray";
  } else {
    taskContainer.style.textDecoration = "none";
    taskContainer.style.color = "black";
  }

  taskContainer.appendChild(checkbox);
  taskContainer.appendChild(taskText);

  // Delete button
  let delbtn = document.createElement("button");
  delbtn.textContent = "Delete";
  delbtn.classList.add("delete-btn");
  delbtn.addEventListener("click", function () {
    // remove from tasks array, save and re-render
    tasks = tasks.filter((t) => t.id !== task.id);
    saveTasks();
    renderTasks();
  });

  // Append
  li.appendChild(taskContainer);
  li.appendChild(delbtn);

  return li;
}

function renderTasks() {
  ul.innerHTML = "";
  // rebuild list from tasks array
  tasks.forEach((task) => {
    const li = createTaskElement(task);
    ul.appendChild(li);
  });
  updateFooter();
}

// ---------- Footer & UI ----------
function ensureFooterTextSpan() {
  let span = footer.querySelector(".footer-text");
  if (!span) {
    span = document.createElement("span");
    span.classList.add("footer-text");
    footer.appendChild(span);
  }
  return span;
}

function updateFooter() {
  const allTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = allTasks - completedTasks;

  // ensure span exists and update
  const footerText = ensureFooterTextSpan();
  footerText.textContent = `Total Tasks: ${allTasks}  |  Completed: ${completedTasks}  |  Pending: ${pendingTasks}`;

  // Show/hide footer and button (use your CSS classes)
  if (allTasks === 0) {
    footer.classList.remove("footer");
    clearAllBtn.classList.remove("clr-btn");
  } else {
    footer.classList.add("footer");
    clearAllBtn.classList.add("clr-btn");
  }
}

// ---------- Clear all ----------
clearAllBtn.addEventListener("click", function () {
  if (!confirm("Are you sure you want to clear all tasks?")) return;
  tasks = [];
  saveTasks();
  renderTasks();
});

// ---------- Add task ----------
function addTaskFromInput() {
  if (input.value.trim() === "") {
    alert("Please enter a task");
    return;
  }

  const newTask = {
    id: Date.now() + Math.floor(Math.random() * 1000), // simple unique id
    text: input.value.trim(),
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  input.value = "";
  input.focus();
}

// Enter key event listener
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTaskFromInput();
  }
});

// Add button event listener
addBtn.addEventListener("click", function () {
  addTaskFromInput();
});

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", function () {
  loadTasks();
  renderTasks();
});
