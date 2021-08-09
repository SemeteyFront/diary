function Note({ mood, title, date, content, image, onClick }) {
  return(
    <a onClick={onClick}>
      <article className="note" style={{backgroundImage: `url(${image})`}}>
        <p className="note__mood">{mood}</p>
        <div className="note__content">
          <h2 className="note__title">{title}</h2>
          <time className="note__date">{new Date(date).toLocaleDateString()}</time>
          <p className="note__caption">{content}</p>
        </div>
      </article>
    </a>
  )
}