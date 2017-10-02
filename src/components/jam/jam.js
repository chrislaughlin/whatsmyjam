import React from 'react';
import StyledJam from './styledJam';
import AlbumArt from './albumArt/albumArt';

const Jam = () => {
    return (
        <StyledJam>
            <AlbumArt/>
            <span> No Signal </span>
            <span> Homey </span>
        </StyledJam>
    )
};

export default Jam;