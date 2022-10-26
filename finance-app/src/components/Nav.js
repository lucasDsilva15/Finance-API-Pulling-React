import { Link } from "react-router-dom";

export default function Nav () {
    
    return(
        <div id='navbar'>
            <Link to="/"> Home </Link>
            <Link to='/about'> About </Link>
        </div>
        
    )
}