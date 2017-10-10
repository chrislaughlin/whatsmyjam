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
            {
                !album &&
                <b>
                    Allow popups to log into Spotify and see your jam. <br/>
                    Refresh the page after you allow popups
                </b>
            }
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