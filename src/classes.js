export const projectList = [];


export class Project{

    constructor(title, description){
        this.title = title;
        this.description = description;
        this.projectArray = [];
    }     
    
    displayProjectData(){

        console.log(`${this.title}, ${this.description}`);

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


