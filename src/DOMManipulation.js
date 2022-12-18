
import './style.css';
import * as classes from './classes';
import { projectList } from './index';



export const main = document.querySelector('.main');
export const sideBar = document.querySelector('.sideBar');
export const addProjectButton = document.getElementById('addProject');
export const addTaskSVG = document.getElementById('addTaskSVG');

addTaskSVG.addEventListener('click', () => {
    /* this checks to see if taskForm already had dropdownlist as a child node
    if yes, it just opens the modal, if not, repopulates and creates dropdown.
    this stops duplication of options */
    return (taskForm.contains(createDropDownList.projectDropDownList) ? showTaskModal() : repopulateDropDownList())

});




export const projectCardArray = Array.from(document.querySelectorAll('.sideBarCard'));


/* Project form elements */
export const addProjectModal = document.getElementById('projectFormModal');
export const projectForm = document.getElementById('projectForm');

export const projectTitle = document.getElementById('projectTitle');
export const projectDescription = document.getElementById('description');
export const submitProjectButton = document.getElementById('submitProjectButton');
export const closeProjectModalButton = document.getElementById('closeProjectModal');

/* Task form elements */
export const taskFormModal = document.getElementById('taskFormModal');
export const taskForm = document.getElementById('taskForm');
export const taskTitle = document.getElementById('taskTitle');
export const taskDescription = document.getElementById('taskDescription');
export const taskDueDate = document.getElementById('dueDate');
//export const projectDropDownList = document.getElementById('projectListDropDown');
export const submitTaskButton = document.querySelector('.submitTask');
export const closeTaskModalButton = document.getElementById('closeTaskModal');


/* Project Form Modal Funtionality */
export function showProjectModal(){

    addProjectModal.showModal();

}

export function closeProjectModal(){

    addProjectModal.close(); // Needs this to close modal because default behaviour is disabled
    projectForm.reset() // resets form as default behaviour is disabled.
}

/* Task Form Modal functionality */

/* export function createTaskForm{
    
} */
export function showTaskModal(){

    taskFormModal.showModal();

}

export function closeTaskModal(){

    taskFormModal.close();
    taskForm.reset();
}

export const createDropDownList = (() => {

    const projectDropDownList = document.createElement('select');
    projectDropDownList.setAttribute('name', 'projectDropDownList');
    projectDropDownList.setAttribute('id', 'projectDropDownList');

    taskForm.appendChild(projectDropDownList);
    return {projectDropDownList};
})()
/* Using an IIFE so that the selection exists straightaway and returns the projectDropDownList object */


export function removeDropDownListFromTaskForm(){

    //this should remove all options from select in task form
    while (createDropDownList.projectDropDownList.firstChild){
        createDropDownList.projectDropDownList.removeChild(createDropDownList.projectDropDownList.firstChild);
    }

    //this should remove dropDownList from form
    taskForm.removeChild(createDropDownList.projectDropDownList);
    
}

/* Takes project titles and recreates drop down list depending what projects are present */
export function repopulateDropDownList(){   
    
    /* hoping this will work almost like a refresh */

    if (taskForm.contains(createDropDownList.projectDropDownList)){
        removeDropDownListFromTaskForm();
        }
    
    
        taskForm.appendChild(createDropDownList.projectDropDownList);

        projectList.forEach((project, index) => {
            let newProjectOption = document.createElement('option');
            newProjectOption.setAttribute('value', `${project.title}`);
            newProjectOption.setAttribute('id', `${index}`);
            newProjectOption.innerText = `${project.title}`;
            createDropDownList.projectDropDownList.appendChild(newProjectOption);
        })

        showTaskModal();
    
}


/* REMEMBER TO REMOVE THIS */
window.dropDownList = createDropDownList.projectDropDownList;


       
    


