
import './style.css';
import './classes';
import { Project } from './classes';
import { projectList } from './index';


const sideBar = document.querySelector('.sideBar');
const addProjectButton = document.getElementById('addProject');
const addProjectModal = document.getElementById('projectFormModal');
const submitProjectButton = document.getElementById('submitProjectButton');
const projectTitle = document.getElementById('projectTitle');
const projectDescription = document.getElementById('description');



function showProjectModal(){

    addProjectModal.showModal();

}



export {addProjectButton, submitProjectButton, showProjectModal, sideBar, projectTitle, projectDescription}



       
    


