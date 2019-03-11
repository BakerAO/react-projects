import React from 'react';

export default class ActiveCard extends React.Component {
    render() {
        let selectedCard = this.props.selectedCard;
        if (!selectedCard) {
            return (
                <div>
                    Select a card...
                </div>
            );
        }
        return (
            <div>
                <img alt='fake' src={selectedCard.image} width="400px" />
                <h4>{selectedCard.name}</h4>
            </div>
        );
    };
}
