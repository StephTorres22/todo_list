import './style.css'
import { projectList, removeProjectButtonArray, newTaskButtonArray, changeTaskSubmitID, taskListDivArray, expandButtonArray, getRadioGroupValue } from './index'
import * as domModule from './DOMManipulation';


export class Project{

    constructor(title, description, index){
        this.title = title;
        this.description = description;
        this.projectArray = [];
    

    }     
    
    displayProjectData(){

        /* Creates new card for each new project */
        let newProject = document.createElement('div');
        
        domModule.sideBar.appendChild(newProject);
        newProject.classList.add('sideBarCard');
        
        let pTitle = document.createElement('h2');
        newProject.appendChild(pTitle);
        pTitle.innerText = `${this.title}`;

        let pDescription = document.createElement('h3');
        newProject.appendChild(pDescription);
        pDescription.innerText = `${this.description}`;               

        let pArray = document.createElement('div');
        pArray.setAttribute('id', `${this.projectID}`);
        pArray.classList.add('projectArrayDiv');
        newProject.appendChild(pArray);
        taskListDivArray.push(pArray);

        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('sideCardButtonDiv');
        newProject.appendChild(buttonDiv);

        let newTaskButton = document.createElement('img');
        newTaskButton.setAttribute('src', './assets/note-plus-outline.svg');
        newTaskButton.classList.add('newTaskButton');
        buttonDiv.appendChild(newTaskButton);
        
        newTaskButton.innerText = 'Add Task';
        newTaskButtonArray.push(newTaskButton);
        newTaskButton.addEventListener('click', () => {
            if(domModule.inputDiv.contains(domModule.createDropDownList.projectDropDownList)){
                domModule.removeDropDownListFromTaskForm();

            }
            
            domModule.showTaskModal();
        })   

        let expandButton = document.createElement('img');
        expandButton.setAttribute('src', './assets/arrow-expand.svg');
        buttonDiv.appendChild(expandButton);
        expandButton.classList.add('expandButton');
        expandButtonArray.push(expandButton);

        let removeButton = document.createElement('img');
        removeButton.setAttribute('src', './assets/delete-sweep-outline.svg')
        buttonDiv.appendChild(removeButton);
        removeButton.classList.add('removeProjectButton');
        removeProjectButtonArray.push(removeButton);
        removeButton.addEventListener('click', () =>{
           domModule.sideBar.removeChild(newProject);
          
        })
    }


    /* Adds new selection option to task form for each new project instance  on creation*/
    addProjectToDropDownSelection(){

        let newProjectOption = document.createElement('option');
        newProjectOption.setAttribute('value', `${this.title}`);
        newProjectOption.setAttribute('id', `${this.findProjectIndex()}`);
        domModule.createDropDownList.projectDropDownList.appendChild(newProjectOption);
        newProjectOption.innerText = `${this.title}`;

    }

    findProjectIndex(){

        let index = projectList.map((project) => project.title).indexOf(`${this.title}`);
        
        return index;
    }
    
    addProjectToStorage(){

        /* Adds project to local storage with title and description as key and array as value pair */

        localStorage.setItem(`${this.title}, ${this.description}`, `${this.projectArray}`);
    
    }

    removeProjectFromStorage(){

        localStorage.removeItem(`${this.title}, ${this.description}`);

    }

    get projectID(){

        return `${this.title}` + `${this.findProjectIndex()}`

    }

    /* set projectID(newID){

        this.projectID = newID;
    }
 */    
}


export class Task{


    constructor(title, description, priority, dueDate){
        
        this.title = title;
        this.description = description;        
        this.priority = priority;
        this.dueDate = dueDate;        
    }

  
}

/* REMEMBER TO REMOVE THESE */

window.Task = Task;
window.Project = Project;




