/* CLASS FOR TO DO LIST */

/* Each new to do list task/item will be an instance of a list item class

-- Each item will include a TITLE, DESCRIPTION, DUEDATE, PRIORITY. 

-- There should be an option to create different lists/projects.

-- User should be able to view all lists/projects at one as well as seperately. THIS WILL BE IN A DIFFERENT FILE FOR DOM MANIPULATION.

-- User should be able to view details of each item as well as to edit them.*/

/* const projectList = (() => { */

    const projectList = [];

    /* return { projectList }; */
/* })(); */

/* const projectListController = (() => {

    function addProjectToList(){

        projectList.p
    }

})(); */


class Project{

    constructor(title, description){
        this.title = title;
        this.description = description;
        this.projectArray = [];
    }       

    addTask(){

        let newTask = new Task
        this.projectArray.push(newTask);
         
    }

    addProject(){

        projectList.push(`${this.title} ${this.description} ${this.projectArray}`);
    }
    
}

class Task{


    constructor(title, description, dueDate, priority){
        
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        
    }
    /* method to push to array */

    /* method to remove from array */

}

/* const addBookToLibrary = () => {

    let newBook = new Book(`${bookTitle.value}`, `${bookAuthor.value}`, parseInt(pageNo.value))
    myLibrary.push(newBook);
    newBook.bookDisplay();

} 

This is the logic I used in library to add a new instance to the library array*/