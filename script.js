function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();
  if (taskText === "") return;
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = taskText;
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete-btn");
  delBtn.onclick = function () {
    li.remove();
  };
  li.appendChild(span);
  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
