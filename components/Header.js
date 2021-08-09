function Header({ onNavigate, onSearch }) {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo__img" src="./images/logo.svg" />
        <h1 className="logo__title">Дневник</h1>
      </div>
      <div className="filter">
        <input type="text" className="input" placeholder="Поиск" onChange={e => onSearch(e.target.value)}/>
        <select className="input mood-select">
          <option></option>
          {MOODS.map((el) => <option key={el}>{el}</option>)}
        </select>
      </div>
      <nav className="main-nav">
        <a href="#" className="btn btn--primary" onClick={() => onNavigate(true)}>
          <img src="./images/grid_icon.png" alt="" />
          <span>Список</span>
        </a>
        <a href="#" className="btn" onClick={() => onNavigate(false)}>
          <img src="./images/pen_icon.svg" alt="" />
          <span>Запись</span>
        </a>
      </nav>
    </header>
  )
}