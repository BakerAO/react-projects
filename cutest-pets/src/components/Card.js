import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div>
                <img alt='fake' src={this.props.image} width="100px" />
                <h4>{this.props.name}</h4>
            </div>
        );
    };
}
