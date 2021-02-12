import React from "react";
import { render, waitForElement } from "@testing-library/react";
import { Chat } from "./Chat";
import { Message } from "./Message";

test("renders without crashing", () => {
    const div = document.createElement("div");
    render(<Chat timeHandler={ () => {} } websocket_url="wss://test.com"/>, div);
});

test("chat is present", async () => {
    const { container } = render(<Chat timeHandler={ () => {} } websocket_url="wss://test.com"/>);
    const chatElement = await waitForElement(() => container.querySelector('[class="chat"]'));
    expect(chatElement).toBeInTheDocument();
});

test("sendMessage-container is present", async () => {
    const { container } = render(<Chat timeHandler={ () => {} } websocket_url="wss://test.com"/>);
    const sendMessageElement = await waitForElement(() => container.querySelector('[class="sendMessage-container"]'));
    expect(sendMessageElement).toBeInTheDocument();
});





test("renders message without crashing", () => {
    const div = document.createElement("div");
    render(<Message 
        timeHandler={ () => {} }
        when={ 766504 }
        name={ "John" }
        message={ "Hello world" }
        moment={ 52 }
        me={ false }/>, div);
});