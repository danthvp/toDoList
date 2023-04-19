const form = document.forms[0];
const addTaskButton = document.getElementById('create-task');
const inputTask = document.getElementById('input-task');
const list = document.getElementById('task-list');
const deleteButton = document.querySelectorAll('delete');

addTaskButton.addEventListener('click', (e)=>{
    let listElement = document.createElement("li");
    let task = document.createTextNode(inputTask.value);
    let deleteTask = document.createElement("button");
    let buttonText = document.createTextNode('X');
    deleteTask.classList.add('delete');
    deleteTask.appendChild(buttonText);
    listElement.appendChild(task);
    listElement.appendChild(deleteTask);
    list.appendChild(listElement);
    
    console.log(deleteButton);
    inputTask.value = "";
})




