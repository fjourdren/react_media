import React from "react";
import PropTypes from "prop-types";
import { Keyword } from "./Keyword";

import './Keywords.css';

export class Keywords extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: false
        }
    };

    static propTypes = {
        keywords: PropTypes.array.isRequired,
        timeHandler: PropTypes.func.isRequired
    };


    keywordsShow(value) {
        this.setState({selected: value});
    }

    render() {
        if(this.state.selected){
            return (
                <div className="keywords">
                    <h2 className="keywordsButton" onClick={ this.keywordsShow.bind(this, false) }>- Hide keywords</h2>
                    <div className="keywordsListing">
                        { this.props.keywords.map((item, index) => (
                            <Keyword item={item} timeHandler={this.props.timeHandler}/>
                        ))}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="keywords">
                    <h2 className="keywordsButton" onClick={ this.keywordsShow.bind(this, true) }>+ See keywords</h2>
                </div>
            )
        }
    };
};