document.addEventListener("DOMContentLoaded", () => {
  const inputBox = document.getElementById("inputBox");
  const addButton = document.getElementById("addBtn");
  const taskList = document.getElementById("todoList");

 
  const loadTasks = () => {
    taskList.innerHTML = ""; 
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    tasks.forEach((taskText) => {
      createTaskElement(taskText);
    });
  };

  
  const saveTasks = () => {
    let tasks = Array.from(taskList.children).map(li => li.querySelector("p").textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

 
  const createTaskElement = (taskText) => {
    taskText = taskText.charAt(0).toUpperCase() + taskText.slice(1).toLowerCase();

    const listItem = document.createElement("li");

    const taskPara = document.createElement("p");
    taskPara.textContent = taskText;
    taskPara.style.color = "black";

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("btn", "editBtn");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove"; 
    deleteButton.classList.add("btn", "deleteBtn");

    listItem.appendChild(taskPara);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  };

  
  addButton.addEventListener("click", () => {
    let taskText = inputBox.value.trim();

    if (taskText !== "") {
      createTaskElement(taskText);
      saveTasks(); 
      inputBox.value = "";
    }
  });

  
  taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteBtn")) {
      e.target.parentElement.remove();
      saveTasks();
    }
    if (e.target.classList.contains("editBtn")) {
      inputBox.value = e.target.parentElement.firstChild.textContent;
      e.target.parentElement.remove();
      saveTasks(); 
    }
  });

  inputBox.addEventListener("input", () => {
    let value = inputBox.value;
    if (value.length > 0) {
      inputBox.value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
  });

  loadTasks();
});
