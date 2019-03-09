import React from 'react';
import '../styles/App.css';
import unsplash from '../api/unsplash';
import ActiveCard from './ActiveCard';
import CardList from './CardList';

export default class App extends React.Component {
    state = {
        cards: [],
        selectedCard: null
    };

    handleCardSelect = (card) => {
        console.log(card);
        this.setState({ selectedCard: card });
    };

    render() {
        return (
            <div className="container">
                <div className='active-card'>
                    <ActiveCard selectedCard={this.state.selectedCard} />
                </div>
                <div>
                    <CardList handleCardSelect={this.handleCardSelect} />
                </div>
            </div>
        );
    };
}
