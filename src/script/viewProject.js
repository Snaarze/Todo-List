import { array } from "./data";
import { ListClass } from "./createNewList";
import { editBtn, deleteBtn, getSelectedList } from "./interactivity";


class ProjectManager{
  constructor(){}

  displayCard(index){
    const list = array[index].list;
    const main = document.querySelector(".main-content");
    // remove current cards
    this.removeElement(main);
    this.createCard(list, main)
    // create button that create list and append
    const createBtnList = document.createElement("button");
    createBtnList.textContent = "+";
    createBtnList.classList.add("addNotes");
    main.appendChild(createBtnList);
    const createList = (index) => ListClass.createList(index)
    createBtnList.addEventListener("click", createList)
  }


  createCard(currentArray, main){
    // create cards dynamically that depends on the array length
    for (let i = 0; i < currentArray.length; i++) {
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
      name.textContent = currentArray[i].title;
      notes.textContent = currentArray[i].notes;
      dueDate.textContent = currentArray[i].dueDate;
    }
  }

  removeElement(elementRemove){
    while (elementRemove.firstChild) {
      elementRemove.firstChild.remove();
    }
  } 

  renderedList(){
    const listContainer = document.querySelector(".list-container");
    // remove the all firstChild of the listContainer
    this.removeElement(listContainer);
    // create list to render
    this.createList(listContainer);
  }   

  createList(listContainer){
    for (let i = 0; i < array.length; i++) {
      // create list dynamically depending on the array length
      const createLi = document.createElement("li");
      createLi.classList.add("list")
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
    }
    // addEvent Listeners to delete Button and Edit Button
    deleteBtn(array)
    editBtn(array);
  }

  addEventOnProjectList(){
    // rendered all list
    this.renderedList();
    // select the span
    const listContainer = document.querySelectorAll(".list-container li span");
  
    // display the card content of the array
    listContainer.forEach((element) => {
      if (!element.hasEventListener) {
        element.addEventListener("click", () => {
          // get the data-index of the parant of the span
          this.displayCard(getSelectedList(element));
        });
      }
      // add event listener to new element added.
      element.hasEventListener = true;
    });
  };
}

 

export const ProjectHandler = new ProjectManager();