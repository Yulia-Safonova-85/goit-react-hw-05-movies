import { Layout } from "page/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "page/Home/Home";
import MovieDetails from "page/MovieDetail/MovieDetails";
import Movies from "page/Movie/Movies";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

// API_KEY = `d3ed4ffb60d13827c3ec286dc736d3f2`;
// BASE_URL =`https://api.themoviedb.org/3/movie/550?api_key=d3ed4ffb60d13827c3ec286dc736d3f2`;

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path= "/movies/:movieId" element={<MovieDetails/>}>
           <Route path="cast" element={<Cast/> }/>
           <Route path="reviews" element={<Reviews/>}/>
           </Route>
        </Route> 
      
      </Routes>
  
  );
};
