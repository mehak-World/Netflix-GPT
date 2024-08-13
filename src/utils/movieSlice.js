import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {nowPlayingMovies: null, mainMovie:  null, popularMovies: null},
    reducers: {
        addNowPlayingMovies: (state, action) => {
                state.nowPlayingMovies = action.payload
        },

        addMainMovie: (state, action) => {
            state.mainMovie = action.payload
        },

        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        }
    }

})

export default movieSlice.reducer;

export const {addNowPlayingMovies, addMainMovie, addPopularMovies} = movieSlice.actions;