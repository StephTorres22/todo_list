
import './style.css';
import * as classes from './classes';



export const main = document.querySelector('.main');
export const sideBar = document.querySelector('.sideBar');
export const addProjectButton = document.getElementById('addProject');
export const addTaskSVG = document.getElementById('addTaskSVG');

addTaskSVG.addEventListener('click', showTaskModal);



export const projectCardArray = Array.from(document.querySelectorAll('.sideBarCard'));
export const removeProjectButtonArray = Array.from(document.querySelectorAll('.removerProjectButton'))


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
export const projectDropDownList = document.getElementById('projectListDropDown');
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

/* export function createTaskForm(){

    const taskFormModal = document.createElement('dialog');
    taskFormModal.setAttribute('id', 'taskFormModal');
    const taskForm = document.createElement('form');

    taskFormModal.appendChild(taskForm);

    const taskTitle = document.createElement('input');
    taskTitle.setAttribute('type', 'text');
    taskForm.appendChild(taskTitle);

    const taskDescription = document.createElement('input');
    taskDescription.setAttribute('type', 'text');
    taskForm.appendChild(taskDescription);

    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    taskForm.appendChild(submit);

    const close = document.createElement('button');
    close.setAttribute('type', 'button');
    close.addEventListener('click', closeTaskModal);
} */





       
    


