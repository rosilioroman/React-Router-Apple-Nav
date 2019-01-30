import styled from 'styled-components';

const GlobalStyles = styled.div`
    font-family: 'PT Sans', Helvetica, sans-serif;
    margin: 0;
    padding: 0;

    a {
        text-decoration: none;
        color: #DBDBDB;
    }
    
    li > a.active {
        color: #7E7E7E;
    }
`;

export default GlobalStyles;