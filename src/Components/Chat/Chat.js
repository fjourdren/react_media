import React from "react";
import PropTypes from 'prop-types';
import { Message } from "./Message";
import './Chat.css'

export class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ws: undefined,
            connected: false,
            name: "",
            message: "",
            messages: []
        }
    }


    static propTypes = {
        websocket_url: PropTypes.string.isRequired,
        timeHandler: PropTypes.func.isRequired
    };


    componentDidMount() {
        let ws = new WebSocket(this.props.websocket_url);
        this.setState({ ws: ws });

        ws.onopen = () => {
            console.log("connected");
            this.setState({
                connected: true
            });
        };
        
        ws.onmessage = evt => {
            const messages = JSON.parse(evt.data);
            messages.map(message => this.state.messages.push(message));
            this.forceUpdate(); // fix long time to understand something changed (see https://reactjs.org/docs/react-component.html#forceupdate)
        };
        
        ws.onclose = () => {
            console.log("disconnected, reconnect.");
            this.setState({
                connected: false,
                ws: new WebSocket(this.props.websocket_url)
            });
        };
    }


    handleChangename(event) {
        this.setState({name: event.target.value});
    }

    handleChangeMessage(event) {
        this.setState({message: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        if(this.state.name === "" || this.state.name === undefined 
        || this.state.message === "" || this.state.message === undefined) {
            alert("Pseudo and message can't be empty");
        } else {
            const message = { name: this.state.name, message: this.state.message };
            this.state.ws.send(JSON.stringify(message));
            this.setState({message: ""});
        }
    }


    render() {
        return (
            <div className="chat">
                <div className="messages-container">
                    {this.state.messages.map((item, index) => (
                        <Message 
                            timeHandler={ this.props.timeHandler.bind(this) }
                            when={ item.when }
                            name={ item.name }
                            message={ item.message }
                            moment={ item.moment }
                            me={ this.state.name === item.name }/>
                    ))} 
                </div>
                <form className="sendMessage-container" onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Pseudo :
                    </label>
                    <input type="text" value={this.state.name} onChange={this.handleChangename.bind(this)} />
                    
                    <label>
                        Message :
                    </label>
                    <input type="text" value={this.state.message} onChange={this.handleChangeMessage.bind(this)} />
                    
                    <input type="submit" value="Send" />
                </form>
            </div>
        );
    }
}