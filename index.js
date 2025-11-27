// const textArea= document.querySelector("#textarea")
console.log("textArea")
const tArea=document.querySelector("textarea")
console.log(tArea)
const button =document.querySelector("button")
console.log(button)
const todo= document.querySelector(".toDo")
button.addEventListener("click", clickwork)
function clickwork(){
    const newDiv= document.createElement('div')
    newDiv.classList.add("elementAll")

    const newItem = document.createElement('p')
    newItem.classList.add("Item")
    
newItem.innerHTML=tArea.value;
console.log(newItem)
newDiv.appendChild(newItem)
//  console.log(newDiv)
// const child=document.querySelector(".container").appendChild(newDiv)
// child.append("newDiv")
todo.appendChild(newDiv)
}
