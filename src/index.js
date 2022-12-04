import { Project } from './classes';
import { submitProjectButton, addProjectButton, showProjectModal, projectDescription, projectTitle, sideBar, closeProjectModal } from './DOMManipulation';





const projectList = [];

/* for some reason this is coming up as not being defined so cant access on the console */

addProjectButton.addEventListener('click', showProjectModal);
submitProjectButton.addEventListener('click', addProjectToList);
/* submitProjectButton.addEventListener('click', showLocalStorage); */
 


function addProjectToList(){

    /* only half of this working as expected... */
    let newProject = new Project(`${projectTitle.value}`, `${projectDescription.value}`);
    projectList.push(newProject);
    newProject.displayProjectData();
    newProject.addProjectToStorage();
    closeProjectModal();

}

/* function showLocalStorage(){
    
    for (let i = 0; i < localStorage.length; i++){
        main.appendChild(localStorage.getItem(localStorage.key(i)))
    }
} */




export {projectList}


