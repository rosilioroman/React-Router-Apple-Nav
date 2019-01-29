import React from 'react';

import MainLink from './MainLink';

function MainLinksContainer(props) {
    return (
        props.linksList.map(link => <MainLink key={link.text} link={link}/>)
    );
}

export default MainLinksContainer;