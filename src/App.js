import React, {Component} from 'react'
const SpotifyWebApi = require('spotify-web-api-node');

import './App.css'
import ViewContainer from './components/viewContainer/viewContainer';
import access from './config/accessToken';


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
        // credentials are optional
        var spotifyApi = new SpotifyWebApi({
            clientId : access.client_id,
            clientSecret : access.client_secret
        });

        spotifyApi.clientCredentialsGrant()
            .then(function(data) {
                console.log('The access token expires in ' + data.body['expires_in']);
                console.log('The access token is ' + data.body['access_token']);

                // Save the access token so that it's used in future calls
                spotifyApi.setAccessToken(data.body['access_token']);
            }, function(err) {
                console.log('Something went wrong when retrieving an access token', err);
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
