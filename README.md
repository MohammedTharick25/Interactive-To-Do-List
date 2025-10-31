# 📝 Interactive To-Do List (Month 1 Major Project)

A simple **web-based To-Do List App** built using pure **HTML, CSS, and JavaScript**.  
This project is the culmination of **Week 4: Functions, Scope & Error Handling**, where the goal was to bring together all key concepts into a functional mini-application.

---

## 🎯 Project Goals

By completing this project, the following JavaScript concepts were demonstrated:

| Concept                                                  | Description                                                                        |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Function Declarations, Expressions & Arrow Functions** | Modular functions for add, delete, render, and save tasks.                         |
| **Callbacks**                                            | Used in `addEventListener()` and `forEach()` for event-driven logic and iteration. |
| **`this` Keyword**                                       | Understood in event handlers and global context.                                   |
| **Error Handling (`try...catch`)**                       | Safely parsing data from `localStorage` and handling empty input.                  |
| **localStorage & JSON**                                  | Persistent client-side storage using `JSON.stringify()` / `JSON.parse()`.          |

---

## 💡 Features

- ➕ **Add new tasks**
- ✅ **Mark tasks as completed** (checkbox toggle)
- ❌ **Delete tasks individually**
- 🗑 **Clear all tasks** with confirmation
- 💾 **Persist tasks** using `localStorage` (auto-save)
- 📊 **Footer summary:** total, completed, and pending counts
- 🧠 **Input validation:** prevents empty tasks
- 🧱 **Structured codebase** using functions and modular logic

---

### Main Functions

| Function                      | Purpose                                        |
| ----------------------------- | ---------------------------------------------- |
| `addTaskFromInput()`          | Reads input, validates, creates new task       |
| `createTaskElement(task)`     | Builds and returns DOM elements for a task     |
| `renderTasks()`               | Displays all tasks from the array              |
| `saveTasks()` / `loadTasks()` | Handle persistence with localStorage           |
| `updateFooter()`              | Updates the total / completed / pending counts |

---

## 🧠 Key Learnings

- **Functions** can be reused and combined to manage UI logic cleanly.
- **Callbacks** drive event-based programming (e.g., `addEventListener`).
- **Error handling** prevents unexpected crashes (e.g., invalid JSON or empty inputs).
- **localStorage** lets you save and restore state without a database.
- **Planning before coding** (HTML structure + logic flow) helps organize development.

---

## 📅 Future Enhancements

- ✏️ **Edit existing tasks**

- 🎨 **Dark / Light theme toggle**

- 🔍 **Filter by All / Completed / Pending**

- 📅 **Add due dates and reminders**

- ☁️ **Sync tasks to cloud storage (Firebase / Supabase)**

## 👨‍💻 Author

**Your Name**  
Part of **JavaScript Month 1 Learning Journey**

> “Plan thoroughly. Code incrementally. Debug wisely.”
