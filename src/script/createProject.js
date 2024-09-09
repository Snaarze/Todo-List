
class  Project {
    constructor(id,projectName){
        this.id = id
        this.projectName = projectName;
        this.list = []
    }
}


export const createProject = (array) => {
    const currentIdProject = (array.length === 0 ) ? 0 : array[array.length -1].id + 1;
   
    const createNewProject = new Project(currentIdProject,prompt())
    array.push(createNewProject);
    appendProject(currentIdProject, array)
}


function appendProject(id,array){
    const listContainer = document.querySelector(".list-container");
    const getArrayName = array.findIndex(element => element.id === id)
    // create an li to append on the sidenav
    const createLi  = document.createElement("li");
    createLi.setAttribute("data-index", `${id}`);
    createLi.textContent = array[getArrayName].projectName ;
    listContainer.appendChild(createLi)
}


