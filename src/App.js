import React, {Component} from 'react'
import SpotifyWebApi from 'spotify-web-api-js';

import './App.css'
import ViewContainer from './components/viewContainer/viewContainer';
import accessToken from './config/accessToken';


const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(accessToken);

class App extends Component {
    state = {
        currentJam: {
            track: '',
            album: '',
            albumArtUrl: '',
            artist: '',
            link: ''
        }
    };

    componentDidMount() {
        spotifyApi.getMyCurrentPlayingTrack().then(({item}) => {
            this.setState({
                currentJam: {
                    track: item.name,
                    album: item.album.name,
                    albumArtUrl: item.album.images[1].url,
                    artist: item.artists[0].name,
                    link: item.href
                }
            });
        });
    }

    render() {
        const {
            currentJam: {
                track,
                album,
                albumArtUrl,
                link,
                artist
            }
        } =  this.state;
        return (
            <ViewContainer
                track={track}
                album={album}
                albumArtUrl={albumArtUrl}
                link={link}
                artist={artist}
            />
        )
    }
}

export default App
