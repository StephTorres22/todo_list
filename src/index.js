/* TODO...
    
-would be nice to alert within each input if not filled in as part of form validation.
    would have to do create this alert is js, looooonnnnnnnnnnnng!

-A sort by function would be cool, i.e date, or priority

-filter function

-Expand button functionality,

    click on a project card and it's then displayed in main with all the details,
    maybe make overflow hidden so this is more relevant.

    include a check box for each task to change priority to complete, change colour.
        need to add condition so this happens in project side cards too.

    would like to update main card when new tasked are added, right now they are displayed staightaway

-Default load page, large calender showing 3days with task and project for today, tomorrow, and day after
        would be cool to include a clock, round, minimal, moving hands,
        
-View options for main window, 

    -split calendar with clock  and enlarged project
    -split search results and calendar with clock
    -show all project in a slightly larger project card in a grid? 
     obsolete if search funtion exists. 

-be able to edit projects through large cards  

-need to add functionality to remove button, i.e, removes project from main page if expanded

-Need info to stay after reload, local storage, or JSON?     
*/

import { Project, Task } from './classes';
import * as domModule from './DOMManipulation';
import { setClock } from './clock';

setClock()
setInterval(setClock, 1000);


const projectList = []

export const newTaskButtonArray = Array.from(document.querySelectorAll('.newTaskButton'));

export const taskListDivArray = Array.from(document.querySelectorAll('.projectArrayDiv'));

export const expandButtonArray = Array.from(document.querySelectorAll('.expandButton'));

export const removeProjectButtonArray = Array.from(document.querySelectorAll('.removeProjectButton'));

function addListenerToRemoveButton(){
    removeProjectButtonArray.forEach((button, index) => button.addEventListener('click', (e) => {
        if(e.target == removeProjectButtonArray[index]){ 
            
            projectList.splice(index, 1);
            removeProjectButtonArray.splice(index, 1);
            newTaskButtonArray.splice(index, 1);
            taskListDivArray.splice(index, 1);
            updateProjectListInLocalStorage();

            domModule.removeDropDownListFromTaskForm();
            domModule.repopulateDropDownList();
            domModule.closeTaskModal();
            
            //each option has attribute id set to index of project in projectList
            
            changeTaskSubmitID();
            addListenerToRemoveButton();
            if(projectList.length == 0){
                localStorage.clear();
            }
        }
    }));

}
/* Think this works, tests the target against the array of buttons, 
    only executes splice if they are the same!
    Only splices one element
    Has to be called again to reinstate listeners!
    Add to the submit button so listener is added straight to projects when created
     
 */




/* Project buttons and form listeners */

domModule.addProjectButton.addEventListener('click', () =>{
   
    domModule.showProjectModal();});

//stops submit button from refreshing the page after each submit
domModule.submitProjectButton.addEventListener('click', function(e){

    
    if(projectFormValidation() == true){
        addProjectToList();
        addListenerToRemoveButton();
        domModule.expandProject();
    

        domModule.repopulateDropDownList();
        domModule.closeTaskModal();
        changeTaskSubmitID();
        e.preventDefault();
    }else e.preventDefault();
    /* e.default() stops page reload on submission, also stops css form validation */
});
domModule.closeProjectModalButton.addEventListener('click', domModule.closeProjectModal)

/* PROJECT FORM VALIDATIONS */

/* Alert if name or description is empty, also alert if name is the same as another name */
function projectFormValidation(){

    const projectTitles = projectList.map((project) => project.title)   

    if(domModule.projectTitle.value == '' || domModule.projectTitle.value == null){
        alert("Your new project needs a name!");
        return false
    }else if(projectTitles.includes(domModule.projectTitle.value)){
        alert("A project with this name already exists, please choose another name.")
        return false
    }else if(domModule.projectDescription.value == '' || domModule.projectDescription.value == null){
        alert("Your new project needs a description!");
        return false
    }else return true  

}


/* Task form listeners */  

domModule.submitTaskButton.addEventListener('click', (e) => {
    
    if(domModule.inputDiv.contains(domModule.createDropDownList.projectDropDownList)){
        if(taskFormValidationViaSVG() == true){
            addTaskViaSVG(findProjectIndex(), getRadioGroupValue());
            domModule.closeTaskModal();
             e.preventDefault();
            /* Think these are needed in this order */
            domModule.repopulateDropDownList();//refreshes list and opens modal
            domModule.closeTaskModal(); //so need this to close modal
            changeTaskSubmitID();
        }

        /* Needs a nest if statement, not ideal, to check which method of task creation,
        and then validation */
        
    } else if(taskFormValidationViaProjectCard()){
            addTaskViaProjectCard(domModule.submitTaskButton.getAttribute('id'), getRadioGroupValue());
            domModule.closeTaskModal();
        e.preventDefault();
        /* Think these are needed in this order */
        domModule.repopulateDropDownList();//refreshes list and opens modal
        domModule.closeTaskModal(); //so need this to close modal
        changeTaskSubmitID();
    }

    /* Also, loads of duplication, if these other methods are outside of each if block,
    when form closes even if validation is false. */
    
    //resets listeners on new task buttons to reassign id so that new task 
    //can be pushed to correct array 
    updateProjectListInLocalStorage();

})

domModule.closeTaskModalButton.addEventListener('click', domModule.closeTaskModal);


/* TASK FORM VALIDATION */

/* validations work but have click handling vialion errors...? 
need to add condition of if task duedate is in the past.*/

function taskFormValidationViaSVG(index){

    index = findProjectIndex();
    if(checkTaskFormInputs(index)){
        return true
    }
}

function taskFormValidationViaProjectCard(index){

    index = domModule.submitTaskButton.getAttribute('id');
    if(checkTaskFormInputs(index)){
        return true
    }
}

function checkTaskFormInputs(index){

    let selection = getRadioGroupValue();
    const taskTitles = projectList[index].projectArray.map((task) => task.title);
    const currentDate = new Date()
    if(domModule.taskTitle.value == '' || domModule.taskTitle.value == null){
        alert("Please give your new task a name.");
        return false
    }
    if(taskTitles.includes(domModule.taskTitle.value)){
        alert("A task with that name already exists within this project, please choose another name.");
        return false
    }
    /* if(domModule.taskDescription.value == '' || domModule.taskDescription.value == null){
        alert("Please describe your new task.");
        return false
    } */
    if(selection == null){
        alert("Please select a relevant priority level.");
        return false
    }
    if(domModule.taskDueDate.value == null || domModule.taskDueDate.value == undefined || domModule.taskDueDate.value == ''){
        alert("Please pick a due date for your new task.");
        return false
    }
    /* uses new Date object to convert string representation of taskDueDate.value and compare it against current date.  */
    if(( new Date(domModule.taskDueDate.value)) < currentDate){
        alert('This date has already passed, please pick a future date')
        return false
    }
    
    return true
}


/* ADDING PROJECTS  */
function addProjectToList(){

    

    let newProject = new Project(`${domModule.projectTitle.value}`, `${domModule.projectDescription.value}`, new Date());
    projectList.push(newProject);
    newProject.displayProjectData();
    newProject.addProjectToDropDownSelection();
    domModule.closeProjectModal();      
    updateProjectListInLocalStorage();  
}


/* ADDING TASK FUNCTIONS */

/* Uses value from drop selection in task form to find index of target project instance  */
function findProjectIndex(projectTitle){

    projectTitle = domModule.createDropDownList.projectDropDownList.value;
    let index = projectList.map((project) => project.title).indexOf(`${projectTitle}`);
    return index;
}


/* Uses index to push new task to desired project instance */
function addTaskViaSVG(index, selection){

    let newTask = new Task(`${domModule.taskTitle.value}`, 
                           `${domModule.taskDescription.value}`,
                            selection,
                           `${domModule.taskDueDate.value}`,
                            new Date());

    projectList[index].projectArray.push(newTask);
    displayTasks(index);

    /* Checks ID on main, meaning id project is open in main,
    then same 3 lines of code to check if there are any elements present,
    if so remove them all, 
    then redisplay info, update. */
    if(domModule.main.getAttribute('id') == projectList[index].title){
        if(domModule.main.hasChildNodes !== true){
            while(domModule.main.firstChild){
                domModule.main.removeChild(domModule.main.firstChild)
            }
        };
        domModule.displayCurrentProjectData(index, domModule.main)   

    } 
    

}
export function changeTaskSubmitID(){
    newTaskButtonArray.forEach((button, index) => button.addEventListener('click', (e) => {
        if(e.target == newTaskButtonArray[index]){
            domModule.submitTaskButton.setAttribute('id', `${index}`);         
        }

    }))
}

function addTaskViaProjectCard(index, selection){

    let newTask = new Task(`${domModule.taskTitle.value}`, 
                            `${domModule.taskDescription.value}`,
                             selection,
                            `${domModule.taskDueDate.value}`,
                            new Date());

    projectList[index].projectArray.push(newTask);

    
    if(domModule.main.getAttribute('id') == projectList[index].title){
        if(domModule.main.hasChildNodes !== true){
            while(domModule.main.firstChild){
                domModule.main.removeChild(domModule.main.firstChild)
            }
        };
        domModule.displayCurrentProjectData(index, domModule.main)
    }
    domModule.submitTaskButton.removeAttribute('id');
    displayTasks(index);
    
    /* Need to remove the id attribute else on project removal corresponding option from
    dropdownlist isn't targetable */
    
}


/* DISPLAYING TASKS FUNCTIONS */

/* This puts the correct task in the correct box*/
function displayTasks(index){    
        
    let targetTaskDiv = taskListDivArray[index];    

    if(targetTaskDiv.hasChildNodes !== true){
        while (targetTaskDiv.firstChild){
            targetTaskDiv.removeChild(targetTaskDiv.firstChild);
        }
    }
    /* should be able to replace this with deleteCurrentDisplay */

    projectList[index].projectArray.forEach((task) => {
        let newTask = document.createElement('li'); 
        targetTaskDiv.appendChild(newTask);
        newTask.innerText = `${task.title}`;
        
        checkTaskPriority(task, newTask);   
    })  
    
}

export function checkTaskPriority(task, newTask){

    let low = 'rgba(225, 215, 0, .3)';
    let medium = 'rgba(225, 140, 0, .3)';
    let high = 'rgba(225, 0, 0, .3)';
    let complete = 'rgba(50, 205, 50, .3)'

    if(`${task.priority}` == 'low'){
        newTask.style.backgroundColor = low;
    }
    if(`${task.priority}` == 'medium'){
        newTask.style.backgroundColor = medium;
    }
    if(`${task.priority}` == 'high'){
        newTask.style.backgroundColor = high;
    }
    if(`${task.priority}` == 'complete'){
        newTask.style.backgroundColor = complete;
    }
     /* Just using these as basic colours, can be more specific later if i want. 
        this probably becomes very slow as projects grow, deleting, recreating elements each time.
        crude fix.*/ 
        
}

function getRadioGroupValue(){

    if(domModule.priorityHigh.checked){
        return domModule.priorityHigh.value
    }else if(domModule.priorityMedium.checked){
        return domModule.priorityMedium.value
    }else if(domModule.priorityLow.checked){
        return domModule.priorityLow.value
    }else return null    

    /* Tried a forEach loop over the radioGroup to return the value of which 
    radio was checked, but could not pass this a value to new task priority,
    couldn't work it out. */
    
}

/* LOCAL STORAGE FUNCTIONS */

function saveProjectListToLocalStorage(){


    localStorage.setItem('projectList', JSON.stringify(projectList));

}

function deserialiseProjectListFromLocalStorage(){

    let deserialisedProjectList = JSON.parse(localStorage.getItem('projectList'));
    return deserialisedProjectList
    
}

function repopulateProjectListFromLocalStorage(array){

    if(localStorage.length !== 0){
 
        array = deserialiseProjectListFromLocalStorage();

        array.forEach((project, pindex) =>{
        
            let existingProject = new Project(`${project.title}`, 
                                              `${project.description}`,
                                              `${project.dateCreated}`,
                                              `${project.projectArray}`);
                            
            projectList.push(existingProject);
            existingProject.displayProjectData();
            existingProject.addProjectToDropDownSelection();
            
            project.projectArray.forEach((task, index) =>{
                let existingTask = new Task (`${project.projectArray[index].title}`,
                                             `${project.projectArray[index].description}`,
                                             `${project.projectArray[index].priority}`,
                                             `${project.projectArray[index].dueDate}`,
                                             `${project.projectArray[index].dateCreated}`);

                existingProject.projectArray.push(existingTask);
                displayTasks(pindex);

            })
         })
     
         addListenerToRemoveButton();
         changeTaskSubmitID();
         domModule.expandProject();
    }
}

function updateProjectListInLocalStorage(){

    
    localStorage.removeItem('projectList')
    saveProjectListToLocalStorage();

}


/* function showLocalStorage(){
    
    for (let i = 0; i < localStorage.length; i++){
        main.append(localStorage.getItem(localStorage.key(i)))//doesn't work as localStorage isn't a node
    }
} */


// TODO: remember to delete this, this means you can test/ console
//what's happening!
window.projectList = projectList;
window.deserialiseProjectListFromLocalStorage = deserialiseProjectListFromLocalStorage;
window.repopulateProjectListFromLocalStorage = repopulateProjectListFromLocalStorage;


export {projectList}

domModule.body.onload = repopulateProjectListFromLocalStorage();
