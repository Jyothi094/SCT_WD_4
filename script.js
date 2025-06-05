const form = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskTime = document.getElementById("task-time");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask(taskInput.value, taskTime.value);
  form.reset();
});

function addTask(text, time) {
  const li = document.createElement("li");
  const dateTime = time ? `<small>⏰ ${new Date(time).toLocaleString()}</small>` : "";

  li.innerHTML = `
    <span class="task-text">${text}</span> ${dateTime}
    <div class="actions">
      <button class="done">✓</button>
      <button class="edit">✎</button>
      <button class="delete">🗑</button>
    </div>
  `;

  // Event Listeners
  li.querySelector(".done").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.querySelector(".edit").addEventListener("click", () => {
    const newText = prompt("Edit your task:", text);
    if (newText) {
      li.querySelector(".task-text").textContent = newText;
    }
  });

  li.querySelector(".delete").addEventListener("click", () => {
    if (confirm("Delete this task?")) {
      taskList.removeChild(li);
    }
  });

  taskList.appendChild(li);
}
