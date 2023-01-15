import './style.css'
import { projectList, removeProjectButtonArray, newTaskButtonArray, changeTaskSubmitID, taskListDivArray, expandButtonArray, getRadioGroupValue } from './index'
import * as domModule from './DOMManipulation';


/* add a time created property to both project and task, will need get/set time functionality
this will then be displayed when project is displayed in main */

export class Project{

    constructor(title, description, dateCreated){
        this.title = title;
        this.description = description;
        this.dateCreated = dateCreated;
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

        let newTaskButton = document.createElement('button');
        newTaskButton.setAttribute('type', 'button');
        newTaskButton.setAttribute('data-tool-tip', 'Add a task to this project');
        
        let newTaskButtonImage = document.createElement('img');
        newTaskButtonImage.setAttribute('src', './assets/note-plus-outline.svg');
        newTaskButtonImage.classList.add('newTaskButton');
        buttonDiv.appendChild(newTaskButton);
        newTaskButton.appendChild(newTaskButtonImage);
        
        newTaskButtonArray.push(newTaskButtonImage);
        newTaskButtonImage.addEventListener('click', () => {
            if(domModule.inputDiv.contains(domModule.createDropDownList.projectDropDownList)){
                domModule.removeDropDownListFromTaskForm();

            }
            
            domModule.showTaskModal();
        })   

        let expandButton = document.createElement('button');
        expandButton.setAttribute('type', 'button');
        let expandButtonImage = document.createElement('img')
        expandButtonImage.setAttribute('src', './assets/arrow-expand.svg');
        expandButton.appendChild(expandButtonImage);
        expandButton.setAttribute('data-tool-tip', 'Expand project');
        buttonDiv.appendChild(expandButton);
        expandButtonImage.classList.add('expandButton');
        expandButtonArray.push(expandButtonImage);

        let removeButton = document.createElement('button');
        removeButton.setAttribute('type', 'button');
        removeButton.setAttribute('data-tool-tip', 'Delete Project');
        let removeButtonImage = document.createElement('img');
        removeButtonImage.setAttribute('src', './assets/delete-sweep-outline.svg');
        removeButton.appendChild(removeButtonImage);
        buttonDiv.appendChild(removeButton);
        removeButtonImage.classList.add('removeProjectButton');
        removeProjectButtonArray.push(removeButtonImage);
        removeButtonImage.addEventListener('click', () =>{
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
    
 

    

    get projectID(){

        return `${this.title}` + `${this.findProjectIndex()}`

    }
    
}


export class Task{


    constructor(title, description, priority, dueDate, dateCreated){
        
        this.title = title;
        this.description = description;        
        this.priority = priority;
        this.dueDate = dueDate;        
        this.dateCreated = dateCreated
    }


  
}

/* REMEMBER TO REMOVE THESE */

window.Task = Task;
window.Project = Project;




