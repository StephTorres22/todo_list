import { addProject } from './index';
import './style.css';


export const sideBar = document.querySelector('.sideBar');
const addProjectButton = document.getElementById('addProject');
const addProjectModal = document.getElementById('projectFormModal');
const submitProjectButton = document.getElementById('submitProjectButton');
export const projectTitle = document.getElementById('projectTitle');
export const projectDescription = document.getElementById('description');


addProjectButton.addEventListener('click', showProjectModal);
 



function showProjectModal(){

    addProjectModal.showModal();

}


       
    


