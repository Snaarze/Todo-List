import { displayCard } from "./viewProject";

// delete the row of the edit
export const editBtn = (id, content, array) => {
  return function () {
    const newProjectName = prompt();
    // if the prompt is empty return
    if (!newProjectName) {
      // changes nothng
      return;
    }
    // change the projectName of the array with the vavlue of prompt
    const changeName = (array[id].projectName = newProjectName);
    content.textContent = changeName;
  };
};

// delete the row of the list
export const deleteBtn = (id, createLi, array) => {
  return function () {
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
      displayCard(array.length - 1);
    });

    noBtn.addEventListener("click", () => {
      // set the modal display to none
      deleteModal.style.display = "none";
      return;
    });
  };
};
