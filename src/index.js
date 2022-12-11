
/* TODO:

-Need form validation to stop empty projects and tasks being added.

-Continue styling on projectCards and buttons

-Add task to project button

-Accessing local storage so existing project are displayed even after refresh

-New form for task adding*/

import { Project, Task } from './classes';
import * as domModule from './DOMManipulation';


const projectList = []


domModule.addProjectButton.addEventListener('click', domModule.showProjectModal);

//stops submit button from refreshing the page after each submit
domModule.submitProjectButton.addEventListener('click', function(e){
    addProjectToList();
    e.preventDefault();/* this stops validation happening too. */
});



domModule.closeProjectModalButton.addEventListener('click', domModule.closeProjectModal)

     


domModule.closeTaskModalButton.addEventListener('click', domModule.closeTaskModal);

function addProjectToList(){

    
    let newProject = new Project(`${domModule.projectTitle.value}`, `${domModule.projectDescription.value}`);
    projectList.push(newProject);
    newProject.displayProjectData();
    newProject.addProjectToDropDownSelection();
    newProject.findProjectIndex();    
   // newProject.addProjectToStorage();
    domModule.closeProjectModal();   
    
     
  



  

    

    
}





function addTask(){

    let newTask = new Task(`${domModule.taskTitle.value}`, 
                        `${domModule.taskDescription.value}`);

    projectList[].projectArray.push(newTask);

}









/* function showLocalStorage(){
    
    for (let i = 0; i < localStorage.length; i++){
        main.append(localStorage.getItem(localStorage.key(i)))//doesn't work as localStorage isn't a node
    }
} */


// TODO: remember to delete this, this means you can test/ console
//what's happening!
window.projectList = projectList



export {projectList}


