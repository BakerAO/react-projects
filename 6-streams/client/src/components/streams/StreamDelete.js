import React from 'react';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {
    renderActions() {
        return (
            <>
                <button className="ui button negative">
                    Delete
                </button>
                <button className="ui button">
                    Cancel
                </button>
            </>
        );
    }

    render() {
        return (
            <div>
                Stream Delete
                <Modal
                    onDismiss={() => history.push('/')}
                    title="Delete Stream"
                    content="Are you sure you want to delete this stream?"
                    actions={this.renderActions()}
                />
            </div>
        );
    }
}

export default StreamDelete;
