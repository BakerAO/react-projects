import React from 'react';

const TextLoader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
};

TextLoader.defaultProps = {
    message: 'defaultProps'
};

export default TextLoader;