import { array } from "./data";
import { ProjectHandler } from "./viewProject";


class Project {
  constructor(id, projectName) {
    this.id = id;
    this.projectName = projectName;
    this.list = [];
  }

  getArrayIndex(id) {
    return array.findIndex((element) => element.id === id);
  }

  getArrayName(currentId){
    return array.findIndex((item) => item.id === currentId);
  }

  createProject(array) {
    const currentIdProject =
    array.length === 0 ? 0 : array[array.length - 1].id + 1;
    const createNewProject = new Project(currentIdProject, prompt());
    array.push(createNewProject);
    ProjectHandler.renderedList();

    // always display the newly created Project
    const getCurrentIndex = this.getArrayName(currentIdProject);
    ProjectHandler.displayCard(getCurrentIndex);
    ProjectHandler.addEventOnProjectList();
  }

  addProjectBtn(){
    const addbtn = document.querySelector(".add");
    addbtn.addEventListener("click", () => {
      const createNewProject = new Project;
      createNewProject.createProject(array);
    }); 
  };
}


export const ProjectClass = new Project()

 






