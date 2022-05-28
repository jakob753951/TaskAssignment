"use strict";
let addTaskButton = document.getElementById("addTaskButton");
addTaskButton?.addEventListener("click", (e) => {
    // if (taskNameField.value.length == 0) return // no empty items
    tasks.push(taskNameField.value);
    updateTasks();
    taskNameField.value = "";
});
let taskNameField = document.getElementById("taskNameField");
taskNameField?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        addTaskButton?.click();
    }
});
