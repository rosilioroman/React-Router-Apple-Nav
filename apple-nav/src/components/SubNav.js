import React from 'react';
import styled from 'styled-components';

import Ipad from './subnav-components/Ipad';
import Iphone from './subnav-components/Iphone';
import Mac from './subnav-components/Mac';
import Music from './subnav-components/Music';
import Support from './subnav-components/Support';
import Tv from './subnav-components/Tv';
import Watch from './subnav-components/Watch';

const SubNavWrapper = styled.div`
    width: 100%;
    height: 11vh;
    display: flex;
    justify-content: center;
    background-color: #F5F5F6;
`;

const SubNavContent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
            return <Mac />;
        case '/ipad/':
            return <Ipad />;
        case '/iphone/':
            return <Iphone />;
        case '/watch/':
            return <Watch />;
        case '/tv/':
            return <Tv />;
        case '/music/':
            return <Music />;
        case '/support/':
            return <Support />;
        default:
            break;
    }
}

export default SubNav;