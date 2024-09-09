import {array} from "./data"

 const displayCard = (index) =>{
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
        name.textContent = list[i].name
        notes.textContent = list[i].notes
        dueDate.textContent = list[i].dueDate
   }
}

export const addEventOnLi = () => {
    
    const listContainer = document.querySelectorAll(".list-container li")
    
    listContainer.forEach(element => {
        if(!element.hasEventListener){
            element.addEventListener("click", ()=>{
                const activeProject = element.getAttribute("data-index");
                console.log((element.getAttribute("data-index")) )
                const findIndexArray = array.findIndex(element => element.id === +activeProject)
                displayCard(findIndexArray);
            })
        }
        // add event listener to new element added.
        element.hasEventListener = true;
    })
}