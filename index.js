const { useState } = React

function App() {
  const [ isNoteList, setIsNoteList ] = useState(true)
  const [ notes, setNotes ] = useState(defaultNotes)
  const [ filterSearch, serFilterSearch] = useState('')
  const [ filterMood, setFilterMood ] = useState('')

  function onNavigate(val) {
    setIsNoteList(val)
  }

  function addNote(newNote) {
    setNotes([...notes, newNote])
  }


  const className = 'container' + (isNoteList ? '' : ' add-note')
  
  return (
    <div className={className}>
      <Header
        onNavigate={onNavigate}
        onSearch={serFilterSearch}
      />
      {isNoteList ? <NoteList notes={notes} filterSearch={filterSearch}/> : <AddNote addNote={addNote} />}
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector('#root'))