import React from 'react'
import { IMG_CDN } from '../utils/constants'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movie/" + movie.id, {state: movie} )
  }


  return (
    <div className="w-36 pr-4 cursor-pointer">
      {/* <Link 
        to={{
          pathname: "/movie/" + movie.id ,
          state: { movie} // Pass the movie object as state
        }} 
      > */}
        <img src={IMG_CDN + movie.poster_path} className="w-full h-full object-cover" onClick = {handleClick}/>
      {/* </Link> */}
    </div>
  )
}

export default MovieCard
