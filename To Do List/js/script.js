// Seleção de elementos
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit-btn")

//Cria a variavél que vai salvar a tarefa atual que vai ser subistituida na edição
let oldInputValue;

// Funções 
//Text fala que está esperando um texto no caso o título
const saveTodo = (text) => {

    //aqui dentro será criado o template que usa na listagem das taredas com os botões e tudo o a classe da div todo dentro do todo-list

    //Cria a div geral dentro do todo
    const todo = document.createElement("div");
    //Cria a class todo na div 
    todo.classList.add("todo");

    //Cria o titulo da div o h3 dentro da div
    const todoTitle = document.createElement("h3");
    //Inseri o texto dentro do h3 com o text que joga no Text la do começo e manda para o saveTodo la do evento
    todoTitle.innerText = text;
    //Coloca o texto digitado no h3 dentro do todo
    todo.appendChild(todoTitle);

    //Criando os botões

    //Botão de terminado
    const doneBtn = document.createElement("button");
    //Coloca uma class no botão 
    doneBtn.classList.add("finish-todo");
    //Coloca o icone
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    //Agora que o botão está pronto só colocar ele no todo
    todo.appendChild(doneBtn);

    //Botão de editar
    const editBtn = document.createElement("button");
    //Coloca uma class no botão 
    editBtn.classList.add("edit-todo");
    //Coloca o icone
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    //Agora que o botão está pronto só colocar ele no todo
    todo.appendChild(editBtn);

    //Botão de cancelar
    const deleteBtn = document.createElement("button");
    //Coloca uma class no botão 
    deleteBtn.classList.add("remove-todo");
    //Coloca o icone
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    //Agora que o botão está pronto só colocar ele no todo
    todo.appendChild(deleteBtn);

    //Coloca o todo na lista geral(a primeira div com o id todo list)
    todoList.appendChild(todo);

    //limpa o campo quando da enter
    todoInput.value = "";
    //Marca altomatico o campo para digitar novamente
    todoInput.focus();

};

//Oculta os formularios que estão na tela e mostra os que estão escondidos quando clica em editar
const toggleForms = () => {
    //editar vem oculto por padrão, quando clicado em editar editform fica a vista e os outros 2 são escondidos
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
};

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        if (todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text;
        }
    });
};

// Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValeu = todoInput.value;

    if (inputValeu) {
        saveTodo(inputValeu);
    }
});

//Identifica qual elemento foi clicado e dependo da class do elemento ele faz alguma ação
document.addEventListener("click", (e) => {

    //Identifica o elemento que foi clicado
    const targetEl = e.target;
    //Seleciona o elemento pai div mais proximo
    const parentEl = targetEl.closest("div");

    //Como não tem um id para a tarefa para editala preciso especificar qual estou editando
    let todoTitle;

    //Requisito minimo para uma tarefa, ele tem que existir e ter um h3(texto)
    if (parentEl && parentEl.querySelector("h3")) {
        //Coloca no todoTitle o texto que está no h3 do parentEl
        todoTitle = parentEl.querySelector("h3").innerText;
    }


    //Ifs para escolher oque fazer com cada elemento 

    //Se o botão clicado tem a class finish-todo fazer tau coisa...
    if (targetEl.classList.contains("finish-todo")) {
        //Acrescenta a class done(feito) na divi mais proxima
        parentEl.classList.toggle("done");
    }

    //Remove a tarefa
    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove();
    }

    //Editar tarefas
    if (targetEl.classList.contains("edit-todo")) {
        //Esconde o formulario de adicionar e mostra o de editar e vice-versa
        toggleForms();

        //Recebe o valor que está no h3 no caso a tarefa
        editInput.value = todoTitle;
        //Salva a ultima tarefa 
        oldInputValue = todoTitle;
    }
});

//Botão de cancelar dentro do edit-form
//Essa função faz com que ao clicar em cancelar ele só troque os formularios de lugar igual quando clicou em editar
cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
});


//Botão de confirmar dentro do edit-form
//Essa função troca a tarefa atual pela tarefa editada
editForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    //Recebe o valor editado da na lista
    const editInputValue = editInput.value;

    //Checa se foi confirmado a troca
    if(editInputValue) {
        updateTodo(editInputValue);
    }

    toggleForms();
})