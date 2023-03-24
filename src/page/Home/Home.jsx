import { fetchTrending } from "ApiFetch";
import { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {HomeContainer,MovieItem, ImgMovie} from './Home.styled';

const Home =()=> {
const [movies, setMovies]= useState([]);
const location = useLocation();

useEffect(()=> {
    fetchTrending().then(setMovies)
}, [])

return(
<div>
    <h1>Tranding today</h1>
    <HomeContainer>
      {movies.map(({id,title,poster})=> (<MovieItem key={id}>
        <Link to={`/movies/${id}`} state={{from: location}} >
          <ImgMovie src={poster} alt={title} />  
          <div>
            <h3>{title}</h3>
          </div>
        </Link>
        
    </MovieItem>)) }
    </HomeContainer>
</div>

)
}

export default Home;