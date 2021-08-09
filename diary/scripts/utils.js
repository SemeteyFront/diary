function parseDate(date, type) {
  const monthList = [
    'Января', 'Февраля',
    'Марта', 'Апреля', 'Мая',
    'Июня', 'Июля', 'Августа',
    'Сентября', 'Октября', 'Ноября',
    'Декабря'
  ]
  if(type === 'short') {
    return `${date.getDate()} ${monthList[date.getMonth()].slice(0, 3)}`
  }
  if(type === 'long') {
    return `${date.getDate()} ${monthList[date.getMonth()]} ${date.getFullYear()} года`
  }
}


function createElement(tagType, className, textContent) {
  const tag = document.createElement(tagType)
  if(className) {
    tag.classList.add(className)
  }
  if(textContent) {
    tag.textContent = textContent
  }
  return tag
}