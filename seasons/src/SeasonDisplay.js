import React from 'react';

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
            <div>
                <i className={`${icon} icon`} />
                <h1>
                    {season}
                </h1>
                <i className={`${icon} icon`} />
                <a href="https://www.google.com">Google</a>
            </div>
        );
    }
}

export default SeasonDisplay;