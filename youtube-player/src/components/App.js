import React from 'react';

import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoSelected from './VideoSelected';
import SearchBar from './SearchBar';

export default class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    handleTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items });
    };

    handleVideoSelect = (video) => {
        console.log(video);
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar handleTermSubmit={this.handleTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoSelected selectedVideo={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
