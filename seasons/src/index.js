import React from 'react';
import ReactDOM from 'react-dom';

import TextLoader from './TextLoader';
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

    renderContent() {
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
                <TextLoader message='Please accept location request' />
            </div>
        );
    }

    divStyle = {
        border: "5px solid red"
    };

    render() {
        console.log('App rendered');
        return (
            <div style={this.divStyle}>
                {this.renderContent()}
            </div>
        );

    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
