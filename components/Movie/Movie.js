function Movie({ id, category, title, director, note }) {
  return (
    <div key={id}>
      <h2>{title}</h2>
      <h3>{director}</h3>
      <p>{note}</p>
      <span>{category}</span>
    </div>
  )
}

export default Movie
