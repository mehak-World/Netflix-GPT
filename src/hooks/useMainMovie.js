import { useDispatch } from "react-redux";
import { addMainMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

export const fetchData = async (id) => {
    let data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', options);
    data = await data.json();
    const mainMovie = data.results[0];
    return mainMovie
}


export const useMainMovie = () => {
    const dispatch = useDispatch();
    useEffect(() => {     
        const getData = async () => {
           const data =  await fetchData(533535);
           dispatch(addMainMovie(data))
        }
        getData();
       
    }, [])

}