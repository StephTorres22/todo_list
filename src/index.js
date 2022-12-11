
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
    
    /* domModule.submitTaskButton.addEventListener('click', (e) =>{

       
        newProject.addTaskToProject(); // this method is not working
        domModule.closeTaskModal();
        e.preventDefault();
        
    
    }) */

  /*   domModule.submitTaskButton.addEventListener('click', (e) => {
        
        newProject.checkSelectAddTask();
        e.preventDefault();
        domModule.closeTaskModal();  
        
    })         */  
    
   // console.log(projectList, newProject.findProjectIndex());
    
/* 
    domModule.submitTaskButton.addEventListener('click', function(e){
        
        changeTaskButtonID();
        if(getTaskButtonID() == newProject.findProjectIndex()){


      //  newProject.addTaskToProject();
       // domModule.closeTaskModal();
        e.preventDefault();
        console.log(e.target.id)
            

        }     
    })

    function changeTaskButtonID(){

        let ID = newProject.findProjectIndex()
        domModule.submitTaskButton.setAttribute('id', ID);


    }

    function getTaskButtonID(){

        let ID  = domModule.submitTaskButton.getAttribute('id');

        return parseInt(ID)
        
    } */



}

export function whichSelection(){

    domModule.projectDropDownList.addEventListener('input', (e) => {
        let selection = e.target
        console.log(selection.value);
        return selection.value
        
    })

    

    
}



function getProjectIndex(title){

    let index = projectList.map((project) => project.title).indexOf(`${title}`);
    console.log(index)
    return index

}

function addTask(){

    let newTask = new Task(`${domModule.taskTitle.value}`, 
                        `${domModule.taskDescription.value}`);

    projectList[`${whichSelection()}`].projectArray.push(newTask);

}

domModule.submitTaskButton.addEventListener('click', (e) =>{

    addTask();
    domModule.closeTaskModal();
    e.preventDefault();
})



/* export function getSelectOption(){

    domModule.projectDropDownList.addEventListener('input', (e) => {    

        let select = e.target;
        console.log(select.value);
        if (select == )  

        
    
    }) 

} */

/* function showProjectList(){

    projectList.forEach((project) => {
        let item = document.createElement('div');
        item.innerText = project;
        main.appendChild(item);
    })
    //this creates duplicates
} */



/* function showLocalStorage(){
    
    for (let i = 0; i < localStorage.length; i++){
        main.append(localStorage.getItem(localStorage.key(i)))//doesn't work as localStorage isn't a node
    }
} */


// TODO: remember to delete this, this means you can test/ console
//what's happening!
window.projectList = projectList



export {projectList}


