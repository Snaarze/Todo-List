import "./style.css"
import { array } from "./script/data";
import { createProject } from "./script/createProject";
import { displayCard } from "./script/viewProject";


function renderCardNotes(){
    const liList = document.querySelectorAll(".li")
    


    liList.forEach(list => {
        list.addEventListener("click",()=> {
            const findIndexArray = array.findIndex(element => element.id === +list.getAttribute("data-index"))
            displayCard(findIndexArray, array)
        })
    })

    const addBtn = document.querySelector(".add");

    addBtn.addEventListener("click", () =>{
        createProject(array);
    })


    // default project
    displayCard(0,array)
}




// default project
renderCardNotes();
