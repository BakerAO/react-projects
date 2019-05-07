import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    onEditSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }

        // initialValues is a special property name for Redux-Forms
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    onFormSubmit={this.onEditSubmit}
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
