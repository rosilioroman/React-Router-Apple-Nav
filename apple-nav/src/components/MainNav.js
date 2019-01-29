import React from 'react';

//components
import MainLinksContainer from './MainLinksContainer';

//images
import Apple from '../images/apple-icon.png';
import Search from '../images/search-icon.png';
import Bag from '../images/bag-icon.png';

// import IconLink from './IconLink';
// import MainLink from './MainLink';

// export default function MainNav(props) {
//     return (
//         <header>
//             <ul>
//                 {props.linksList.map(link => {
//                     if(link.imageUrl){
//                         return <IconLink link={link} />
//                     }
//                     return <MainLink text={link.text} />
//                 })}
//             </ul>
//         </header>
//     );
// }

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