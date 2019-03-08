import React from 'react';
import faker from 'faker';
import '../styles/CardList.css';
import Card from './Card';

export default class CardList extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="column">
                    <Card image={faker.image.people()} name={faker.name.firstName()} />
                </div>
                <div className="column">
                    <Card image={faker.image.cats()} name={faker.name.firstName()} />
                </div>
                <div className="column">
                    <Card image={faker.image.city()} name={faker.name.firstName()} />
                </div>
                <div className="column">
                    <Card image={faker.image.nightlife()} name={faker.name.firstName()} />
                </div>
                <div className="column">
                    <Card image={faker.image.sports()} name={faker.name.firstName()} />
                </div>
            </div>
        );
    };
}
