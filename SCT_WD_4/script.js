const taskInput = document.getElementById("taskInput")
const dateTimeInput = document.getElementById("dateTimeInput")
const taskList = document.getElementById("taskList")

function addTask() {
  const taskText = taskInput.value.trim()
  const taskDate = dateTimeInput.value

  if (!taskText) return

  const li = document.createElement("li")

  const taskInfo = document.createElement("div")
  taskInfo.className = "task-info"
  taskInfo.innerHTML = `
    <div>${taskText}</div>
    <div class="task-date">${taskDate}</div>
  `

  const actions = document.createElement("div")
  actions.className = "actions"

  const completeBtn = document.createElement("button")
  completeBtn.className = "complete"
  completeBtn.innerText = "✔"
  completeBtn.onclick = () => taskInfo.classList.toggle("completed")

  const editBtn = document.createElement("button")
  editBtn.className = "edit"
  editBtn.innerText = "✎"
  editBtn.onclick = () => {
    const updated = prompt("Edit task", taskText)
    if (updated) taskInfo.children[0].innerText = updated
  }

  const deleteBtn = document.createElement("button")
  deleteBtn.className = "delete"
  deleteBtn.innerText = "🗑"
  deleteBtn.onclick = () => taskList.removeChild(li)

  actions.append(completeBtn, editBtn, deleteBtn)
  li.append(taskInfo, actions)
  taskList.appendChild(li)

  taskInput.value = ""
  dateTimeInput.value = ""
}