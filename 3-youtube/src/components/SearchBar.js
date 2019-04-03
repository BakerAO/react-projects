import React from 'react';

export default class SearchBar extends React.Component {
    state = { term: '' };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleTermSubmit(this.state.term);
    };

    handleInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.handleFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            onChange={this.handleInputChange}
                            placeholder="Search for a video"
                            type="text"
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        );
    };
}
