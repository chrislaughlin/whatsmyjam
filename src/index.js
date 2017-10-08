import './index.css'

import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'statty';
import inspect from 'statty/inspect';

import App from './App'

const currentState = {
    currentJam: {
        track: '',
        album: '',
        albumArtUrl: '',
        artist: '',
        link: ''
    }
};

const StatefulApp = () => {
    return (
        <Provider
            state={currentState}
            inspect={inspect}
        >
            <App/>
        </Provider>
    );
};

render(<StatefulApp/>, document.querySelector('#app'));
