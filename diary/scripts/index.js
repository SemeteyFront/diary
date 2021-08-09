const noteListNode = document.querySelector('.note-list')
const filterInput  = document.querySelector('.filter input')
const filterSelect = document.querySelector('.filter select')
const modalNode = document.querySelector('.modal')
const modalCloseBtn = modalNode.querySelector('.modal__btn')

const fullNoteTitle = modalNode.querySelector('.full-note__title')
const fullNoteDate = modalNode.querySelector('.full-note__date')
const fullNoteContent = modalNode.querySelector('.full-note__content')
const fullNoteImg = modalNode.querySelector('.full-note__img')

notes.forEach((noteItem) => {
  noteListNode.appendChild(createNote(noteItem))
})

modalCloseBtn.onclick = function() {
  noteListNode.hidden = false
  modalNode.hidden = true
}

filterInput.oninput = function() {
  noteListNode.innerHTML = ''
  const filteredNotes = notes.filter(filterCondition)
  filteredNotes.forEach((noteItem) => {
    noteListNode.appendChild(createNote(noteItem))
  })
}

filterSelect.onchange = function() {
  noteListNode.innerHTML = ''
  const filteredNotes = notes.filter(filterCondition)
  filteredNotes.forEach((noteItem) => {
    noteListNode.appendChild(createNote(noteItem))
  })
}

function filterCondition(note) {
  const hasInputValue = note.title.includes(filterInput.value)
  const isMoodEqual = (filterSelect.value) ? note.mood === filterSelect.value : true
  return hasInputValue && isMoodEqual
}

function createNote(noteItem) {
  const date = new Date(noteItem.date)

  const a = createElement('a')
  a.href = `#${noteItem.id}`  
  const article = createElement('article', 'note')
  if(noteItem.image) {
    article.style.backgroundImage = `url(${noteItem.image})`
  }
  const noteMood = createElement('p', 'note__mood', noteItem.mood)
  const noteContent = createElement('div', 'note__content')
  const h2 = createElement('h2', 'note__title', noteItem.title)
  const time = createElement('time', 'note__date', parseDate(date, 'short'))
  const noteCaption = createElement('p', 'note__caption', noteItem.content)

  article.appendChild(noteMood)
  noteContent.appendChild(h2)
  noteContent.appendChild(time)
  noteContent.appendChild(noteCaption)
  article.appendChild(noteContent)
  a.appendChild(article)

  a.onclick = function() {
    const strong = createElement('strong', '', noteItem.mood)
    const title = document.createTextNode(" " + noteItem.title)
    fullNoteTitle.innerHTML = ''
    fullNoteTitle.appendChild(strong)
    fullNoteTitle.appendChild(title)

    fullNoteDate.textContent = parseDate(date, 'long')
    fullNoteContent.textContent = noteItem.content
    if(noteItem.image) {
      fullNoteImg.src = noteItem.image
    }

    noteListNode.hidden = true
    modalNode.hidden = false
  }

  return a
}