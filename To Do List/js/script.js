let tarefa = document.getElementById('tarefa')
let res = document.getElementById('res')
let tarefas = []


function adicionar() {
    
    res.innerHTML = ''    
    tarefas.push(tarefa.value)
    res.innerHTML += tarefas

}


