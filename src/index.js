import { Project, projectList } from './classes';
import { projectTitle, projectDescription } from './DOMManipulation';

export const addProject = () => {

    let newProject = new Project(`${projectTitle.value}`, `${projectDescription.value}`);
    projectList.push(newProject);
    newProject.displayProjectData();
}

