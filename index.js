"use strict";
let tasks = [];
updateTasks();
function updateTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // clear list
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerText = task;
        li.classList.add("list-group-item");
        taskList.appendChild(li);
    });
}
