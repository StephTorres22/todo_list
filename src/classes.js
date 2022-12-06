import './style.css'
import { projectList } from './index'
import * as domModule from './DOMManipulation';


export class Project{

    constructor(title, description){
        this.title = title;
        this.description = description;
        this.projectArray = [];
    }     
    
    displayProjectData(){

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
        
        let removeButton = document.createElement('button');
        newProject.appendChild(removeButton);
        removeButton.innerText = 'Remove Project';
        removeButton.addEventListener('click', () => {
            domModule.sideBar.removeChild(newProject);
            projectList.splice(Project);
            this.removePorjectFromStorage();
        })

        let newTaskButton = document.createElement('button');
        newProject.appendChild(newTaskButton);
        newTaskButton.innerText = 'Add Task';
        newTaskButton.addEventListener('click', domModule.showTaskModal);


    }

    

    addProjectToStorage(){

        /* Adds project to local storage with title and description as key and array as value pair */

        localStorage.setItem(`${this.title}, ${this.description}`, `${this.projectArray}`);
    
    }

    removePorjectFromStorage(){

        localStorage.removeItem(`${this.title}, ${this.description}`);

    }


    addTaskToProject(){

        
        
        let newTask = new Task(`${domModule.taskTitle.value}`, 
                                `${domModule.taskDescription.value}`)

        this.projectArray.push(newTask);
        console.log(this.projectArray);

        


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




