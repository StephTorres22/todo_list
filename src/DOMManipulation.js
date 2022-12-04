
import './style.css';
import './classes';
import { Project } from './classes';
import { projectList } from './index';

const projectForm = document.getElementById('projectForm');
const main = document.querySelector('.main');
const sideBar = document.querySelector('.sideBar');
const addProjectButton = document.getElementById('addProject');
const addProjectModal = document.getElementById('projectFormModal');
const submitProjectButton = document.getElementById('submitProjectButton');
const projectTitle = document.getElementById('projectTitle');
const projectDescription = document.getElementById('description');



function showProjectModal(){

    addProjectModal.showModal();

}

function closeProjectModal(){

    addProjectModal.close();
    projectForm.reset();
}



export {addProjectButton, submitProjectButton, showProjectModal, sideBar, projectTitle, projectDescription, closeProjectModal}



       
    


