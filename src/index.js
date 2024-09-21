import "./style.css";
import { addEventOnProjectList } from "./script/viewProject";
import { addProjectBtn } from "./script/createProject";
import { displayCard } from "./script/viewProject";

function renderCardNotes() {
  addProjectBtn();
  // initilized to have eventListener
  addEventOnProjectList();
  // initial default display card
  displayCard(0);
}

// default project
renderCardNotes();
