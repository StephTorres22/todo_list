import './style.css'
import { projectList } from './index'
import { sideBar, projectTitle, projectDescription } from './DOMManipulation';


export class Project{

    constructor(title, description){
        this.title = title;
        this.description = description;
        this.projectArray = [];
    }     
    
    displayProjectData(){

        console.log(`${this.title}, ${this.description}`);
        let newProject = document.createElement('div');
        sideBar.appendChild(newProject);
        newProject.classList.add('sideBarCard');
        let pTitle = document.createElement('h4');
        newProject.appendChild(pTitle);
        pTitle.innerText = `${this.title}`;

    }

    

    addProjectToStorage(){

        /* Adds project to local storage with title and description as key and array as value pair */

        localStorage.setItem(`${this.title}, ${this.description}`, `${this.projectArray}`);
    
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




