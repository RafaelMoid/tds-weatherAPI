import React from 'react';
import {Link} from 'react-router-dom';
import "./App.css";
import styled from "styled-components";

const Nav = styled.ul`
font-family: Urbanist;

`

function NavBar(){
    return(
        <Nav>
            <ul>
                <li><Link to='/dallol'>Dallol</Link></li>
                <li><Link to='/fairbanks'>Fairbanks</Link></li>
                <li><Link to='/londres'>Londres</Link></li>
                <li><Link to='/recife'>Recife</Link></li>
                <li><Link to='/vancouver'>Vancouver</Link></li>
                <li><Link to='/yakutsk'>Yakutsk</Link></li>
            
            </ul>
        </Nav>
        
    );
}

export default NavBar;