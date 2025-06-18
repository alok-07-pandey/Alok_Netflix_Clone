// import { createSlice } from "@reduxjs/toolkit";


// const searchSlice = createSlice({
//     name:"search",
//     initialState:{
//         movieName :null,
//         searchedhMovie:null
//     },
//     reducers:{

//         //actions 
//         setSearchMovieDetails: (state, action) => {
//             state.movieName = action.payload.searchMovie;
//             state.searchedMovie = action.payload.movies;
//           },
//     }
// });
// export const {setSearchMovieDetails} = searchSlice.actions;
// export default searchSlice.reducer;


import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        movieName:null,
        searchedMovie:null
    },
    reducers:{
        // actions
        setSearchMovieDetails:(state,action)=>{
            const {searchMovie, movies} = action.payload;
            state.movieName = searchMovie;
            state.searchedMovie = movies;
        }
    }
});
export const {setSearchMovieDetails} = searchSlice.actions;
export default searchSlice.reducer;