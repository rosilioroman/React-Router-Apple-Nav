import React from 'react';
import styled from 'styled-components';

import Mac from './subnav-components/Mac';

const SubNavWrapper = styled.div`
    width: 100%;
    height: 11vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F5F5F6;
`;

const SubNavContent = styled.div`
    width: 50%;
    height: 100%;
    border: 1px solid red;
`;

function SubNav(props) {
    return (
        <SubNavWrapper>
            <SubNavContent>
                {componentSelector(props.location.pathname)}
            </SubNavContent>
        </SubNavWrapper>
    );
}

//returns the appropriate subnav component based on the current URL/pathname
function componentSelector(pathname) {
    switch(pathname) {
        case '/mac/':
            return <Mac />
        default:
            return ;
    }
}

export default SubNav;