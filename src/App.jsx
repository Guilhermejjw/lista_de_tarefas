import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'

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
    <div className="app">
      <Header />
      <Main
        texto={texto}
        tarefas={tarefas}
        onTextoChange={setTexto}
        onAdicionarTarefa={adicionarTarefa}
        onAlternarConcluida={alternarConcluida}
        onExcluirTarefa={excluirTarefa}
      />
      <Footer />
    </div>
  )
}

export default App
