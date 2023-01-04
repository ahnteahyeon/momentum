const TODOS = "todos";

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = toDoForm.querySelector("ul");

let toDos = [];

function saveToDo() {
  localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function handleDeleteToDo(event) {
  const li = event.target.parentNode;
  li.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveToDo();
}

function paintToDo(taskObj) {
  const li = document.createElement("li");
  li.id = taskObj.id;
  const span = document.createElement("span");
  span.innerText = taskObj.text;
  const button = document.createElement("button");
  button.type = "button";
  button.innerText = "❌";
  button.addEventListener("click", handleDeleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const task = toDoInput.value;
  toDoInput.value = "";
  const toDoObj = {
    id: Date.now(),
    text: task,
  };
  toDos.push(toDoObj);
  paintToDo(toDoObj);
  saveToDo();
}

const parsedData = JSON.parse(localStorage.getItem(TODOS));

if (parsedData !== null) {
  toDos = parsedData;
  toDos.forEach(paintToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
