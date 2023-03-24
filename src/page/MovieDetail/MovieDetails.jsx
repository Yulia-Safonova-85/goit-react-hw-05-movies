import { fetchMovieDetail } from "ApiFetch";
import { useParams,useLocation, Link, Outlet } from "react-router-dom";
import {useState, useEffect, useRef} from "react"; 

import{MovieContainer,
    ImgMovie, MovieInfo,AboutInfo, InfoLink
} from './MovieDetails.styled';


const MovieDetails = ()=> {
    const {movieId}= useParams();
    const[movie,setMovie]=useState(null);
    const location = useLocation();
 const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
useEffect(() => {
  fetchMovieDetail(movieId).then(setMovie)
}, [movieId]);

const { poster, title, releaseYear, userScore, overview, genres } =
    movie ?? {};


 return (
<div>
    <Link to={backLinkLocationRef.current}>Back to movies</Link>
{movie && (
    <div>
<MovieContainer>
        <ImgMovie src={poster} alt={title} />
        <MovieInfo> 
            <h2>{title}({releaseYear})</h2>
        <p>UserScore:{userScore}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(({ name }) => name).join(' ')}</p>
        </MovieInfo>
    </MovieContainer>  

      <AboutInfo>Additional information</AboutInfo>
<ul>
    <li>
        <InfoLink to={`cast`} state={backLinkLocationRef.current}>Cast</InfoLink>
    </li>
    <li> 
        <InfoLink to={`reviews`} state={backLinkLocationRef.current}>Reviews</InfoLink>
    </li>
</ul>
<Outlet/>
    </div>
)}
</div>)}

export default MovieDetails;