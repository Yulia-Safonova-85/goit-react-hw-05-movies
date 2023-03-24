import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { fetchReviews } from "ApiFetch";

 const Reviews =()=> {
const {movieId}= useParams();
const [reviews, setReviews]=useState([]);

useEffect(()=>{
    fetchReviews(movieId).then(setReviews)
}, [movieId]);

return(
    <div>
        {reviews.length > 0 ? (
            <ul>
                {reviews.map(({id, author, content})=>(
            <li key={id}>
                        <h3>{author}</h3>
                        <p>{content}</p> 
                        </li>))}
            </ul>
        ) : (<p>Sorry, we dont have any reviews</p>)}
    </div>
)};

export default Reviews;