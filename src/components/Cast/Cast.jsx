import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { fetchCast } from "ApiFetch";
 
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
                        <li key={id}>
<img src={photo} alt={name} />
<p>Name:{name}</p>
<p>Character:{character}</p>
                        </li>
                    )
                }
                )}
            </ul>
        )}
         </div>
)

}
export default Cast;