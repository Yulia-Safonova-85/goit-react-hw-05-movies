import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { fetchCast } from "ApiFetch";
 
import {CastItem, CastImg} from './Cast.styled';

const Cast =()=> {
const {movieId}= useParams();
const [credits, setCredits]=useState([]);

useEffect(() => {
    fetchCast(movieId).then(setCredits)
}, [movieId]);


return(
    <div>
        {credits.length > 0 && (
            <ul>
                {credits.map(({id, name, character, photo})=>
                {
                    return (
                        <CastItem key={id}>
<CastImg src={photo} alt={name} />
<p>Name: {name}</p>
<p>Character: {character}</p>
                        </CastItem>
                    )
                }
                )}
            </ul>
        )}
         </div>
)

}
export default Cast;