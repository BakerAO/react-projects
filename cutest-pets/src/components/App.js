import React from 'react';
import '../styles/App.css';
import interactive from '../api/interactive';
import ActiveCard from './ActiveCard';
import CardList from './CardList';

export default class App extends React.Component {
    state = {
        cards: [],
        selectedCard: null
    };

    getCardInfo = async () => {
        const response = await interactive.get('competitor/', {
        });
        let cards = response.data.map((index) => {
            let item = {
                id: index.id,
                image: index.header_small_image,
                name: index.title.rendered
            };
            return item;
        });
        this.setState({ cards: cards });
    };

    handleCardSelect = (card) => {
        this.setState({ selectedCard: card });
    };

    componentDidMount() {
        this.getCardInfo();
    };

    render() {
        return (
            <div className="container">
                <div className='active-card'>
                    <ActiveCard selectedCard={this.state.selectedCard} />
                </div>
                <div>
                    <CardList cards={this.state.cards} handleCardSelect={this.handleCardSelect} />
                </div>
            </div>
        );
    };
}
