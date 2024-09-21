import { array } from "./data";
import { addEventOnProjectList } from "./viewProject";
import { displayCard } from "./viewProject";
class Project {
  constructor(id, projectName) {
    this.id = id;
    this.projectName = projectName;
    this.list = [];
  }
}

const createProject = (array) => {
  const currentIdProject =
    array.length === 0 ? 0 : array[array.length - 1].id + 1;
  const createNewProject = new Project(currentIdProject, prompt());
  array.push(createNewProject);
  appendProject(currentIdProject, array);

  // always display the newly created Project
  const getCurrentIndex = array.findIndex(
    (item) => item.id === currentIdProject
  );
  displayCard(getCurrentIndex);

  addEventOnProjectList();
  return currentIdProject;
};

function appendProject(id, array) {
  const listContainer = document.querySelector(".list-container");
  const getArrayName = array.findIndex((element) => element.id === id);
  // create an li to append on the sidenav
  const createLi = document.createElement("li");
  const createSpan = document.createElement("span");
  createLi.style.display = "flex";
  createLi.setAttribute("data-index", `${id}`);
  createSpan.textContent = array[getArrayName].projectName;
  createLi.appendChild(createSpan);
  listContainer.appendChild(createLi);

  const createDiv = document.createElement("div");
  createDiv.style.display = "flex";
  createDiv.style.gap = "5px";
  createLi.appendChild(createDiv);
  const createEditBtn = document.createElement("button");
  createEditBtn.classList.add("projectEditBtn");
  createEditBtn.textContent = "Edit";
  const createDeleteBtn = document.createElement("button");
  createDeleteBtn.classList.add("projectDeleteBtn");
  createDeleteBtn.textContent = "Delete";

  createDiv.appendChild(createEditBtn);
  createDiv.appendChild(createDeleteBtn);
}

export const addProjectBtn = () => {
  const addbtn = document.querySelector(".add");
  addbtn.addEventListener("click", () => {
    createProject(array);
  });
};
