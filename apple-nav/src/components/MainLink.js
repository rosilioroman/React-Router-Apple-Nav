import React from 'react';
import { NavLink } from 'react-router-dom';

function MainLink(props) {
    return( 
        <li>
            <NavLink to={`/${props.link.text.toLowerCase()}/`}>{props.link.text}</NavLink>
        </li>
    );
}

export default MainLink;