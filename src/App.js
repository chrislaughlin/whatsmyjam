import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { State } from 'statty';

import './App.css'
import ViewContainer from './components/viewContainer/viewContainer';
import * as selectors from './selectors';
import * as updaters from './updaters';

const spotifyPlayer = new SpotifyPlayer();

const AppContainer = () => {
    return (
        <State
            select={selectors.currentJamSector}
            render={({currentJam}, update) => {
                return <App
                    currentJam={currentJam}
                    update={update}
                />
            }}
        />
    )
};

class App extends Component {

    static propTypes = {
        update: PropTypes.func.isRequired,
        currentJam: PropTypes.object
    };

    componentDidMount() {
        spotifyPlayer.init();
        spotifyPlayer.login();
        spotifyPlayer.on('update', response => {
            const {
                item: {
                    album: {
                        name: albumName,
                        href: albumLink,
                        images
                    },
                    artists,
                    href,
                    name
                }
            } = response;
            this.props.update(updaters.setCurrentJam({
                album: {
                    name: albumName,
                    link: albumLink,
                    albumArtUrl: images[1].url
                },
                artist: {
                    name: artists[0].name,
                    link: artists[0].href
                },
                track: {
                    name: name,
                    link: href
                }
            }));
        });

        spotifyPlayer.on('login', user => {
            console.log({user});
        });
    }

    render() {
        if (this.props.currentJam) {
            return (
                <ViewContainer
                    currentJam={this.props.currentJam}
                />
            )
        }
        return <div/>;
    }
}

export default AppContainer
