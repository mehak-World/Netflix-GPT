import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({image}) => {
  return (
    <div className = "w-36  pr-4">
      <img src = {IMG_CDN +  image} className="w-full h-full object-cover" />
    </div>
  )
}

export default MovieCard
