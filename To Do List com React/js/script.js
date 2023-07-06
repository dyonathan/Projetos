const doneBtn = document.querySelector(".finish-todo");
const todoInput = document.querySelector("#todo-input");
const searchInput = document.querySelector("#search-input");
const filterSelect = document.querySelector("#filterSelect");

doneBtn.addEventListener('click', function() {
    console.log("funfa")
});

const saveTodo = (text) => {
    /* Cria a div o titulo e coloca no todo */
    const todo = document.createElement("div");
    todo.classList.add("todo");
    const todoTitle = document.createElement("p");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle); 

    /* Cria o botão de completar */
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = 'class="button"';
    todo.appendChild(doneBtn);

    /* Cria o botão de excluir */
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<class="button"></class>';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);

    //Limpa o campo para digitar outra tarefa
    todoInput.value = "";

    //Marca automáticamente o campo de digitar outra tarefa
    todoInput.focus();
    
};


