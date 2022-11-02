import { Project, Task, projectList} from './classes'
import './style.css';

const addProjectButton = document.getElementById('addProject');
const addProjectModal = document.getElementById('projectFormModal');


addProjectButton.addEventListener('click', addProject);

function addProject(){

    addProjectModal.showModal();

}