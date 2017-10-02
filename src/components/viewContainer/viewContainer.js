import React from 'react';
import StyledViewContainer from './styledViewContainer';
import Hero from '../hero/hero';
import Jam from '../jam/jam';

const ViewContainer = () => {
    return (
        <StyledViewContainer>
            <Hero/>
            <Jam/>
        </StyledViewContainer>
    )
};

export default ViewContainer;