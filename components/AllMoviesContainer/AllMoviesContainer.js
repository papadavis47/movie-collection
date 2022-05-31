import useSWR from 'swr'
import Movie from '../Movie/Movie'

function AllMoviesContainer() {
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR('/api/getall', fetcher, {
    refreshInterval: 3000,
  })
  return (
    <div>
      {data?.map((movie) => {
        const { id, category, title, director, note } = movie
        return <Movie {...movie} />
      })}
    </div>
  )
}

export default AllMoviesContainer
