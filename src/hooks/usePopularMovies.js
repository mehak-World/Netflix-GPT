
import {useEffect} from "react"
import { options } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";


const getData = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
    const data = await response.json();
    return data;
}

export const usePopularMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            const movieData = data.results;
            dispatch(addPopularMovies(movieData));
        };
        fetchData();  
    }, [])
}

