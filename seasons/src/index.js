import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errorMessage: ''
        };
        console.log('App constructed');
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude });
            },
            error => {
                this.setState({ errorMessage: error.message });
            }
        );
        console.log('App mounted');
    }

    componentDidUpdate() {
        console.log('App updated');
    }

    render() {
        console.log('App rendered');
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
            );
        }

        if (!this.state.errorMessage && this.state.lat) {
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} />
                </div>
            );
        }

        return (
            <div>
                Loading
            </div>
        );

    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
