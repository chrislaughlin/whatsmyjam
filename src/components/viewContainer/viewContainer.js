import React from 'react';
import PropTypes from 'prop-types';
import StyledViewContainer from './styledViewContainer';
import Hero from '../hero/hero';
import Jam from '../jam/jam';

const ViewContainer = ({
    track,
    album,
    albumArtUrl,
    link,
    artist
}) => {
    return (
        <StyledViewContainer>
            <Hero/>
            <Jam
                track={track}
                album={album}
                albumArtUrl={albumArtUrl}
                link={link}
                artist={artist}
            />
        </StyledViewContainer>
    )
};

ViewContainer.propTypes = {
    track: PropTypes.string,
    album: PropTypes.string,
    albumArtUrl: PropTypes.string,
    link: PropTypes.string,
    artist: PropTypes.string
};

export default ViewContainer;