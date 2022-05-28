let addTaskButton = document.getElementById("addTaskButton")
addTaskButton?.addEventListener("click", (e: MouseEvent) => {
	// if (taskNameField.value.length == 0) return // no empty items

	tasks.push(taskNameField.value)
	updateTasks()
	taskNameField.value = ""
})

let taskNameField: HTMLInputElement = document.getElementById("taskNameField") as HTMLInputElement
taskNameField?.addEventListener("keypress", (e: KeyboardEvent) => {
	if (e.key === "Enter") {
		e.preventDefault()
		addTaskButton?.click()
	}
})