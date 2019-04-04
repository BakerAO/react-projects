import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

export default class Header extends React.Component {
    render() {
        return (
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">
                    Home
                </Link>
                <div className="right menu">
                    <Link to="/" className="item">
                        All Streams
                    </Link>
                    <GoogleAuth />
                </div>
            </div>
        );
    }
}
