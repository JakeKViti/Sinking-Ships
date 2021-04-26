import React from 'react';

export default class Info extends React.Component {
    render() {
        return (
            <div>
           Amount of clicks: {this.props.value}
           </div>
        );
    }
};

