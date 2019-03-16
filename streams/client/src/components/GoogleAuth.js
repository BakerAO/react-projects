import React from 'react';

export default class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>Who knows</div>;
        } else if (this.state.isSignedIn) {
            return <div>Signed In = true</div>;
        } else {
            return <div>Not Signed In</div>;
        }
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '734068053686-vu5jafbe7k4jj7g0m0kqha2i167prnpi.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
            });
        });
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

