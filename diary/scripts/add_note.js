const gallery = [
  './images/full_note_img.png',
  './images/note_img.png',
  './images/chain.png',
  './images/pink_sky.png',
  './images/note_img.png',
  './images/forest.png'
]

const titleInput = document.querySelector('.add-form input')
const dateInput = document.querySelector('.add-form input[type=date]')
const textArea = document.querySelector('.add-form__textarea')
const moodSelect = document.querySelector('.add-form select')
const addBtn = document.querySelector('.add-form__btn')
const galleryNode = document.querySelector('.gallery')

let selectedImage = ''

gallery.forEach((imgUrl) => {
  galleryNode.appendChild(createGalleryImage(imgUrl))
})

let prevBtn;

function createGalleryImage(url) {
  const btn = createElement('button', 'image')
  const img = createElement('img', 'image__source')
  img.src = url
  img.alt = ''
  btn.appendChild(img)

  btn.onclick = function() {
    btn.classList.toggle('image--selected')
  
    selectedImage = url

    if(prevBtn && prevBtn !== btn) {
      prevBtn.classList.remove('image--selected')
    }

    prevBtn = btn
  }

  return btn
}


let lastId = notes[notes.length - 1].id

addBtn.onclick = function() {
  lastId++
  notes.push({
    id: lastId,
    title: titleInput.value,
    date: dateInput.value,
    content: textArea.value,
    mood: moodSelect.value,
    image: selectedImage
  })
  
  localStorage.setItem('notes', JSON.stringify(notes))
}



