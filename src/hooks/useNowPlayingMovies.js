import {useEffect} from "react"
import { options } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";


const getData = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    const data = await response.json();
    return data;
}

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            const movieData = data.results;
            dispatch(addNowPlayingMovies(movieData));
        };
        fetchData();  
    }, [])
}

