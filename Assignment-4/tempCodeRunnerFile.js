const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn'); 
const todoList = document.getElementById('todoList');

let editTodo = null;

const addTodo = () => {
  const inputText = inputBox.value.trim();
  if (inputText.length <= 0) {
    alert(" please , write your task");
    return false;
  }

  if (editTodo) {
    editTodo.querySelector("p").innerHTML = inputText;
    addBtn.innerText = "Add"; 
    editTodo = null; 
    inputBox.value = ""; 
    return;
  }

  // Creating p tag
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerHTML = inputText;
  li.appendChild(p);

  // Creating edit button
  const editBtn = document.createElement("button");
  editBtn.classList.add("btn", "editBtn");
  editBtn.innerText = "Edit";
  li.appendChild(editBtn);

  // Creating delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Remove";
  deleteBtn.classList.add("btn", "deleteBtn");
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
  inputBox.value = "";
};

const updateTodo = (e) => {
  if (e.target.innerHTML === "Remove") {
    todoList.removeChild(e.target.parentElement); 
  }

  if(e.target.innerHTML === "Edit"){
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value = "Edit";
  }
}

addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);
