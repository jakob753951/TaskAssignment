let tasks: string[] = []


updateTasks()

function updateTasks() {
	let taskList: HTMLUListElement = document.getElementById("taskList") as HTMLUListElement
	taskList.innerHTML = ""; // clear list
	tasks.forEach(task => {
		let li = document.createElement("li")
		li.innerText = task
		li.classList.add("list-group-item")
		taskList.appendChild(li)
	})
}