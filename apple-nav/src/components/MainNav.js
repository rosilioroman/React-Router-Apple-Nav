import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

//components
import MainLinksContainer from './MainLinksContainer';

//images
import Apple from '../images/apple-icon.png';
import Search from '../images/search-icon.png';
import Bag from '../images/bag-icon.png';

//Styled Components
const MainNavWrapper = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2.5vw;
    margin: 0;
    background-color: #343434;
    color: #fff;
`;

const MainNavContent = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
`;

const SearchIcon = styled.img`
    margin-top: 4px;
`;

const IconLink = styled.li`
    &:hover {
        cursor: pointer;
    }
`;

const MainNav = props => {
    return (
        <MainNavWrapper>
            <MainNavContent>
                <IconLink><NavLink to="/"><img src={Apple} alt="apple icon"/></NavLink></IconLink>
                <MainLinksContainer linksList={props.linksList}/>
                <IconLink><NavLink to="/"><SearchIcon src={Search} alt="search icon"/></NavLink></IconLink>
                <IconLink><NavLink to="/"><img src={Bag} alt="bag icon"/></NavLink></IconLink>
            </MainNavContent>
        </MainNavWrapper>
    );
}

export default MainNav;