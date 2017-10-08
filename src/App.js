import React, {Component} from 'react'
import axios from 'axios';

import './App.css'
import ViewContainer from './components/viewContainer/viewContainer';

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
        axios.get('api/jam')
            .then(response => {
                    console.log(response);
                    const item = response.data;
                    this.setState(state => {
                        return {
                            ...state,
                            currentJam: {
                                track: item.track,
                                album: item.album,
                                albumArtUrl: item.albumArtUrl,
                                link: item.link,
                                artist: item.artist
                            }
                        }
                    })
            })
            .catch(console.error);
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
