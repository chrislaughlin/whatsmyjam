import React from 'react';
import StyledViewContainer from './styledViewContainer';
import Hero from '../hero/hero';
import Jam from '../jam/jam';

const ViewContainer = ({
    currentJam: {
        album,
        track,
        artist
    }
}) => {
    return (
        <StyledViewContainer>
            <Hero/>
            <Jam
                track={track}
                album={album}
                albumArtUrl={album.albumArtUrl}
                artist={artist}
            />
        </StyledViewContainer>
    )
};

export default ViewContainer;