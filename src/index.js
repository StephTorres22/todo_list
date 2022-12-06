import { Project } from './classes';
import { submitProjectButton, addProjectButton, showProjectModal, projectDescription, projectTitle, sideBar, closeProjectModal, main } from './DOMManipulation';






const projectList = []
/* const projectList = (() => {

    const projectListArray = [];

    return { projectListArray }
})(); */

/* for some reason this is coming up as not being defined so cant access on the console */

addProjectButton.addEventListener('click', showProjectModal);
submitProjectButton.addEventListener('click', function(e){
    addProjectToList();
    e.preventDefault();/* this stops validation happening too. */
});
/* submitProjectButton.addEventListener('click', showLocalStorage); */

 


function addProjectToList(){

    
    let newProject = new Project(`${projectTitle.value}`, `${projectDescription.value}`);
    projectList.push(newProject);
    newProject.displayProjectData();
    newProject.addProjectToStorage();
    closeProjectModal();
    console.log(projectList);
   showLocalStorage()

}

/* function showProjectList(){

    projectList.forEach((project) => {
        let item = document.createElement('div');
        item.innerText = project;
        main.appendChild(item);
    })
    //this creates duplicates
} */



function showLocalStorage(){
    
    for (let i = 0; i < localStorage.length; i++){
        main.append(localStorage.getItem(localStorage.key(i)))//doesn't work as localStorage isn't a node
    }
}
// TODO: remember to delete this, this means you can test/ console
//what's happening!
window.projectList = projectList


export {projectList}


