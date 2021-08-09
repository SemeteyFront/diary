function NoteList({ notes, filterSearch }) {
  const [ modal, setModal ] = React.useState(false)
  const [ selectedNote, setSelectNote ] = React.useState({})

  function selectNote(note) {
    setSelectNote(note)
    setModal(true)
  }

  const { title, content, image, mood, date } = selectedNote

  return (
    <React.Fragment>
      {modal 
      ? (
        <main className="modal">
          <article className="full-note">
            <header className="full-note__header">
              <h2 className="full-note__title"><strong>{mood}</strong>{title}</h2>
              <time className="full-note__date" dateTime="2021-08-21">{new Date(date).toLocaleDateString()}</time>
              <button className="modal__btn" onClick={() => setModal(false)}>
                <img src="./images/close_icon.svg" alt="close modal" />
              </button>
            </header>
            <img className="full-note__img" src={image} alt="night sky" />
            <div className="full-note__content">{content}</div>
          </article>
        </main>
        )
      : (
        <main  className="note-list">
          {notes
          .filter(el => el.title.includes(filterSearch))
          .map((el) => (
            <Note key={el.id} {...el} onClick={() => selectNote(el)}/>
          ))}
        </main>
      ) 
    }  
  </React.Fragment>
  )
}


