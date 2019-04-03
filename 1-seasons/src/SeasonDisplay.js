import React from 'react';

import './SeasonDisplay.css';

class SeasonDisplay extends React.Component {
    getSeason(lat, month) {
        if (month > 2 && month < 9) {
            return lat > 0 ? 'Summer' : 'Winter';
        } else {
            return lat > 0 ? 'Winter' : 'Summer';
        }
    };

    render() {
        const season = this.getSeason(this.props.lat, new Date().getMonth());
        const icon = season === 'Winter' ? 'snowflake' : 'sun';
        console.log('SeasonDisplay rendered');
        return (
            <div className={`season-display ${season}`}>
                <i className={`icon-left ${icon} icon massive`} />
                <h1>
                    {season}
                </h1>
                <i className={`icon-right ${icon} icon massive`} />
            </div>
        );
    }
}

export default SeasonDisplay;