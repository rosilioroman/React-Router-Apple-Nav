import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ListItem = styled.li`
    padding-top: 4px;
`;

function MainLink(props) {
    return( 
        <ListItem>
            <NavLink to={`/${props.link.text.toLowerCase()}/`}>{props.link.text}</NavLink>
        </ListItem>
    );
}

export default MainLink;