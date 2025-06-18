

// import { useEffect } from 'react';
// import axios from 'axios';
// import { options } from '../utils/constant';
// import { useDispatch } from 'react-redux';
// import { getTeaserMovie, clearTeaserMovie } from '../redux/movieSlice';

// const useMovieById = (movieId) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!movieId) return;

//     const fetchTeaser = async () => {
//       try {
//         const res = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movieId}/videos`,
//           options
//         );

//         const teaser = res?.data?.results?.filter(
//           (item) => item.type === 'Teaser'
//         );

//         dispatch(getTeaserMovie(teaser.length > 0 ? teaser[0] : res.data.results[0]));
//       } catch (error) {
//         console.error('Error fetching teaser:', error);
//       }
//     };

//     fetchTeaser();

//     // Cleanup function to clear previous teaser from state
//     return () => {
//       dispatch(clearTeaserMovie());
//     };
//   }, [movieId, dispatch]);
// };

// export default useMovieById;




import axios from "axios";
import { options } from '../utils/constant';
import { useDispatch } from "react-redux";
import { getTrailerMovie } from '../redux/movieSlice';
import { useEffect } from "react";


const useMovieById = async (movieId) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getMovieById = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);

        console.log(res.data.results);
        const trailer = res?.data?.results?.filter((item) => {
          return item.type === "Trailer";
        })
        dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]));
      } catch (error) {
        console.log(error);
      }
    }
    getMovieById();
  },[])

}

export default useMovieById;