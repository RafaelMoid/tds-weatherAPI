import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <ul>
            <li><Link to='/dallol'>dallol</Link></li>
            <li><Link to='/fairbanks'>fairbanks</Link></li>
            <li><Link to='/londres'>londres</Link></li>
            <li><Link to='/recife'>recife</Link></li>
            <li><Link to='/vancouver'>vancouver</Link></li>
            <li><Link to='/yakutsk'>yakutsk</Link></li>
        </ul>
        
    );
}

export default NavBar;