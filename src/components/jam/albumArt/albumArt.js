import React from 'react';
import StyledAlbumArt from './styledAlbumArt';

const AlbumArt = ({albumArtUrl}) => {
    return (
        albumArtUrl !== '' ?
            <StyledAlbumArt
                src={albumArtUrl}
            /> :
            <div/>
    );
};

export default AlbumArt;