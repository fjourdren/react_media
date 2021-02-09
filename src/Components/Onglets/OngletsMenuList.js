import React from "react";
import PropTypes from 'prop-types';
import { OngletsMenuItem } from "./OngletsMenuItem";

export class OngletsMenuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
    }

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        itemsName: PropTypes.array.isRequired
    };

    static defaultProps = {
        itemsName: []
    }

    handleClick(index) {
        this.props.onClick(index);
        this.setState({ selected: index });
    }

    render() {
        return (
            <ul className="ongletsMenu">
                {this.props.itemsName.map((item, index) => (
                    <OngletsMenuItem 
                        title={item}
                        key={index}
                        onClick={this.handleClick.bind(this, index)}
                        selected={this.state.selected === index}/>
                ))} 
            </ul>
        );
    }
}