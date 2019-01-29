import React from 'react';

export default function MainNav(props) {
    return (
        props.linksList.map(link => <li key={link.text}>{link.text}</li>)
    );
}