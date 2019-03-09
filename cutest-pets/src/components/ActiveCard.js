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
                Active Card
            </div>
        );
    };
}
