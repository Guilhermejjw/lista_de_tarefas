import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#inicio" aria-label="Minha Lista, início">
          <span className="brand-mark" aria-hidden="true">M</span>
          <span>MINHA<span className="brand-accent">LISTA</span></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#tarefas">Tarefas</a>
        </nav>
        <span className="header-status"><span aria-hidden="true" /> Organize seu dia</span>
      </div>
      <div className="header-copy" id="inicio">
        <p className="eyebrow">ESPAÇO DE FOCO</p>
        <h1>Minha Lista de Tarefas</h1>
        <p className="header-description">
          Anote o que precisa estudar, entregar ou revisar.
        </p>
      </div>
    </header>
  )
}

export default Header