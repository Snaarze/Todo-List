import "./style.css"
import { addEventOnLi } from "./script/viewProject";
import { addProjectBtn } from "./script/createProject";

function renderCardNotes(){
    addProjectBtn();
    addEventOnLi();
}




// default project
renderCardNotes();
