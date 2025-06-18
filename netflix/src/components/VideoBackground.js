// import React from 'react';
// import useMovieById from '../hooks/useMovieById';
// import { useSelector } from 'react-redux';



// const VideoBackground = ({ movieId  , bool }) => {
  
//   const teaserMovie = useSelector(store=>store.movie.teaserMovie);
//   useMovieById(movieId); 
//   if (!teaserMovie?.key) {
//     return <div className="text-white text-center p-4">Loading video...</div>;
//   }

//   return (
//     <div className= 'w-[vw] overflow-hidden'>
//        <iframe
//         className={bool ? "w-[100%]" : "w-screen aspect-video"}

//         src={`https://www.youtube.com/embed/${teaserMovie.key}?si=wZ4ct0TVzm1NyTaj&autoplay=1&mute=1 `}
//         title="YouTube video player"
//         frameBorder="0"
     
//         allowFullScreen
//       ></iframe> 


      

      



//     </div>
//   );
// };

// export default VideoBackground;




import React from 'react'
import useMovieById from '../hooks/useMovieById';
import {useSelector} from "react-redux";

const VideoBackground = ({movieId,bool}) => {
    const trailerMovie = useSelector(store=>store.movie.trailerMovie);
    
    useMovieById(movieId);

    return (
        <div className='w-[vw] overflow-hidden'>
            <iframe
                className={`${bool ? "w-[100%]" : "w-screen aspect-video" } `}
                src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoBackground


