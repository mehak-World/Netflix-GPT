import React from 'react'
import { useMainMovie } from '../hooks/useMainMovie'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    useMainMovie();
   const mainMovie =  useSelector((store) => store.movies.mainMovie);
  return (
    <VideoBackground movie = {mainMovie}/>
  )
}

export default MainContainer
