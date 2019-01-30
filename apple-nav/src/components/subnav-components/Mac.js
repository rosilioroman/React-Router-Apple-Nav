import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
`;

const ProductWrapper = styled.div`
    margin: 0 20px;
`;

function Mac() {
    return (
        <ContentWrapper>
            <ProductWrapper>
                Image 1
            </ProductWrapper>
            <ProductWrapper>
                Image 2
            </ProductWrapper>
            <ProductWrapper>
                Image 3
            </ProductWrapper>
        </ContentWrapper>
    );
}

export default Mac;