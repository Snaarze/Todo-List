import "./style.css"
import { addEventOnProjectList } from "./script/viewProject";
import { addProjectBtn } from "./script/createProject";

function renderCardNotes(){
    addProjectBtn();
    // initilized to have eventListener
    addEventOnProjectList();
}

// default project
renderCardNotes();
