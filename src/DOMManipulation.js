

const content = document.getElementById('content'); //for some reason this is not working, however, when copied and pasted into the console creates a button fine!
//saying can't appenchild on a null value

export function onLoad(){

    const addProjectButton = document.createElement('button');
    addProjectButton.innerText = "Create Project";
    content.appendChild(addProjectButton);


}; 



function addProjectForm(){



}


function displayProjectArray(){

}