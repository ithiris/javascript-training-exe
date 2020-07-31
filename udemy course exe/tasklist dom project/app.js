//define UI variable

let form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const  filter = document.querySelector("#filter");
const taskInput = document.querySelector('#tasks');

//Load all event AudioListener
loadEventListener();
 
function loadEventListener(){

    form.addEventListener('submit',addTask);

    taskList.addEventListener('click',removeTask);

    clearBtn.addEventListener('click',clearTasks);

    filter.addEventListener('keyup',filterTask);

}

function addTask(e){
    if(taskInput.value === ""){
        alert("add a task");
    }

    // create li element

    const li= document.createElement('li');
    // add classNAme

    li.className="collection-item";

    //create textnode and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    
    // create new link element
    const link=document.createElement('a');

    link.className="delete-item secondary-content";

    link.innerHTML='<i class="fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);

    taskInput.value="";

    
    e.preventDefault();
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
    }

}

function clearTasks(){
    taskList.innerHTML='';
}

function filterTask(e){

    const text=e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){

        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!=-1){
            task.style.display='block';
        }
        else{
            task.style.display='none';
        }

    })

}