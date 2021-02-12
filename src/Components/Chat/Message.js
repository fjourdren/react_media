import React from "react";
import PropTypes from 'prop-types';
import { str_pad_left } from '../../Utils';

export class Message extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            img: "https://randomuser.me/api/portraits/men/1.jpg"
        }
    }

    static propTypes = {
        name: PropTypes.string,
        me: PropTypes.bool.isRequired,
        when: PropTypes.number.isRequired,
        message: PropTypes.string,
        moment: PropTypes.number,
        timeHandler: PropTypes.func.isRequired
    };

    componentDidMount() {
        fetch("https://randomuser.me/api/?seed=" + this.props.name)
        .then(res => res.json())
        .then(result => {
            this.setState({
                img: result.results[0].picture.thumbnail
            });
        });
    }

    toTime(timestamp) {
        let date = new Date(timestamp);
        return str_pad_left(date.getHours(),'0',2) + ':' + str_pad_left(date.getMinutes(),'0',2);
    }

    render() {        
        return (
            <div className={`message ${this.props.me ? "me" : ""}`}>
                <div className="head">
                    <img className="img" src={ this.state.img } alt=""/>
                    <div className="author">{ this.props.name }</div>
                    <div className="when">{ this.toTime(this.props.when) }</div>
                </div>
                
                <div className="msgContent">
                    { this.props.message }

                    {this.props.moment &&
                        <div className="moment" onClick={ this.props.timeHandler.bind(this, this.props.moment) }>Go to { this.props.moment }</div>
                    }
                </div>
            </div>
        );
    }
}