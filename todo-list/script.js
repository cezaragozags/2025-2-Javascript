"use strict"

const task = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if(taskText !== ""){
    tasks.push({name: taskText, complete: false })
    const li = document.createElement("li");
    li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <div class="task-buttons">
      <button onclick="deleteTask(this)">Eliminar</button>
    </div>
    `;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }

  console.log(tasks);

}

function deleteTask(btn) {
  for (let i = 0; i < tasks.lenght; i++){

  }
    btn.closest("li").remove();
}

function toggleComplete(span){
  span.classList.toggle("task-complete");
}