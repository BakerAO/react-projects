import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
    return (
        <div>
            StreamDelete
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actions="delete"
            />
        </div>
    );
};

export default StreamDelete;

