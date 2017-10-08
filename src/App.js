import React, {Component} from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import { State } from 'statty';

import './App.css'
import ViewContainer from './components/viewContainer/viewContainer';
import * as selectors from './selectors';
import * as updaters from './updaters';

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
        axios.get('api/jam')
            .then(response => {
                this.props.update(updaters.setCurrentJam(response.data));
            })
            .catch(console.error);
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
