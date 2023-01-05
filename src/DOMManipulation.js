
import './style.css';
import * as classes from './classes';
import { checkTaskPriority, expandButtonArray, projectList } from './index';


export const main = document.querySelector('.main');
export const sideBar = document.querySelector('.sideBar');
export const addProjectButton = document.getElementById('addProject');
export const addTaskSVG = document.getElementById('addTaskSVG');
export const inputDiv = document.querySelector('.inputDiv');

addTaskSVG.addEventListener('click', () => {
    /* this checks to see if taskForm already had dropdownlist as a child node
    if yes, it just opens the modal, if not, repopulates and creates dropdown.
    this stops duplication of options */
    if(projectList.length > 0){
        return (inputDiv.contains(createDropDownList.projectDropDownList) ? showTaskModal() : repopulateDropDownList())
    }else {
        alert("Please make a project to add your task to")
        showProjectModal()
    }

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
export const prioirtyRadioGroup = document.querySelectorAll('input[name="priority"]');
export const priorityHigh = document.getElementById('priorityHigh');
export const priorityMedium = document.getElementById('priorityMedium');
export const priorityLow = document.getElementById('priorityLow');
//export const projectDropDownList = document.getElementById('projectListDropDown');
export const submitTaskButton = document.getElementById('submitTaskButton');
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


export function showTaskModal(){

    taskFormModal.showModal();

}

export function closeTaskModal(){

    submitTaskButton.removeAttribute('id');
    taskFormModal.close();
    taskForm.reset();
    
}

export const createDropDownList = (() => {

    const projectDropDownList = document.createElement('select');
    projectDropDownList.setAttribute('name', 'projectDropDownList');
    projectDropDownList.setAttribute('id', 'projectDropDownList');

    inputDiv.appendChild(projectDropDownList);
    return {projectDropDownList};
})()
/* Using an IIFE so that the selection exists straightaway and returns the projectDropDownList object */


export function removeDropDownListFromTaskForm(){

    //this should remove all options from select in task form
    while (createDropDownList.projectDropDownList.firstChild){
        createDropDownList.projectDropDownList.removeChild(createDropDownList.projectDropDownList.firstChild);
    }

    //this should remove dropDownList from form
    if (inputDiv.contains(createDropDownList.projectDropDownList)){
        inputDiv.removeChild(createDropDownList.projectDropDownList);
    }
     
}

/* Takes project titles and recreates drop down list depending what projects are present */
export function repopulateDropDownList(){   
    
    /* hoping this will work almost like a refresh */

    if (inputDiv.contains(createDropDownList.projectDropDownList)){
        removeDropDownListFromTaskForm();
        }
    
    
        inputDiv.appendChild(createDropDownList.projectDropDownList);

        projectList.forEach((project, index) => {
            let newProjectOption = document.createElement('option');
            newProjectOption.setAttribute('value', `${project.title}`);
            newProjectOption.setAttribute('id', `${index}`);
            newProjectOption.innerText = `${project.title}`;
            createDropDownList.projectDropDownList.appendChild(newProjectOption);
        })

        showTaskModal();
    
}

export function expandProject(){

    expandButtonArray.forEach((button, index) => button.addEventListener('click', (e) =>{
        if(e.target == expandButtonArray[index]){

            let project = document.createElement('div');
            main.appendChild(project);

            let title;
            createElement(title, 'h1', project).innerText = projectList[index].title
            /* wanted to be able to do innertext part inside createElement */
            

            let projectTitle = document.createElement('h1');
            project.appendChild(projectTitle);
            projectTitle.innerText = projectList[index].title;

            let projectDescription = document.createElement('h2');
            project.appendChild(projectDescription);
            projectDescription.innerText = projectList[index].description;

            projectList[index].projectArray.forEach((task) =>{
                let newTask = document.createElement('li'); 
                project.appendChild(newTask);
                newTask.innerText = `${task.title} ${task.description} ${task.dueDate}`;
                /* new spans for each? or divs? include key not just value? */
        
               checkTaskPriority(task, newTask);
                
            })

            /* needs to create new elements for each property of project,
            and then all of it's tasks,
            probably best to make a large div with a class of main card or something
            change the default class of main/ add to the main class so that when its main project expands for exmaple
            it's view styles have changed*/

        }
    }, {once: true})) 
}

function createElement(name, element, destination){

    name = document.createElement(`${element}`);
    destination.appendChild(name);
    return name
    
}
/* time saver! not quite, unable to pass parameter in to propety of projectlist item


/* REMEMBER TO REMOVE THIS */
window.dropDownList = createDropDownList.projectDropDownList;
window.inputDiv = inputDiv;


       
    


