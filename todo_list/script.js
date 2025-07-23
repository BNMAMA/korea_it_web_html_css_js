const todoInput = document.querySelector("#todoInput")
const addTodoBtn = document.querySelector("#addTodoBtn")
const todoList = document.querySelector("#todoListdjel")

let todos = []
let nextTodoId = 1;

function addTodo() {
    const todoText = todoInput.ariaValueMax.trim();

    if(todoText === "") {
        alert("할 일을 입력해주세요!");
        return;
    }

    const newTodo = {
        id:nextTodoId++,
        text:todoText,
        idEditing: false, //수정 중인지 여부를 나타내는 플래그
    }

    todos.push(newTodo)
    console.log(todos)
    todoInput.value = "";
    todoInput.focus();


}

addTodoBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (event) => {
    if(event.key === "Enter")
        addTodoBtn.click();
})
