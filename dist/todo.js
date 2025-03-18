// 1. add function
// 2. remove/delete function
// 3. tick/done function

let inputTodo = document.querySelector("#input-todo").value;
let addTodoBtn = document.querySelector("#add-todo-btn");
let todoText = document.querySelector("#todo")

addTodoBtn.addEventListener("click",() =>{
    todoText = inputTodo
    if(inputTodo){
        todo.innerHTML = `${inputTodo}`
    }
})