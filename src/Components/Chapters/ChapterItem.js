import React from "react";
import PropTypes from 'prop-types';

export class ChapterItem extends React.Component {
    static propTypes = {
        chapter: PropTypes.object.isRequired,
        timeHandler: PropTypes.func.isRequired
    };

    render() {
        return (
            <li className="chapterName" onClick={this.props.timeHandler.bind(this, this.props.chapter.pos)}>{this.props.chapter.title}</li>
        );
    }
}