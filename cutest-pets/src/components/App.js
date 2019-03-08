import React from 'react';
import '../styles/App.css';
import ActiveCard from './ActiveCard';
import CardList from './CardList';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className='active-card'>
                    <ActiveCard />
                </div>
                <div>
                    <CardList />
                </div>
            </div>

        );
    };
}
