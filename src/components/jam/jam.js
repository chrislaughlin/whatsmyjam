import React from 'react';
import StyledJam from './styledJam';
import AlbumArt from './albumArt/albumArt';

const Jam = ({
    album,
    track,
    artist,
    albumArtUrl
}) => {
    return (
        <StyledJam>
            <AlbumArt
                albumArtUrl={albumArtUrl}
            />
            <a
                href={track.link}
                target="_blank"
            >
                {track.name}
                </a>
            <a
                href={album.link}
                target="_blank"
            >
                {album.name}
                </a>
            <br/>
            <a
                href={artist.link}
                target="_blank"
            >
                {artist.name}
                </a>
        </StyledJam>
    )
};

export default Jam;