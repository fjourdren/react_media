import React from "react";
import PropTypes from "prop-types";
import { str_pad_left } from '../../Utils';

export class Keyword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: false
        }
    };

    static propTypes = {
        item: PropTypes.object.isRequired,
        timeHandler: PropTypes.func.isRequired
    };

    toDisplayableTime(time) {
        let hours = Math.floor(time / 3600);
        time = time - hours * 3600; 
        let minutes = Math.floor(time / 60);
        let seconds = time - minutes * 60;

        if(hours >= 1) {
            return hours + ':' + str_pad_left(minutes,'0',2) + ':' + str_pad_left(seconds,'0',2);
        } else {
            return str_pad_left(minutes,'0',2) + ':' + str_pad_left(seconds,'0',2);
        }
    }

    render() {
        return (
            <div className="keyword">
                <p className="time" onClick={this.props.timeHandler.bind(this, this.props.item.pos)}>{ this.toDisplayableTime(this.props.item.pos) }</p>
                <ul key={ "keyword-" + this.props.item.index }
                    onClick={ this.props.timeHandler.bind(this, this.props.item.pos) }>
                    { this.props.item.data.map((item_link) => (
                        <li>see <a href={ item_link.url } target="_blank" rel="noreferrer">{ item_link.title }</a></li>
                    ))}
                </ul>
            </div>
        )
    };
};