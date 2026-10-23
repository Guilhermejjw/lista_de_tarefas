function ItemTarefa({ tarefa, aoAlternarConclusao, aoExcluir }) {
  return (
    <li className={tarefa.concluida ? 'concluida' : ''}>
      <label className="item">
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() => aoAlternarConclusao(tarefa.id)}
        />
        <span>{tarefa.texto}</span>
      </label>
      <button
        type="button"
        className="excluir"
        onClick={() => aoExcluir(tarefa.id)}
      >
        Excluir
      </button>
    </li>
  )
}

export default ItemTarefa