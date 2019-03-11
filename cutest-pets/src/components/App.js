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

    getCardInfo = async (term) => {
        const response = await unsplash.get('search/photos', {
            params: {
                query: term
            }
        });
        let formattedResponse = {
            image: response.data.results[0].urls.regular,
            name: response.data.results[0].id
        };
        let cards = this.state.cards;
        cards.push(formattedResponse);
        this.setState({ cards: cards });
    };

    handleCardSelect = (card) => {
        console.log(card);
        this.setState({ selectedCard: card });
    };

    componentDidMount() {
        let practiceTerms = ['cat', 'dog', 'bird', 'elephant', 'zebra', 'horse', 'llama', 'frog', 'otter', 'duck'];
        practiceTerms.forEach((term) => {
            this.getCardInfo(term);
        });
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
