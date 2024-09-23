import { array } from "./data";
import { ProjectHandler } from "./viewProject";
 class List {
  constructor(title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  };

  createList(index){
    const createList = new List(prompt(),prompt(),prompt(),prompt(),prompt(),prompt());
    array[index].list.push(createList)
    ProjectHandler.displayCard(index)
  }
  
}

export const ListClass = new List();

