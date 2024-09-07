export const displayCard = (index, arrayList) =>{
    const list = arrayList[index].list.map((list) => list);
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