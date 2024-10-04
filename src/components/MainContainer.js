import React from 'react';
import { useMainMovie } from '../hooks/useMainMovie';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';

const MainContainer = () => {
    useMainMovie();

    const mainMovie = useSelector((store) => store.movies.mainMovie);
    const movies = useSelector((store) => store.movies.nowPlayingMovies);

    // Add safety checks
    if (!movies || !Array.isArray(movies) || movies.length < 2) {
        console.error("Movies array is null, undefined, or doesn't have enough elements.");
        return null; // Returning null will render nothing if the data isn't ready
    }

    const { original_title, overview } = movies[1]; // Now safe to access

    return (
        <>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movie={mainMovie} />
        </>
    );
}

export default MainContainer;
