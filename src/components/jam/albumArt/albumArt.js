import React from 'react';
import StyledAlbumArt from './styledAlbumArt';

const AlbumArt = ({albumArtUrl}) => {
    return (
        <StyledAlbumArt
            src={albumArtUrl}
        />
    );
};

export default AlbumArt;