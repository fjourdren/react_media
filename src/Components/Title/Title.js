import React from "react";
import PropTypes from 'prop-types';

export class Title extends React.Component {
    static defaultProps = {
        itemsName: [],
        items: []
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        synopsis_url: PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
                <h1 className="title">{ this.props.title }</h1>
                <a href={ this.props.synopsis_url } target="_blank" rel="noreferrer">Synopsis</a>
            </div>
        );
    }
}