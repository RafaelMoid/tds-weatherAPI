import React from 'react';
import {Link} from 'react-router-dom';
import 'pages.css';


function NavBar(){
    return(
        <ul>
            <li className="Links"><Link to='/dallol'>dallol</Link></li>
            <li className="Links"><Link to='/fairbanks'>fairbanks</Link></li>
            <li className="Links"><Link to='/londres'>londres</Link></li>
            <li className="Links"><Link to='/recife'>recife</Link></li>
            <li className="Links"><Link to='/vancouver'>vancouver</Link></li>
            <li className="Links"><Link to='/yakutsk'>yakutsk</Link></li>
            
        </ul>
        
    );
}

export default NavBar;