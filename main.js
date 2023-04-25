const form = document.forms[0];
const addTaskButton = document.getElementById('create-task');
const inputTask = document.getElementById('input-task');
const list = document.getElementById('task-list');


addTaskButton.addEventListener('click', (e)=>{
    if(inputTask.value != "") {
        let listElement = document.createElement("li");
        let task = document.createTextNode(inputTask.value);
        listElement.appendChild(task);
        listElement.appendChild(addDeleteButton());

        list.appendChild(listElement);
        
        inputTask.value = "";

    }
})


function addDeleteButton() {
    let deleteTask = document.createElement("button");
    deleteTask.textContent = "X";
    deleteTask.className = "delete-btn";

    deleteTask.addEventListener('click', (e)=> {
        const item = e.target.parentElement;
        list.removeChild(item);
    });
    
    return deleteTask;

}