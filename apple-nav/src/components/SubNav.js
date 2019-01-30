import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

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
                <Switch>
                    <Route path="/mac/" component={Mac} />
                    <Route path="/ipad/" component={Ipad} />
                    <Route path="/iphone/" component={Iphone} />
                    <Route path="/watch/" component={Watch} />
                    <Route path="/tv/" component={Tv} />
                    <Route path="/music/" component={Music} />
                    <Route path="/support/" component={Support} />
                </Switch>
            </SubNavContent>
        </SubNavWrapper>
    );
}

export default SubNav;