import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function FoodRecipe({foodId}) {
    const [food, setFood] = useState({})
    useEffect(()=> {
        async function fetchFoodRecipe() {
            const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
            console.log(foodId)
            // const res = await fetch(`${URL}?i=${foodId}`)
            const res = await fetch(`${URL}`)
            const data = await res.json()
            console.log(data.meals)
            console.log(foodId)
            setFood(data)
        }
        fetchFoodRecipe()
    },[foodId])
    return (
        <div>
            <Link to='/'>Click</Link>
            <h1>Hello world</h1>
        </div>
    )
}






// import { useEffect, useState } from "react";
// import styles from './movieDetails.module.css';
// import { Link } from "react-router-dom";

// export default function MovieDetails({ movieId }) {
//     const url = `https://api.themoviedb.org/3/movie/${movieId}`;
//     const apiKey = 'bbbfa863fae709a9395aa30f77884fc6';
//     const [movie, setMovie] = useState({})
//     useEffect(() => {
//         async function fetchApi() {
//              const res = await fetch(`${url}?api_key=${apiKey}`);
//              const data = await res.json();
//              console.log(data)
//              setMovie(data)
//         }
//         fetchApi();
//     },[movieId]
//     )
//     return (
//         <div >
//             <div className={styles.linkContainer}>
//                 <Link className={styles.linkStyle} to="/movies">Back to Movies</Link>   
//             </div>

//             <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
//                     backgroundRepeat: "no-repeat",
//                     backgroundSize: "cover", }}>
//                 <div  className={styles.detailsContainer}>
//                     {
//                         movie.poster_path ? <img className={styles.images} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" /> : <img src="./" alt="" />
//                     }
                    
//                     <div className={styles.details}>
//                         <h1>{movie.title}</h1>
//                         <p><span className={styles.releaseDate} >Release Date:</span> {movie.release_date} {}</p>  
                    
//                         <p className={styles.tagline}>{movie.tagline}</p>
        
//                         <div className={styles.overviewContainer}>
//                             <h2>Overview</h2>
//                             <p>{movie.overview}</p>
//                         </div>
//                         {/* <div className={styles.producers}>
//                             {/* <h3>{movie}</h3> */}
//                             {/* <p>Director</p>
//                             <h3>{}</h3>
//                             <p>Writer</p>
//                             <h3>{}</h3>
//                             <p>Screenplay</p>
//                         </div> */} 
//                     </div>
//             </div>
//             </div>
//         </div>
//     )
// }