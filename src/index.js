import "./style.css";
import { ProjectClass } from "./script/createProject";
import { ProjectHandler } from "./script/viewProject";


function renderCardNotes() {
  ProjectClass.addProjectBtn();
  // initilized to have eventListener
  ProjectHandler.addEventOnProjectList();
  // initial default display card
 
}

// default project
renderCardNotes();
