import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

export default class App extends React.Component {
    state = {
        images: []
    };

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: 'Client-ID da3991ee8f7364eb8595369eb303f64baefbac8300fba458b164410025149cad'
            },
            params: {
                query: term
            }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar handleSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}
