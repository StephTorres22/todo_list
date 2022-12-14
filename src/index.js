
/* TODO:

-Need form validation to stop empty projects and tasks being added.

-Continue styling on projectCards and buttons

-Display projectArray within each project task

-Remove button is removing all instance from projectList, rectify

-Accessing local storage so existing project are displayed even after refresh

*/

import { Project, Task } from './classes';
import * as domModule from './DOMManipulation';


const projectList = []

export const removeProjectButtonArray = Array.from(document.querySelectorAll('.removeProjectButton'));

function addListenerToRemoveButton(){
    removeProjectButtonArray.forEach((button, index) => button.addEventListener('click', (e) => {
        if(e.target == removeProjectButtonArray[index]){
            projectList.splice(index, 1);
            removeProjectButtonArray.splice(index, 1);
            console.log(projectList, removeProjectButtonArray);
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

domModule.addProjectButton.addEventListener('click', domModule.showProjectModal);

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
    console.log(removeProjectButtonArray);
   // newProject.addProjectToStorage();
    domModule.closeProjectModal(); 
      
   // console.log(projectList)
    
    
    
      
}

/* Uses value from drop selection in task form to find index of target project instance  */
function findProjectIndex(projectTitle){

    projectTitle = domModule.projectDropDownList.value;
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






    
        

        /* this removes everything after the project is created
     */
        
        
        //webdevsimpliefied global listener... try use that next time
    
        //need to include deleteCount for this to work properly!
        //this is what was missing in books.js for library project.

        

















/* function showLocalStorage(){
    
    for (let i = 0; i < localStorage.length; i++){
        main.append(localStorage.getItem(localStorage.key(i)))//doesn't work as localStorage isn't a node
    }
} */


// TODO: remember to delete this, this means you can test/ console
//what's happening!
window.projectList = projectList
window.removeProjectButtonArray = removeProjectButtonArray



export {projectList}


