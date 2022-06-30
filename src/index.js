document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("submit", e => {
    e.preventDefault();
    const form = document.getElementById("create-task-form");
    const tasks = document.getElementById("new-task-description").value;
    addTasks(tasks);
    form.reset();
  })
});


function addTasks(tasks) {
  const toDoList = document.getElementById("tasks")
  const li = document.createElement("li");
  li.innerText = tasks;
  toDoList.appendChild(li);
}