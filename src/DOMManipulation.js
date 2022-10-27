import { Project, Task, projectList} from './classes'


const content = document.getElementById('content')
const projectFormModal = document.createElement('dialog');
content.appendChild(projectFormModal);



export function onLoad(){


    displayProjectForm()


    const addProjectButton = document.createElement('button');
    addProjectButton.innerText = "Create Project";
    content.appendChild(addProjectButton);
    
    addProjectButton.addEventListener('click', () => {
        projectFormModal.showModal();
    });


}; 



function displayProjectForm(){

    const projectForm = document.createElement('form');
    const formLegend = document.createElement('legend');
    const projectName = document.createElement('input');
    const projectDesscription = document.createElement('input');
    const projectSumbitButton = document.createElement('button');
    const resetFromButton = document.createElement('button');
    const cancelProjectButton = document.createElement('button');


    projectFormModal.appendChild(projectForm);
    projectForm.appendChild(formLegend);
    formLegend.innerText = 'New Project';

    projectForm.appendChild(projectName);
    projectName.setAttribute('type', 'text');
    projectName.setAttribute('name', 'name');
    projectName.setAttribute('placeholder', 'Project Name');

    projectForm.appendChild(projectDesscription);
    projectDesscription.setAttribute('type', 'text');
    projectDesscription.setAttribute('name', 'productDescription');
    projectDesscription.setAttribute('placeholder', 'Project Description');



    projectForm.appendChild(projectSumbitButton);
    projectSumbitButton.innerText = 'Add Project';
        
    projectForm.appendChild(resetFromButton);
    resetFromButton.innerText = 'Reset';

    projectForm.appendChild(cancelProjectButton);
    cancelProjectButton.innerText = '&times';

}


function displayProjectArray(){

    projectList.forEach()

}