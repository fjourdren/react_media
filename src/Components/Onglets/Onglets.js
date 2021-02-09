import React from "react";
import PropTypes from 'prop-types';
import { OngletsMenuList } from "./OngletsMenuList";
import './Onglets.css';

export class Onglets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
    }

    static defaultProps = {
        itemsName: [],
        items: []
    }

    static propTypes = {
        itemsName: PropTypes.array.isRequired,
        items: PropTypes.array.isRequired
    };

    handleClick(index) {
        this.setState({ selected: index });
    }

    render() {
        return (
            <div className="onglets">
                <OngletsMenuList itemsName={this.props.itemsName}
                    onClick={this.handleClick.bind(this)}/>
                {this.props.items[this.state.selected]}
            </div>
        );
    }
}