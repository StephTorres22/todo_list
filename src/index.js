
/* TODO: BRANCH NEWTASKBUTTON







-Using similar logic to remove button, 
    -on sumbitproject, new array for add task buttons created and updated
    -listener on newtask button to set id attribute of submit task to index of new task button set as const
    -nested if statement using e.target 
    const submitTaksButtonId =
    if (e.target == newTaskButtonArray[index]){
        addTaskModal.open() or whatever it is
        if (submitTaskButtonId == newTaskButtonArray[index]){
            projeclist[index].push(newTask)
        }
    } 
    Something like this to see if it works.

    Not too sure, might not be nested if statement, but each one set to the different clickListeners

-

*/

import { Project, Task } from './classes';
import * as domModule from './DOMManipulation';


const projectList = []

export const newTaskButtonArray = Array.from(document.querySelectorAll('.newTaskButton'));

export const removeProjectButtonArray = Array.from(document.querySelectorAll('.removeProjectButton'));

function addListenerToRemoveButton(){
    removeProjectButtonArray.forEach((button, index) => button.addEventListener('click', (e) => {
        if(e.target == removeProjectButtonArray[index]){
            projectList.splice(index, 1);
            removeProjectButtonArray.splice(index, 1);
            
            //each option has attribute id set to index of project in projectList
            let targetOption = document.getElementById(`${index}`);
            domModule.createDropDownList.projectDropDownList.removeChild(targetOption);
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
    e.preventDefault();/* this stops validation happening too. */
});
domModule.closeProjectModalButton.addEventListener('click', domModule.closeProjectModal)


/* Task form listeners */  


domModule.submitTaskButton.addEventListener('click', (e) => {

    addTask();
    domModule.closeTaskModal();
    e.preventDefault();

})
domModule.closeTaskModalButton.addEventListener('click', domModule.closeTaskModal);





function addProjectToList(){

    
    let newProject = new Project(`${domModule.projectTitle.value}`, `${domModule.projectDescription.value}`);
    projectList.push(newProject);
    newProject.displayProjectData();
    newProject.addProjectToDropDownSelection();

   // newProject.addProjectToStorage();
    domModule.closeProjectModal(); 
     
      
}

/* Uses value from drop selection in task form to find index of target project instance  */
function findProjectIndex(projectTitle){

    projectTitle = domModule.createDropDownList.projectDropDownList.value;
    let index = projectList.map((project) => project.title).indexOf(`${projectTitle}`);
    return index;
}


/* Uses index to push new task to desired project instance */
function addTask(index){

    index = findProjectIndex();

    let newTask = new Task(`${domModule.taskTitle.value}`, 
                        `${domModule.taskDescription.value}`);

    projectList[index].projectArray.push(newTask);

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



export {projectList}


