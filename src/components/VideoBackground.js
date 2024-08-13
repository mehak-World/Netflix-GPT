import React from 'react'

const VideoBackground = ({movie}) => {
    if(!movie){
        return
    }
  return (
   
      <div>
      <iframe 
      className="w-full aspect-video"
      src={"https://www.youtube.com/embed/" + movie.key + "?si=iGC59oMtd03Akceh?&autoplay=1&mute=1" }
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen></iframe>
    </div>
    
  )
}

export default VideoBackground
