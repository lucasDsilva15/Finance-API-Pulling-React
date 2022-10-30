import { Link } from "react-router-dom";

export default function Nav () {
    
    return(
        <div id='navbar'>
            <div id="navbar-items">
                <Link to="/" className="navlink"> Home </Link>
                <Link to='/about' className='navlink'> About </Link>
                <Link to='/search' className='navlink'> Search</Link>    
            </div>
        </div>
        
    )
}