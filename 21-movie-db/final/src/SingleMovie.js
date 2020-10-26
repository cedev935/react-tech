import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
const SingleMovie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [isLoading, setLoading] = useState(true)
  const fetchMovie = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setMovie(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`)
  }, [id])

  if (isLoading) {
    return <div className='loading'></div>
  }
  console.log(movie)
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie
  return (
    <section className='single-movie'>
      <img src={poster} alt={title} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
