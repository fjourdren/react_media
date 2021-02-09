import React from "react";
import PropTypes from 'prop-types';
import { ChapterItem } from "./ChapterItem";
import './Chapters.css'

export class ChaptersList extends React.Component {
    static propTypes = {
        chapters: PropTypes.array.isRequired,
        timeHandler: PropTypes.func.isRequired
    };

    render() {
        if(!this.props.chapters) {
            return (
                <h3>Aucun chapitre</h3>
            );
        }
        
        return (
            <ul className="chaptersList">
                {this.props.chapters.map((item, index) => (
                    <ChapterItem 
                        timeHandler={this.props.timeHandler}
                        chapter={item}/>
                ))} 
            </ul>
        );
    }
}