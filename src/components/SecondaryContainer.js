import React from 'react'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { usePopularMovies } from '../hooks/usePopularMovies'

const SecondaryContainer = () => {
  useNowPlayingMovies()
  usePopularMovies()
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)
  const popularMovies = useSelector((store) => store.movies.popularMovies)
  
  return (
    <div className = "w-screen">
        <MovieList movies= {nowPlayingMovies} title = "Now Playing" />
        <MovieList movies= {popularMovies} title = "Popular" />
        <MovieList movies= {nowPlayingMovies} title = "Top Rated" />
    </div>
  )
}

export default SecondaryContainer
