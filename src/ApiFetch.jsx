import axios from 'axios';

axios.defaults.baseURL ='https://api.themoviedb.org/3';
axios.defaults.params = {
    api_key: 'd3ed4ffb60d13827c3ec286dc736d3f2',
    include_adult: false,
};
// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
const IMG_URL = 'https://image.tmdb.org/t/p/w500';


export const fetchTrending = async ()=> {
return axios.get('/trending/all/day?')
.then(({data: {results}})=>
results.map(({id, title,poster_path:poster})=>
({ id, title, poster:IMG_URL+ poster,}
)
)).catch(error => {console.log(error.message); })

};

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export const fetchMovieDetail = movieId => {
    return axios.get(`/movie/${movieId}?`).then(
({ data: {
    id,
    poster_path: poster,
    title,
    release_date: releaseYear,
    vote_average: userScore,
    overview,
    genres,
  },}) => ({id, poster: IMG_URL + poster,
    title,
    releaseYear: new Date(releaseYear).getFullYear(),
    userScore: Math.round(userScore * 10),
    overview,
    genres,

  })
    ).catch(error => {console.log(error.message)}
)};

// https://api.themoviedb.org/3/search/movie?
export const fetchQuerySerch = async query=> {
return axios.get(`/search/movie?query=${query}`).then(({ data: { results } }) =>
results.map(({ id, title, poster_path: poster }) => ({
  id,
  title,
  poster: IMG_URL + poster,
}))).catch(error => {console.log(error.message )}) 

};
// Get the cast and crew for a movie.
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

export const fetchCast = movieId =>{
    return axios.get(`/movie/${movieId}/credits?`).then(({data: {cast}})=>
    cast.map(({id, name, character, profile_path: photo})=>
    ({id, name, character, photo: IMG_URL + photo,}))
    ).catch(error => {console.log(error.message)}) 
} ;

// Get the user reviews for a movie.
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

export const fetchReviews = movieId => {
return axios.get(`/movie/${movieId}/reviews?`).then(({data: {results}})=>
results.map(({id, author, content})=>({id, author, content }) )
).catch(error => {console.log(error.message)}) 

};