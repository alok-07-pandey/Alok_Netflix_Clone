// import { useEffect } from 'react';
// import axios from 'axios';
// import { getUpcomingMovies } from '../redux/movieSlice';
// import { Upcoming_Movie, options } from '../utils/constant';
// import { useDispatch } from 'react-redux';

// const useUpcomingMovies = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchUpcomingMovies = async () => {
//       try {
//         const res = await axios.get(Upcoming_Movie, options);
//         dispatch(getUpcomingMovies(res.data.results));
//       } catch (error) {
//         console.error("Error fetching upcoming movies:", error);
//       }
//     };

//     fetchUpcomingMovies();
//   }, [dispatch]); // only run once
// };

// export default useUpcomingMovies;



import axios from "axios";
import {getUpcomingMovie } from "../redux/movieSlice";
import {Upcoming_Movie, options } from "../utils/constant";
import {useDispatch} from "react-redux";

const useUpcomingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Upcoming_Movie, options);
        dispatch(getUpcomingMovie(res.data.results));
    } catch (error) {
        console.log(error);
    }
}
export default useUpcomingMovies;