import { useState } from 'react'
import './App.css'
import ItemTarefa from './components/ItemTarefa'

function App() {
  const [texto, setTexto] = useState('')
  const [tarefas, setTarefas] = useState([])

  function adicionarTarefa(evento) {
    evento.preventDefault()

    const novaTarefa = texto.trim()

    if (novaTarefa === '') {
      return
    }

    setTarefas([
      ...tarefas,
      {
        id: Date.now(),
        texto: novaTarefa,
        concluida: false,
      },
    ])
    setTexto('')
  }

  function alternarConcluida(id) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa,
      ),
    )
  }

  function excluirTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
  }

  return (
    <main className="app">
      <header className="cabecalho">
        <h1>Minha Lista de Tarefas</h1>
        <p>Anote o que precisa estudar, entregar ou revisar.</p>
      </header>

      <form className="formulario" onSubmit={adicionarTarefa}>
        <label htmlFor="tarefa">Nova tarefa</label>
        <div className="campo">
          <input
            id="tarefa"
            type="text"
            value={texto}
            onChange={(evento) => setTexto(evento.target.value)}
            placeholder="Ex.: estudar para a prova de história"
          />
          <button type="submit">Adicionar</button>
        </div>
      </form>

      <section className="lista" aria-live="polite">
        <h2>Tarefas</h2>
        {tarefas.length === 0 ? (
          <p className="vazia">Sua lista está vazia. Adicione a primeira tarefa.</p>
        ) : (
          <ul>
            {tarefas.map((tarefa) => (
              <ItemTarefa
                key={tarefa.id}
                tarefa={tarefa}
                aoAlternarConclusao={alternarConcluida}
                aoExcluir={excluirTarefa}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
