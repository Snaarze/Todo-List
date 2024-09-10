import {array} from "./data"
import { createList } from "./createNewList";
let currentIdPrject = "";

 export const displayCard = (index) =>{
    const list = array[index].list.map((list) => list);
    const main = document.querySelector(".main-content")

    while(main.firstChild){
        main.firstChild.remove();
    }

   for(let i = 0 ; i < list.length ;i++){
      // create a div with class card dynamically
      const div = document.createElement("div")
      div.classList.add("card")
     
      const name = document.createElement("p")
      const notes = document.createElement("p")
      const dueDate = document.createElement("p")
      main.appendChild(div)
      div.appendChild(name)
      div.appendChild(notes)
      div.appendChild(dueDate)
      name.textContent = list[i].title
      notes.textContent = list[i].notes
      dueDate.textContent = list[i].dueDate
   }

   // create button that create list and append
   const createBtnList = document.createElement("button");
   createBtnList.textContent = "addListBtn";
   createBtnList.classList.add("addNotes")
   main.appendChild(createBtnList)
   createBtnList.addEventListener("click", ()=>{
        createList(array,index)
        console.log(list)
        console.log(array)
    })
}

export const addEventOnLi = () => {
    
    const listContainer = document.querySelectorAll(".list-container li")
    
    listContainer.forEach(element => {
        if(!element.hasEventListener){
            element.addEventListener("click", ()=>{
                const activeProject = element.getAttribute("data-index");
                currentIdPrject = activeProject;
                console.log("test " + currentIdPrject)
                const findIndexArray = array.findIndex(element => element.id === +activeProject)
                displayCard(findIndexArray);
                return currentIdPrject;
            })
        }
        // add event listener to new element added.
        element.hasEventListener = true;
    })
}

