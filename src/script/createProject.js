class  Project {
    constructor(id,projectName){
        this.id = id
        this.projectName = projectName;
        this.list = []
    }
}


export const createProject = (array) => {
    let currentIdProject = (array.length === 0 ) ? 0 : array[array.length -1].id + 1;

    const createNewProject = new Project(currentIdProject,prompt())
    array.push(createNewProject);
    console.log(currentIdProject)
    console.log(array);
}


