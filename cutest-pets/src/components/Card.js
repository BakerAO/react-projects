import React from 'react';

export default class Card extends React.Component {
    render() {
        let card = {
            image: this.props.image,
            name: this.props.name
        };
        return (
            <div onClick={() => this.props.handleCardSelect(card)}>
                <img alt='fake' src={card.image} width="200px" />
                <h4>{card.name}</h4>
            </div>
        );
    };
}
