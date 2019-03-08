import React from 'react';
import '../styles/CardList.css';
import Card from './Card';

export default class CardList extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="column">
                    <Card />
                </div>
                <div className="column">
                    <Card />
                </div>
                <div className="column">
                    <Card />
                </div>
                <div className="column">
                    <Card />
                </div>
                <div className="column">
                    <Card />
                </div>
            </div>
        );
    };
}
