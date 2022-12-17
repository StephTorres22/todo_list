
/* TODO: BRANCH NEWTASKBUTTON


-create function to check whether dropDownList exists/is present within the DOM 
before repopulating/recreating/reassigning it when addTaskSVG is clicked.

-Will have to create an array of options so that can repopulate select tag. 
    OR
    forEach Project, using project.title, create new option within select.
    will need to recreate select and add corresponding attributes to it.

This function should remove dropdownlist on sumbit.
Doing this so that only need one form for both add task methods.
??MIGHT NOT WORK THIS WAY??

-Using similar logic to remove button, 
    -on sumbitproject, new array for add task buttons created and updated
    -listener on newtask button to set id attribute of submit task to index of new task button set as const
    -nested if statement using e.target 
    const submitTaksButtonId =
    if (e.target == newTaskButtonArray[index]){
        addTaskModal.open() or whatever it is
        if (submitTaskButtonId == newTaskButtonArray[index]){
            projeclist[index].push(newTask)
        }
    } 
    Something like this to see if it works.

    Not too sure, might not be nested if statement, but each one set to the different clickListeners

-

*/

import { Project, Task } from './classes';
import * as domModule from './DOMManipulation';


const projectList = []

export const newTaskButtonArray = Array.from(document.querySelectorAll('.newTaskButton'));

export const removeProjectButtonArray = Array.from(document.querySelectorAll('.removeProjectButton'));

function addListenerToRemoveButton(){
    removeProjectButtonArray.forEach((button, index) => button.addEventListener('click', (e) => {
        if(e.target == removeProjectButtonArray[index]){
            projectList.splice(index, 1);
            removeProjectButtonArray.splice(index, 1);
            console.log(projectList, removeProjectButtonArray);
            addListenerToRemoveButton();
        }
        
        }));

}
/* Think this works, tests the target against the array of buttons, 
    only executes splice if they are the same!
    Only splices one element
    Has to be called again to reinstate listeners!
    Add to the submit button so listener is added straight to projects when created
     
 */



/* Project buttons and form listeners */

domModule.addProjectButton.addEventListener('click', () =>{
   
    domModule.showProjectModal();});

//stops submit button from refreshing the page after each submit
domModule.submitProjectButton.addEventListener('click', function(e){
    addProjectToList();
    addListenerToRemoveButton();
    e.preventDefault();/* this stops validation happening too. */
});
domModule.closeProjectModalButton.addEventListener('click', domModule.closeProjectModal)


/* Task form listeners */  

/* domModule.addTaskSVG.addEventListener('click', () => {
    
    domModule.showTaskModal();

}) */
domModule.submitTaskButton.addEventListener('click', (e) => {

    addTask();
    domModule.closeTaskModal();
    e.preventDefault();

})
domModule.closeTaskModalButton.addEventListener('click', domModule.closeTaskModal);





function addProjectToList(){

    
    let newProject = new Project(`${domModule.projectTitle.value}`, `${domModule.projectDescription.value}`);
    projectList.push(newProject);
    newProject.displayProjectData();
    newProject.addProjectToDropDownSelection();

   // newProject.addProjectToStorage();
    domModule.closeProjectModal(); 
     
      
}

/* Uses value from drop selection in task form to find index of target project instance  */
function findProjectIndex(projectTitle){

    projectTitle = domModule.createDropDownList.projectDropDownList.value;
    let index = projectList.map((project) => project.title).indexOf(`${projectTitle}`);
    return index;
}


/* Uses index to push new task to desired project instance */
function addTask(index){

    index = findProjectIndex();

    let newTask = new Task(`${domModule.taskTitle.value}`, 
                        `${domModule.taskDescription.value}`);

    projectList[index].projectArray.push(newTask);

} 






    
        

        /* this removes everything after the project is created
     */
        
        
        //webdevsimpliefied global listener... try use that next time
    
        //need to include deleteCount for this to work properly!
        //this is what was missing in books.js for library project.

        

















/* function showLocalStorage(){
    
    for (let i = 0; i < localStorage.length; i++){
        main.append(localStorage.getItem(localStorage.key(i)))//doesn't work as localStorage isn't a node
    }
} */


// TODO: remember to delete this, this means you can test/ console
//what's happening!
window.projectList = projectList;
window.removeProjectButtonArray = removeProjectButtonArray;
window.newTaskButtonArray = newTaskButtonArray;



export {projectList}


