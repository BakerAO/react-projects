import React from 'react';

export default class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        // 5 because the grid-auto-rows are 5px
        const spans = Math.ceil(height / 5);
        this.setState({ spans });
    };

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img alt={description} ref={this.imageRef} src={urls.regular} />
            </div>
        );
    };
}
