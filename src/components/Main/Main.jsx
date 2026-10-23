import ItemTarefa from '../ItemTarefa.jsx'
import './Main.css'

function Main({
  texto,
  tarefas,
  onTextoChange,
  onAdicionarTarefa,
  onAlternarConcluida,
  onExcluirTarefa,
}) {
  return (
    <main className="main" id="tarefas">
      <section className="task-panel" aria-labelledby="task-heading" aria-live="polite">
        <div className="section-heading">
          <div>
            <p className="section-kicker">SEU PAINEL</p>
            <h2 id="task-heading">Tarefas</h2>
          </div>
          <p className="task-count">
            {tarefas.length} {tarefas.length === 1 ? 'item' : 'itens'}
          </p>
        </div>

        <form className="task-form" onSubmit={onAdicionarTarefa}>
          <label htmlFor="tarefa">Nova tarefa</label>
          <div className="form-controls">
            <input
              id="tarefa"
              type="text"
              value={texto}
              onChange={(evento) => onTextoChange(evento.target.value)}
              placeholder="Ex.: estudar para a prova de história"
            />
            <button type="submit">Adicionar tarefa <span aria-hidden="true">+</span></button>
          </div>
        </form>

        {tarefas.length === 0 ? (
          <p className="empty-state">Sua lista está vazia. Adicione a primeira tarefa.</p>
        ) : (
          <ul className="task-list">
            {tarefas.map((tarefa) => (
              <ItemTarefa
                key={tarefa.id}
                tarefa={tarefa}
                aoAlternarConclusao={onAlternarConcluida}
                aoExcluir={onExcluirTarefa}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default Main