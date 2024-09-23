import { ProjectHandler } from "./viewProject";
import { array } from "./data";

export const getSelectedList = (element) => {
  const activeProject = element.parentElement.parentElement.getAttribute("data-index");
  return  array.findIndex((element) => element.id === +activeProject )
  }


// delete the row of the edit
export const editBtn = (array) => {
  const btnEdit = document.querySelectorAll(".projectEditBtn");
  
  btnEdit.forEach(element => {
    element.addEventListener("click", ()=>{
      const newProjectName = prompt();
      // if the prompt is empty return
      if (!newProjectName) {
        // changes nothng
        return;
      }
      // change the projectName of the array with the vavlue of prompt
      const currentList = element.parentElement.previousSibling.firstChild
      const changeName = (array[getSelectedList(element)].projectName = newProjectName);
       currentList.textContent = changeName;
      console.log(array)
    })
  })
};

// delete the row of the list
export const deleteBtn = (array) => {
  const btnDelete = document.querySelectorAll(".projectDeleteBtn")

  btnDelete.forEach(btn =>{
      btn.addEventListener("click", ()=>{
        const main = document.querySelector(".main-content");
    const deleteModal = document.querySelector(".deleteModal");
    const yesBtn = document.querySelector(".yesBtn");
    const noBtn = document.querySelector(".noBtn");
    // set the modal display to block when button is clicked
    deleteModal.style.display = "flex";
    yesBtn.addEventListener("click", () => {
      // set the modal display to none
      deleteModal.style.display = "none";
      // remove the selected list
      createLi.remove();
      // remoev the one id depends on the data index of the list
      array.splice(id, 1);
      // display the previous card
      if (array.length - 1 < 0) {
        while (main.firstChild) {
          main.firstChild.remove();
        }
        return;
      }
      ProjectHandler.displayCard(array.length - 1);
    });

    noBtn.addEventListener("click", () => {
      // set the modal display to none
      deleteModal.style.display = "none";
      return;
    });
      })
  })
};
