let listaDeTarefas = []

function adicionarTarefa(tarefa){
    let tarefaExistente = listaDeTarefas.find(item => item.name === tarefa.name)

    if (!tarefaExistente) {
        tarefa.id = listaDeTarefas.length + 1
        listaDeTarefas.push(tarefa)
        console.log(`A Tarefa ${tarefa.name} foi adicionada a lista.`)
    } else {
        console.log(`Não foi possível adicionar, a tarefa ${tarefa.name} já existe na lista.`)
    }
}

function obterTarefaPorId(id){
    return listaDeTarefas.find(tarefa => tarefa.id === id)
}

function removerTarefa(nomeDaTarefa){
    const index = listaDeTarefas.findIndex(tarefa => tarefa.name === nomeDaTarefa)

    if (index !== -1) {
        listaDeTarefas.splice(index, 1)
        console.log(`A Tarefa ${nomeDaTarefa} foi removida da lista.`)
    } else {
        console.log(`A tarefa ${nomeDaTarefa} não foi encontrada na lista.`)
    }
}

function editarTarefa(tarefa) {
    tarefa.done = !tarefa.done
}

function mostrarTarefas(listaDeTarefas) {
    let tarefasNaoConcluidas = listaDeTarefas.filter(tarefa => !tarefa.done)
    let tarefasConcluidas = listaDeTarefas.filter(tarefa => tarefa.done)

    console.log("Tarefas Não Concluídas")
    console.log(tarefasNaoConcluidas)
    console.log("-------------------------------------")
    console.log("Tarefas Concluídas")
    console.log(tarefasConcluidas)
}

adicionarTarefa({ name: 'Fazer compras', done: false})
adicionarTarefa({ name: 'Dormir', done: false})
adicionarTarefa({ name: 'Comer', done: false})
adicionarTarefa({ name: 'Estudar', done: false})
adicionarTarefa({ name: 'Fazer compras', done: false})
adicionarTarefa({ name: 'Correr', done: false})

console.log(listaDeTarefas)

removerTarefa('Correr')
removerTarefa('Nadar')

const tarefaEncontrada = obterTarefaPorId(3)
console.log('Tarefa encontrada: ', tarefaEncontrada)

editarTarefa(listaDeTarefas[0])
editarTarefa(listaDeTarefas[2])

console.log()

mostrarTarefas(listaDeTarefas)