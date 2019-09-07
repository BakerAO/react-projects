import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
    renderActions() {
        return (
            <>
                <button
                    className="ui button negative"
                    onClick={() => this.props.deleteStream(this.props.match.params.id)}
                >
                    Delete
                </button>
                <Link to="/" className="ui button">
                    Cancel
                </Link>
            </>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?';
        }

        return `Are you sure you want to delete the stream ${this.props.stream.title}`;
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        return (
            <Modal
                onDismiss={() => history.push('/')}
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(
    mapStateToProps,
    { fetchStream, deleteStream }
)(StreamDelete);
