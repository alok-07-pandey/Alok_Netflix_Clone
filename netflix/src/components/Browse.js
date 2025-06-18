// import React, { useEffect } from 'react'
// import Header from './Header'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom';
// import MainContainer from './MainContainer.js';
// import MovieContainer from './MovieContainer.js';
// import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
// import usePopularMovies from '../hooks/usePopularMovies.js';
// import useTopRatedMovies from '../hooks/useTopRatedMovies';
// import useUpcomingMovies from '../hooks/useUpcomingMovies.js';
// import SearchMovies from './SearchMovies.js';
// import { useDispatch } from 'react-redux';





// const Browse = () => {

//   const user = useSelector(store=>store.app.user);
//   const toggle = useSelector(store=>store.movie.toggle);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const upcomingMovies = useSelector((store) => store.movie.upcomingMovies);
//   console.log("Alok Upcoming movies from store:", upcomingMovies);


//   //MyCustom Hooks
//   useNowPlayingMovies();
//   usePopularMovies();
//   useTopRatedMovies();
//   useUpcomingMovies();


  

//   useEffect(()=>{
//     if(!user){
//       navigate("/");
//     }
    

//   },[]);
 

//   return (
//     <div>
//         <Header/>
//         <div>
//           {
//             toggle ? <SearchMovies/> :(
//               <>
//                <MainContainer/>
//                <MovieContainer/>
              
              
//               </>
//             )
//           }
         

//         </div>
//     </div>
//   )
// }

// export default Browse




import React, { useEffect } from 'react'
import Header from './Header';
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import SearchMovie from './SearchMovie';

const Browse = () => {
    const user = useSelector(store => store.app.user);
    const toggle = useSelector(store => store.movie.toggle);
    const navigate = useNavigate();

    // my custom hooks
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, []);
    return (
        <div >
            <Header />
            <div>
                {
                    toggle ? <SearchMovie /> : (
                        <>
                            <MainContainer />
                            <MovieContainer />
                        </>

                    )
                }

            </div>
        </div>
    )
}

export default Browse