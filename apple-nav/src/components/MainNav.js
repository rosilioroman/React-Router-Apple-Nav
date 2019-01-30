import React from 'react';

//components
import MainLinksContainer from './MainLinksContainer';

//images
import Apple from '../images/apple-icon.png';
import Search from '../images/search-icon.png';
import Bag from '../images/bag-icon.png';

const MainNav = props => {
    return (
        <ul>
            <li><img src={Apple} alt="apple icon"/></li>
            <MainLinksContainer linksList={props.linksList}/>
            <li><img src={Search} alt="search icon"/></li>
            <li><img src={Bag} alt="bag icon"/></li>
        </ul>
    );
}

export default MainNav;