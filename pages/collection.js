import useSWR from 'swr'
import Title from '../components/Title'

const Collection = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR('/api/getall', fetcher, {
    refreshInterval: 3000,
  })
  return (
    <>
      <Title text="my collection" />
      <div>
        {data &&
          data.map((movie) => {
            const { id, category, title, director, note } = movie
            return (
              <div key={id}>
                <h2>{title}</h2>
                <h3>{director}</h3>
                <p>{note}</p>
                <span>{category}</span>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Collection
