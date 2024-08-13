import { useDispatch } from "react-redux";
import { addMainMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const fetchData = async () => {
    let data = await fetch('https://api.themoviedb.org/3/movie/1022789/videos?language=en-US', options);
    data = await data.json();
    const mainMovie = data.results[0];
    return mainMovie
}


export const useMainMovie = () => {
    const dispatch = useDispatch();
    useEffect(() => {     
        const getData = async () => {
           const data =  await fetchData();
           dispatch(addMainMovie(data))
        }
        getData();
       
    }, [])

}