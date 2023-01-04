/* TODO...

    OPTIONS, tasklist scrollable or hidden?

    if hidden, functionality of expand button makes sense, click on it
    and then project is displayed in main.

    if scrollable, easier for user to find task they are looking for from the side bar,
    does main then become obsolete?
    

    -I would like alternate colors for list/task items, light blue and white/light grey.

    tried using nth child(even) on li, but because i delete and refresh each time backgroud colour switched between hhe two

    different colours for priority

    need to add prioirty check

    style forms

    stlye sidebar cards, buttons lis etc
    
-A sort by function would be cool, i.e date, or priority

-Validation for form, with alert

*/


    


import { Project, Task } from './classes';
import * as domModule from './DOMManipulation';


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
          

            
            domModule.removeDropDownListFromTaskForm();
            domModule.repopulateDropDownList();
            domModule.closeTaskModal();
            
            //each option has attribute id set to index of project in projectList
            
            changeTaskSubmitID();
            
            addListenerToRemoveButton();
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
    addProjectToList();
    addListenerToRemoveButton();
    domModule.repopulateDropDownList();
    domModule.closeTaskModal();
    changeTaskSubmitID();
    e.preventDefault();/* this stops validation happening too. NEED TO ADD VALIDATION
    what happens if button type is changed from submit to button? */
});
domModule.closeProjectModalButton.addEventListener('click', domModule.closeProjectModal)


/* Task form listeners */  

domModule.submitTaskButton.addEventListener('click', (e) => {

    if(domModule.taskForm.contains(domModule.createDropDownList.projectDropDownList)){
        addTaskViaSVG();
    } else {
        addTaskViaProjectCard();
    }      
     
    domModule.closeTaskModal();
   // e.preventDefault();
    /* Think these are needed in this order */
    domModule.repopulateDropDownList();//refreshes list and opens modal
    domModule.closeTaskModal(); //so need this to close modal
    changeTaskSubmitID(); 
    //resets listeners on new task buttons to reassign id so that new task 
    //can be pushed to correct array 
    
    

})
domModule.closeTaskModalButton.addEventListener('click', domModule.closeTaskModal);




/* ADDING PROJECTS  */
function addProjectToList(){

    
    let newProject = new Project(`${domModule.projectTitle.value}`, `${domModule.projectDescription.value}`);
    projectList.push(newProject);
    newProject.displayProjectData();
    newProject.addProjectToDropDownSelection();

   // newProject.addProjectToStorage();
    domModule.closeProjectModal(); 
     
      
}

/* ADDING TASK FUNCTIONS */

/* Uses value from drop selection in task form to find index of target project instance  */
function findProjectIndex(projectTitle){

    projectTitle = domModule.createDropDownList.projectDropDownList.value;
    let index = projectList.map((project) => project.title).indexOf(`${projectTitle}`);
    return index;
}


/* Uses index to push new task to desired project instance */
function addTaskViaSVG(index){

    index = findProjectIndex();

    let newTask = new Task(`${domModule.taskTitle.value}`, 
                        `${domModule.taskDescription.value}`);

    projectList[index].projectArray.push(newTask);
    displayTasks(index);
    
    

} 

export function changeTaskSubmitID(){
    newTaskButtonArray.forEach((button, index) => button.addEventListener('click', (e) => {
        if(e.target == newTaskButtonArray[index]){
            domModule.submitTaskButton.setAttribute('id', `${index}`);         
        }

    }))
}

function addTaskViaProjectCard(index){

    index = domModule.submitTaskButton.getAttribute('id');

    let newTask = new Task(`${domModule.taskTitle.value}`, 
    `${domModule.taskDescription.value}`);

    projectList[index].projectArray.push(newTask);
    domModule.submitTaskButton.removeAttribute('id');
    displayTasks(index);
    /* Need to remove the id attribute else on project removal corresponding option from
    dropdownlist isn't targetable */
    
    
}



/* This puts the correct task in the correct box*/
function displayTasks(index){    
        
        let targetTaskDiv = taskListDivArray[index];    

        if(targetTaskDiv.hasChildNodes !== true){
            while (targetTaskDiv.firstChild){
                targetTaskDiv.removeChild(targetTaskDiv.firstChild);
            }
        }
        projectList[index].projectArray.forEach((task) => {
            let newTask = document.createElement('li');  

            
            console.log(task);
            targetTaskDiv.appendChild(newTask);
            newTask.innerText = `${task.title}`;

        })

       
        
   
    
}













    
        

    

        

















/* function showLocalStorage(){
    
    for (let i = 0; i < localStorage.length; i++){
        main.append(localStorage.getItem(localStorage.key(i)))//doesn't work as localStorage isn't a node
    }
} */


// TODO: remember to delete this, this means you can test/ console
//what's happening!
window.projectList = projectList;
window.removeProjectButtonArray = removeProjectButtonArray;
window.newTaskButtonArray = newTaskButtonArray;
window.taskListDivArray = taskListDivArray;




export {projectList}


