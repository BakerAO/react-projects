import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from  '../../actions';

class StreamList extends React.Component {
    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            );
        });
    }

    componentDidMount() {
        this.props.fetchStreams();
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    // Object.values() takes an object, pulls out the values and inserts them into an array
    return { streams: Object.values(state.streams) }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
