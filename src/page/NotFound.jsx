import { Link } from "react-router-dom";

const NotFound =()=> {
return(
<>
<h2>OOPS...We can`t found any movies...</h2>
<Link to="/">Back to start</Link>
</>
)
}

export default NotFound;