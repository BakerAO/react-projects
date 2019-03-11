import React from 'react';
import '../styles/CardList.css';
import Card from './Card';

export default class CardList extends React.Component {
    render() {
        let cards = this.props.cards.map((card) => {
            return (
                <div key={card.name} className="column">
                    <Card
                        handleCardSelect={this.props.handleCardSelect}
                        image={card.image}
                        name={card.name}
                    />
                </div>
            );
        });

        return (
            <div className="row">
                {cards}
            </div>
        );
    };
}
