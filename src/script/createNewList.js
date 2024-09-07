
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


export const createProject = (array) =>{
    const createProject = new list(prompt(),prompt(),prompt(),prompt(),prompt(),prompt())
    array.push(createProject);
    console.log(array)
}