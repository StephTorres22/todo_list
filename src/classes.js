import './style.css'
import { projectList, removeProjectButtonArray, newTaskButtonArray } from './index'
import * as domModule from './DOMManipulation';


export class Project{

    constructor(title, description, index){
        this.title = title;
        this.description = description;
        this.projectArray = [];
    

    }     
    
    displayProjectData(){

        /* Creates new card for each new project */

        console.log(`${this.title}, ${this.description}`);
        let newProject = document.createElement('div');
        
        domModule.sideBar.appendChild(newProject);
        newProject.classList.add('sideBarCard');
        
        let pTitle = document.createElement('h4');
        newProject.appendChild(pTitle);
        pTitle.innerText = `${this.title}`;

        let pDescription = document.createElement('p');
        newProject.appendChild(pDescription);
        pDescription.innerText = `${this.description}`;

        let pArray = document.createElement('div');
        newProject.appendChild(pArray);

        
        //console.log(Array.from(document.querySelectorAll('.sideBarCard')))        
        /* This is removing all projects from the list! */
        let removeButton = document.createElement('button');
        
        
        newProject.appendChild(removeButton);
        removeButton.classList.add('removeProjectButton');
        removeButton.innerText = 'Remove Project';
        removeProjectButtonArray.push(removeButton);
        
       // removeButton.addEventListener('click', removeProjectFromProjectList);
        removeButton.addEventListener('click', () =>{
           domModule.sideBar.removeChild(newProject);
          // console.log(projectList);
        })

           

        let newTaskButton = document.createElement('button');
        newTaskButton.classList.add('newTaskButton');
        newProject.appendChild(newTaskButton);
        newTaskButton.innerText = 'Add Task';
        newTaskButtonArray.push(newTaskButton);
        newTaskButton.addEventListener('click', () => {
            domModule.removeDropDownListFromTaskForm();
            domModule.showTaskModal();
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

    removeProjectOptionFromDropDownSelection(){

        
    }
 

    findProjectIndex(){

        let index = projectList.map((project) => project.title).indexOf(`${this.title}`);
        //console.log(index);
        return index;
    }
    
    addProjectToStorage(){

        /* Adds project to local storage with title and description as key and array as value pair */

        localStorage.setItem(`${this.title}, ${this.description}`, `${this.projectArray}`);
    
    }

    removeProjectFromStorage(){

        localStorage.removeItem(`${this.title}, ${this.description}`);

    }



 

    





    
}

export class Task{


    constructor(title, description, dueDate, priority){
        
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        
    }
    /* method to push to array */

    /* method to remove from array */

   

}

window.Task = Task;
window.Project = Project;




