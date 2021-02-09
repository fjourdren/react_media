import React from "react";
import PropTypes from 'prop-types';

export class OngletsMenuItem extends React.Component {    
    static defaultProps = {
        title: "",
        selected: false
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired
    };

    toggle = () => {
        this.props.onClick(this.props.key);
    };

    render() {
        return (
            <div className={`${this.props.selected ? "on onglets-menu-item" : "off onglets-menu-item"}`} onClick={this.toggle}>
                <p>{this.props.title}</p>
            </div>
        );
    }
}