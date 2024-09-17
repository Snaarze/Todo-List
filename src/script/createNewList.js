import { displayCard } from "./viewProject";
class list {
    constructor(title,description, dueDate, priority, notes , checklist ){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist
    }
}


export const createList = (array,index) =>{
    const createNewProject = new list(prompt("Title: "),prompt("Description: "),prompt("dueDate: "),prompt("Priority: "),prompt("Notes : "),prompt("Checklist: "))
    array[index].list.push(createNewProject)
    displayCard(index)
}