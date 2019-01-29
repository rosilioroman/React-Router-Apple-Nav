import React from 'react';

function MainLink(props) {
    return( 
        <li>
            {props.link.text}
        </li>
    );
}

export default MainLink;