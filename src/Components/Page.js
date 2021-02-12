import React from "react";
import {WebsitePlayer} from "./Player/Player";
import { Onglets } from "./Onglets/Onglets";
import { ChaptersList } from "./Chapters/ChaptersList";
import { Chat } from "./Chat/Chat";
import { Map } from "./Map/Map";
import { Keywords } from "./Keywords/Keywords";
import { Title } from "./Title/Title";
import logo from '../logo.svg';
import './Page.css';

export class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 0,
            data_loaded: false,
            data: undefined,
            menuItems: [
                'Chapters',
                'Chat'
            ],
            menuComponents: []
        }
    }


    timeHandler(time) {
        this.setState({ time: parseInt(time) });
    }

    componentDidMount() {
        fetch("https://imr3-react.herokuapp.com/backend")
        .then(res => res.json())
        .then(result => {
            this.setState({
                data_loaded: true,
                data: result
            });

            this.setState({menuComponents: [
                <ChaptersList chapters={this.state.data.Chapters} 
                    timeHandler={ this.timeHandler.bind(this) }/>,
                <Chat websocket_url="wss://imr3-react.herokuapp.com"
                    timeHandler={ this.timeHandler.bind(this) }/>
            ]});
        });
    }

    render() {
        if(this.state.data_loaded) {
            return (
                <div className="page">
                    <header>
                        <img src={logo} className="logo" alt="Netflix" />
                    </header>
                    <div className="content">
                        <main>
                            <WebsitePlayer timeHandler={ this.timeHandler.bind(this) } 
                                time={ this.state.time }
                                file_url={ this.state.data.Film.file_url }/>

                            <Title title={ this.state.data.Film.title } synopsis_url={ this.state.data.Film.synopsis_url }/>

                            <Map timeHandler={ this.timeHandler.bind(this) } waypoints={ this.state.data.Waypoints }/>
                        
                            <Keywords timeHandler={ this.timeHandler.bind(this) } keywords={ this.state.data.Keywords } timeHandler={ this.timeHandler.bind(this) }/>
                        </main>
                        <aside>
                            <Onglets itemsName={this.state.menuItems} items={this.state.menuComponents}/>
                        </aside>
                    </div>
                </div>
            );
        } else {
            return (
                <h1>Waiting backend...</h1>
            );
        }
    }
}