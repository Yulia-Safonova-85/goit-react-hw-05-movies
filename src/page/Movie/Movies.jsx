import { fetchQuerySerch } from "ApiFetch";
import { useState, useEffect } from "react";
import { useLocation, useSearchParams, Link } from "react-router-dom";

import {SearchForm,
  SearchInput,
  SearchButton,
  MovieList,
  MovieItem,
  MovieImg} from './Movie.styled';

const Movies =()=>{
const [query,setQuery]=useState('');
const [movies, setMovies]=useState([]);
const [searchParams, setSearchParams] = useSearchParams('');
const location = useLocation();

const searchQuery = searchParams.get('query') ?? '';

useEffect(() => {
    searchQuery && fetchQuerySerch(searchQuery).then(setMovies);
  }, [searchQuery]);

const handleSubmit = async evt => {
    evt.preventDefault();

    const response = await fetchQuerySerch(query);
    setMovies(response);
    setSearchParams({query});
    setQuery('');
};


const handleChange = event => {

    setQuery(event.target.value.toLowerCase());
    };


return(
    <> 
    <SearchForm onSubmit={handleSubmit}>
          <SearchInput type="text" placeholder="Please, enter movie name" value={query} onChange={handleChange} />
          <SearchButton type="submit">search</SearchButton>
        </SearchForm>
        {movies && (
        <MovieList>
          {movies.map(({ id, title, poster }) => (
            <MovieItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <MovieImg src={poster} alt={title} />
                {title}
              </Link>
            </MovieItem>
          ))}
        </MovieList>
      )}
        </>
)

}

export default Movies;