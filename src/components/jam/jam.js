import React from 'react';
import StyledJam from './styledJam';
import AlbumArt from './albumArt/albumArt';

const Jam = ({
    track,
    album,
    albumArtUrl,
    artist
}) => {
    return (
        <StyledJam>
            <AlbumArt
                albumArtUrl={albumArtUrl}
            />
            <span>{track}</span>
            <span>{album}</span><br/>
            <span>{artist}</span>
        </StyledJam>
    )
};

export default Jam;