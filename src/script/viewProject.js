import { array } from "./data";
import { createList } from "./createNewList";
import { editBtn, deleteBtn } from "./interactivity";

export const displayCard = (index) => {
  const list = array[index].list;

  const main = document.querySelector(".main-content");

  while (main.firstChild) {
    main.firstChild.remove();
  }

  for (let i = 0; i < list.length; i++) {
    // create a div with class card dynamically
    const div = document.createElement("div");
    div.classList.add("card");

    const name = document.createElement("p");
    const notes = document.createElement("p");
    const dueDate = document.createElement("p");
    //   append newly created element
    main.appendChild(div);
    div.appendChild(name);
    div.appendChild(notes);
    div.appendChild(dueDate);
    name.textContent = list[i].title;
    notes.textContent = list[i].notes;
    dueDate.textContent = list[i].dueDate;
  }

  // create button that create list and append
  const createBtnList = document.createElement("button");
  createBtnList.textContent = "+";
  createBtnList.classList.add("addNotes");
  main.appendChild(createBtnList);
  createBtnList.addEventListener("click", () => {
    createList(array, index);
  });
};

export const addEventOnProjectList = () => {
  // rendered all list
  renderedList();
  // select the span
  const listContainer = document.querySelectorAll(".list-container li span");

  // display the card content of the array
  listContainer.forEach((element) => {
    if (!element.hasEventListener) {
      element.addEventListener("click", () => {
        // get the data-index of the parant of the span
        const activeProject =
          element.parentElement.parentElement.getAttribute("data-index");
        //  the index of the selected element
        const findIndexArray = array.findIndex(
          (element) => element.id === +activeProject
        );
        displayCard(findIndexArray);
      });
    }
    // add event listener to new element added.
    element.hasEventListener = true;
  });
};

const renderedList = () => {
  const listContainer = document.querySelector(".list-container");
  // remove the all firstChild of the listContainer
  while (listContainer.firstChild) {
    listContainer.firstChild.remove();
  }

  for (let i = 0; i < array.length; i++) {
    // create list dynamically depending on the array length
    const createLi = document.createElement("li");
    listContainer.appendChild(createLi);
    createLi.style.display = "flex";
    createLi.style.justifyContent = "space-around";

    // create container div
    const spanContainer = document.createElement("div");
    createLi.appendChild(spanContainer);
    spanContainer.style.width = "50%";

    // create span
    const createSpan = document.createElement("span");
    spanContainer.appendChild(createSpan);
    createSpan.textContent = array[i].projectName;

    // return all the list to assign the data-index of the array
    const getSelectedList = array.map((list) => list);
    // set data-index of the projectName, this prevent to get output of wrong id because of the same projectName which selects the first found index in the array
    createLi.setAttribute("data-index", getSelectedList[i].id);

    // get the id of the list
    const getAttributeOfLi = createLi.getAttribute("data-index");

    // find the index of the array to set edit the current projectName
    const selectedProject = array.findIndex(
      (item) => item.id === +getAttributeOfLi
    );

    // create a div
    const createDiv = document.createElement("div");
    createDiv.style.width = "50%";
    createDiv.style.display = "flex";
    createLi.appendChild(createDiv);

    // create button of yes and no
    const createEditBtn = document.createElement("button");
    createEditBtn.classList.add("projectEditBtn");
    createEditBtn.textContent = "Edit";
    const createDeleteBtn = document.createElement("button");
    createDeleteBtn.classList.add("projectDeleteBtn");
    createDeleteBtn.textContent = "Delete";

    // append two buttons to div
    createDiv.appendChild(createEditBtn);
    createDiv.appendChild(createDeleteBtn);
    // add event listener to edit and delete projects
    createEditBtn.addEventListener(
      "click",
      editBtn(selectedProject, createSpan, array)
    );
    createDeleteBtn.addEventListener(
      "click",
      deleteBtn(selectedProject, createLi, array)
    );
  }
};
