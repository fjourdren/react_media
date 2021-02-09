import React from "react";
import { Player } from 'video-react';
import PropTypes from 'prop-types';
import "../../../node_modules/video-react/dist/video-react.css";

export class WebsitePlayer extends React.Component {
    constructor(props) {
        super(props);

        this.player = React.createRef();
    }

    static propTypes = {
        time: PropTypes.number,
        file_url: PropTypes.string.isRequired
    };

    changeCurrentTime(seconds) {
        this.player.seek(seconds);
    };

    componentDidUpdate(prevProps, prevState, snapshot){
        this.changeCurrentTime(this.props.time);
        console.log(this.player.video.props.player.currentTime)
    }

    render() {
        return (
            <div>
            <Player
                ref={ player => { this.player = player; }}
                autoPlay
                src={ this.props.file_url }
            />
            </div>
        );
    }
}